import React from "react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <a href="https://linkedin.com" className="icon"><FaLinkedin /></a>
    <a href="https://github.com" className="icon"><FaGithub /></a>
    <a href="https://x.com" className="icon"><FaXTwitter /></a>
  </footer>
);

export default Footer;
