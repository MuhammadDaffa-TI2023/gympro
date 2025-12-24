import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span>Gym</span>Pro
        </div>

        {/* Menu */}
        <ul className="navbar-menu">
          <li>
            <a href="#sejarah">Sejarah</a>
          </li>
          <li>
            <a href="#gerakan">Tutorial</a>
          </li>
          <li>
            <a href="#fasilitas">Fasilitas</a>
          </li>
          <li>
            <a href="#suplemen">Suplemen</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
