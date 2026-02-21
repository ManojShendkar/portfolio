import React from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <a href="https://www.linkedin.com/in/manojshendkar/" className="icon" target="_blank"><FaLinkedin /></a>
    <a href="https://github.com/ManojShendkar" className="icon" target="_blank"><FaGithub /></a>
    <a href="https://x.com/manoj_shendkar" className="icon" target="_blank"><FaXTwitter /></a>
    <a href="https://www.instagram.com/manoj.shendkar.0207/" className="icon" target="_blank"><FaInstagram /></a>
  </footer>
);

export default Footer;
