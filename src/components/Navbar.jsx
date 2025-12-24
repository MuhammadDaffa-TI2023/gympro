import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span>Gym</span>Pro
        </div>

        {/* Hamburger Icon */}
        <div className={`navbar-toggle ${isOpen ? "is-active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#sejarah" onClick={() => setIsOpen(false)}>Sejarah</a>
          </li>
          <li>
            <a href="#gerakan" onClick={() => setIsOpen(false)}>Tutorial</a>
          </li>
          <li>
            <a href="#fasilitas" onClick={() => setIsOpen(false)}>Fasilitas</a>
          </li>
          <li>
            <a href="#suplemen" onClick={() => setIsOpen(false)}>Suplemen</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
