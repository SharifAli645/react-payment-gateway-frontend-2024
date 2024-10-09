import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MiLogo</a>
      </div>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#services">Servicios</a>
        </li>
        <li>
          <a href="#about">Nosotros</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
