import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase } from "react-icons/fa6";
import { SiRedux, SiReactquery, SiPostgresql, SiDrupal, SiReacttable } from "react-icons/si";
import profilePic from "./profile.jpeg";
import ConnectedParticles from "../components/ConnectedParticles_old";

const PortfolioPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <ConnectedParticles count={80} speed={0.7} maxDistance={150} />

      {/* Navbar */}
      <header style={styles.header}>
        <div style={styles.logo}>MS</div>
        <nav style={styles.nav}>
          {["home", "about", "experience", "tools", "skills", "contact"].map((item) => (
            <a key={item} href={`#${item}`} style={styles.navLink}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.left}>
          <img src={profilePic} alt="Profile" style={styles.profileImage} />
        </div>
        <div style={styles.right}>
          <h1 style={styles.heading}>Hi, I'm Manoj 👋</h1>
          <p style={styles.text}>
            A passionate Frontend Developer specializing in React, building
            smooth, interactive, and performant user experiences.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.text}>
          I’m a software engineer focused on building scalable, maintainable, and user-friendly web applications.
          With experience in both frontend and backend, I bridge design and technology to create seamless products.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        <div style={styles.timeline}>
          {[
            { company: "TechCorp Pvt. Ltd.", role: "Frontend Developer", year: "2022 - Present", desc: "Developing modern React apps and integrating complex UI features." },
            { company: "WebFusion", role: "UI Engineer", year: "2020 - 2022", desc: "Built responsive layouts and improved UX performance." },
            { company: "DevBase", role: "Intern Developer", year: "2019 - 2020", desc: "Learned full-stack development with PHP, SQL, and React." },
          ].map((exp, i) => (
            <div key={i} className="reveal" style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineContent}>
                <h3 style={{ margin: 0 }}>{exp.role}</h3>
                <h4 style={{ margin: "4px 0", color: "#aaa" }}>{exp.company}</h4>
                <p style={{ fontSize: "0.9rem", color: "#ccc" }}>{exp.year}</p>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" style={styles.section}>
        <h2 style={styles.sectionTitle}>Tools I Use</h2>
        <div style={styles.toolsGrid}>
          {[
            // { name: "AG Grid", icon: <SiAggrid size={40} />, desc: "Advanced data grid for React." },
            { name: "React Query", icon: <SiReactquery size={40} />, desc: "Server-state management library." },
            { name: "React Table", icon: <SiReacttable size={40} />, desc: "Powerful table rendering library." },
            { name: "Redux", icon: <SiRedux size={40} />, desc: "State management for predictable apps." },
          ].map((tool, i) => (
            <div key={i} style={styles.toolCard}>
              {tool.icon}
              <h4>{tool.name}</h4>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <div style={styles.skillsGrid}>
          {[
            { name: "React JS", icon: <FaReact size={40} /> },
            { name: "Drupal", icon: <SiDrupal size={40} /> },
            { name: "HTML", icon: <FaHtml5 size={40} /> },
            { name: "CSS", icon: <FaCss3Alt size={40} /> },
            { name: "JavaScript", icon: <FaJs size={40} /> },
            { name: "PHP", icon: <FaPhp size={40} /> },
            { name: "SQL", icon: <FaDatabase size={40} /> },
            { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
          ].map((skill, i) => (
            <div key={i} style={styles.skillCard}>
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Me</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <textarea placeholder="Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <p>Email: <a href="mailto:shendkarmanoj1996@gmail.com" style={styles.link}>shendkarmanoj1996@gmail.com</a></p>
          <p>Mobile: +91-9819621261</p>
          <p>Location: Mumbai, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={styles.iconLink}><FaLinkedin size={22} /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={styles.iconLink}><FaGithub size={22} /></a>
        <a href="https://x.com" target="_blank" rel="noreferrer" style={styles.iconLink}><FaXTwitter size={22} /></a>
      </footer>

      {/* Animations */}
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease;
          }
          .reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  );
};

export default PortfolioPage;

// ------------------- Styles -------------------
const styles: Record<string, React.CSSProperties> = {
  container: { position: "relative", color: "white", background: "#0a0c14", fontFamily: "Inter, sans-serif" },
  header: {
    position: "fixed", top: 0, left: 0, width: "100%", height: "70px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 3rem", zIndex: 10, background: "rgba(10,12,20,0.7)", backdropFilter: "blur(8px)"
  },
  logo: { fontSize: "1.8rem", fontWeight: 700 },
  nav: { display: "flex", gap: "2rem" },
  navLink: { color: "white", textDecoration: "none", fontWeight: 500 },
  hero: { display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "100vh", padding: "8rem 6rem" },
  left: { flex: 1, display: "flex", justifyContent: "center" },
  right: { flex: 1 },
  profileImage: { width: "80%", borderRadius: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.5)" },
  heading: { fontSize: "2.5rem", marginBottom: "1rem" },
  text: { fontSize: "1.1rem", lineHeight: 1.7, opacity: 0.9 },
  section: { padding: "6rem 4rem", textAlign: "center" },
  sectionTitle: { fontSize: "2rem", marginBottom: "2rem" },
  timeline: { position: "relative", margin: "2rem auto", width: "70%", borderLeft: "2px solid rgba(255,255,255,0.2)" },
  timelineItem: { marginBottom: "2rem", paddingLeft: "2rem", position: "relative" },
  timelineDot: { position: "absolute", left: "-7px", top: "10px", width: "12px", height: "12px", background: "#4FC3F7", borderRadius: "50%" },
  timelineContent: { background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "10px" },
  toolsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" },
  toolCard: { background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "1.5rem", backdropFilter: "blur(6px)" },
  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "1.5rem" },
  skillCard: { background: "rgba(255,255,255,0.05)", borderRadius: "10px", padding: "1rem", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", maxWidth: "400px", margin: "0 auto" },
  input: { width: "100%", padding: "0.8rem", borderRadius: "6px", border: "none" },
  textarea: { width: "100%", padding: "0.8rem", height: "120px", borderRadius: "6px", border: "none" },
  button: { background: "#4FC3F7", border: "none", padding: "0.8rem 1.5rem", borderRadius: "6px", cursor: "pointer", fontWeight: 600 },
  link: { color: "#4FC3F7", textDecoration: "none" },
  footer: { textAlign: "center", padding: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" },
  iconLink: { color: "white", margin: "0 1rem" },
};
