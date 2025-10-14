import React from "react";
import "./About.css";
import profilePic from "../assets/profile.jpeg"; // replace with your image path

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* Left: Rounded square image */}
        <div className="about-left">
          <div className="image-square">
            <img src={profilePic} alt="Manoj" className="about-image" />
          </div>
        </div>

        {/* Right: About text */}
        <div className="about-right">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I’m <strong>Manoj Shendkar</strong>, a Frontend Developer passionate about
            building dynamic, responsive, and visually appealing web applications.
          </p>
          <p className="about-text">
            I specialize in React, TypeScript, and modern frontend tooling, focusing on
            clean, maintainable code and smooth user experiences.
          </p>
          <p className="about-text">
            Outside of work, I explore animations, UI/UX design, and contribute to
            open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
