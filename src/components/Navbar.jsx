import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
<a href="#hero" className="navbar-logo" onClick={closeMenu}>
  Hair By Rodi
</a>

      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
  <li><a href="#services" onClick={closeMenu}>Tjänster</a></li>
  <li><a href="#about" onClick={closeMenu}>Om mig</a></li>
  <li><a href="#contact" onClick={closeMenu}>Kontakt</a></li>
  <li>
    <a
      href="https://boka.timma.se/hairbyrodi"
      target="_blank"
      rel="noopener noreferrer"
      onClick={closeMenu}
    >
      Boka nu
    </a>
  </li>
</ul>

    </nav>
  );
}

export default Navbar;
