import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "TechCorp",
    role: "Frontend Developer",
    period: "2022–Present",
    description:
      "Built scalable React apps with modern state management and optimized performance.",
  },
  {
    company: "WebFusion",
    role: "UI Engineer",
    period: "2020–2022",
    description:
      "Implemented responsive UI components and dashboards using React & TypeScript.",
  },
  {
    company: "DevBase",
    role: "Intern",
    period: "2019–2020",
    description:
      "Assisted in front-end development and learned modern web technologies.",
  },
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(experiences.length).fill(false)
  );
  const [progressHeight, setProgressHeight] = useState(0);

  // Fade in items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = containerRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      let progress = ((windowHeight - containerTop) / containerHeight) * 100;
      progress = Math.min(Math.max(progress, 0), 100);
      setProgressHeight(progress);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="section">
      <h2 className="title">Experience</h2>
      <div className="timeline" ref={containerRef}>
        <div
          className="timeline-progress"
          style={{ height: `${progressHeight}%` }}
        />
        {experiences.map((exp, i) => {
          const active = progressHeight >= ((i + 1) / experiences.length) * 100;
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <div
              key={i}
              className={`timeline-item ${visibleItems[i] ? "visible" : ""} ${side}`}
              data-index={i}
            >
              {/* <div className={`${active ? "active" : ""}`} /> */}
              <div className={`timeline-content ${active ? "line-active" : ""}`}>
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
