import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">MS</div>
      <nav className="nav">
        {["about", "experience", "tools", "skills", "contact"].map((item) => (
          <a key={item} href={`#${item}`} className="nav-link">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
