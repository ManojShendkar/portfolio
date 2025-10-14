import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase } from "react-icons/fa6";
import { SiPostgresql, SiDrupal } from "react-icons/si";
import "./Skills.css";

const skills = [
  { name: "React JS", icon: <FaReact size={40} /> },
  { name: "Drupal", icon: <SiDrupal size={40} /> },
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "PHP", icon: <FaPhp size={40} /> },
  { name: "SQL", icon: <FaDatabase size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
];

const Skills: React.FC = () => (
  <section id="skills" className="section">
    <h2 className="title">Skills</h2>
    <div className="skills-grid">
      {skills.map((s, i) => (
        <div key={i} className="skill-card">
          {s.icon}
          <p>{s.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
