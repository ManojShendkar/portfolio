import React, { useRef, useEffect } from "react";

interface ConnectedParticlesProps {
    /** Number of moving points */
    count?: number;
    /** Max distance for connecting lines */
    maxDistance?: number;
    /** Base movement speed multiplier */
    speed?: number;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
}

interface MouseState {
    x: number | null;
    y: number | null;
    active: boolean;
}

const ConnectedParticles: React.FC<ConnectedParticlesProps> = ({
    count = 80,
    maxDistance = 120,
    speed = 0.6,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number>(0);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef<MouseState>({ x: null, y: null, active: false });

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const devicePixelRatio = window.devicePixelRatio || 1;

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = Math.round(rect.width * devicePixelRatio);
            canvas.height = Math.round(rect.height * devicePixelRatio);
            ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        // Initialize particles
        const particles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: rand(0, canvas.width / devicePixelRatio),
                y: rand(0, canvas.height / devicePixelRatio),
                vx: rand(-1, 1) * speed,
                vy: rand(-1, 1) * speed,
                r: rand(0.8, 2.2),
            });
        }
        particlesRef.current = particles;

        // Mouse interactions
        const handleMove = (e: MouseEvent | Touch) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
        };

        const handleMouseEnter = (e: MouseEvent) => {
            mouseRef.current.active = true;
            handleMove(e);
        };

        const handleMouseLeave = () => {
            mouseRef.current.active = false;
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        const handleTouchMove = (ev: TouchEvent) => {
            ev.preventDefault();
            const t = ev.touches[0];
            if (t) handleMove(t);
        };

        const handleTouchStart = (ev: TouchEvent) => {
            ev.preventDefault();
            mouseRef.current.active = true;
            const t = ev.touches[0];
            if (t) handleMove(t);
        };

        const handleTouchEnd = () => handleMouseLeave();

        canvas.addEventListener("mousemove", handleMove);
        canvas.addEventListener("mouseenter", handleMouseEnter);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
        canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
        canvas.addEventListener("touchend", handleTouchEnd);

        let lastTime = performance.now();

        const animate = (now: number) => {
            const dt = Math.min(50, now - lastTime);
            lastTime = now;

            const w = canvas.width / devicePixelRatio;
            const h = canvas.height / devicePixelRatio;
            ctx.clearRect(0, 0, w, h);

            const particles = particlesRef.current;

            for (const p of particles) {
                p.x += p.vx * (dt / 16);
                p.y += p.vy * (dt / 16);

                const mouse = mouseRef.current;
                if (mouse.active && mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
                    const influenceRadius = 200;
                    if (dist < influenceRadius) {
                        const force = (1 - dist / influenceRadius) * 0.35;
                        p.vx += (dx / dist) * force * 0.12;
                        p.vy += (dy / dist) * force * 0.12;
                    }
                }

                const maxV = 2.5 * speed;
                p.vx = Math.max(-maxV, Math.min(maxV, p.vx));
                p.vy = Math.max(-maxV, Math.min(maxV, p.vy));

                if (p.x <= 0 || p.x >= w) p.vx *= -1;
                if (p.y <= 0 || p.y >= h) p.vy *= -1;
            }

            // Draw lines between close particles
            ctx.lineWidth = 1;
            for (let i = 0; i < particles.length; i++) {
                const a = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const d2 = dx * dx + dy * dy;
                    if (d2 <= maxDistance * maxDistance) {
                        const d = Math.sqrt(d2);
                        const alpha = 1 - d / maxDistance;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(200,200,255,${(alpha * 0.6).toFixed(3)})`;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            // Optional: connect particles to mouse
            const mouse = mouseRef.current;
            if (mouse.active && mouse.x !== null && mouse.y !== null) {
                for (const p of particles) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const d2 = dx * dx + dy * dy;
                    const mouseMax = 180;
                    if (d2 <= mouseMax * mouseMax) {
                        const d = Math.sqrt(d2);
                        const alpha = 1 - d / mouseMax;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255,200,200,${(alpha * 0.35).toFixed(3)})`;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            for (const p of particles) {
                ctx.beginPath();
                ctx.fillStyle = "rgba(220,220,255,0.95)";
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", handleMove);
            canvas.removeEventListener("mouseenter", handleMouseEnter);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            canvas.removeEventListener("touchmove", handleTouchMove);
            canvas.removeEventListener("touchstart", handleTouchStart);
            canvas.removeEventListener("touchend", handleTouchEnd);
        };
    }, [count, maxDistance, speed]);

    return (
        <div style={styles.container}>
            <canvas ref={canvasRef} style={styles.canvas} />
        </div>
    );
};

export default ConnectedParticles;

const styles: Record<string, React.CSSProperties> = {
    container: {
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(180deg, #05060a 0%, #0b0f1a 100%)",
    },
    canvas: {
        display: "block",
        width: "100%",
        height: "100%",
        cursor: "crosshair",
    },
};
