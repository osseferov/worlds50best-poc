import { useState } from "react";
import { NAV_ITEMS } from "../../data/schema";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        The World's <span>50</span> Best Restaurants
      </a>

      {/* Desktop menu */}
      <ul className="navbar__links">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger button */}
      <button
        className={`navbar__hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile menu */}
      <ul className={`navbar__mobile-menu ${isMenuOpen ? "active" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
