import React from "react";
import { default as ConnectedParticles } from '../components/ConnectedParticles_old';
import profilePic from "./profile.jpeg"; // Replace with your image path
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const HomePage: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Background Particles */}
      <ConnectedParticles count={80} speed={0.7} maxDistance={150}/>

      {/* Header Navigation */}
      <header style={styles.header}>
        <div style={styles.logo}>MS</div>
        <nav style={styles.nav}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#about" style={styles.navLink}>About Me</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Main Section */}
      
      {/* <main style={styles.mainContent} id="about"> */}
        {/* Left side: Image */}
        <div style={styles.left}>
          <img src={profilePic} alt="Profile" style={styles.profileImage} />
        </div>

        {/* Right side: About Me */}
        <div style={styles.right}>
          <h1 style={styles.heading}>About Me</h1>
          <p style={styles.text}>
            Hi, I’m Manoj. I love building interactive web experiences with
            React and modern web technologies. I enjoy creating smooth,
            animated, and visually appealing interfaces that engage users.
          </p>
          <p style={styles.text}>
            My passion lies in blending functionality with creativity. Whether
            it’s through beautiful UI design or scalable architecture, I aim to
            craft digital experiences that feel great to use.
          </p>
        </div>
      {/* </main> */}

      {/* Footer */}
      <footer style={styles.footer}>
        <a
          href="https://www.linkedin.com/in/manojshendkar/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://github.com/ManojShendkar"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://x.com/manoj_shendkar"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaXTwitter size={22} />
        </a>
      </footer>
    </div>
  );
};

export default HomePage;

// ---------- Styles ----------
const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    background: "#0a0c14",
    color: "white",
    fontFamily: "Inter, sans-serif",
  },

  // Header
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 3rem",
    zIndex: 3,
    background: "rgba(10, 12, 20, 0.6)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: 700,
    letterSpacing: "1px",
  },
  nav: {
    display: "flex",
    gap: "2rem",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    transition: "color 0.2s ease",
  },

  // Main content
  mainContent: {
    position: "absolute",
    top: "70px",
    bottom: "70px",
    left: 0,
    right: 0,
    display: "flex",
    zIndex: 2,
  },
  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "3rem",
  },
  profileImage: {
    width: "100%",
    maxWidth: "420px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    marginBottom: "1rem",
    opacity: 0.9,
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    zIndex: 3,
    background: "rgba(10, 12, 20, 0.6)",
    backdropFilter: "blur(8px)",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
  iconLink: {
    color: "white",
    transition: "color 0.2s ease, transform 0.2s ease",
    textDecoration: "none",
  },
};
