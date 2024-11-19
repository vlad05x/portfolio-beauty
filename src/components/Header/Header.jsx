import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <h2 className="header__title">Beauty Practice</h2>
      </div>
      <button
        className={`header__burger ${
          isMenuOpen ? "header__burger--active" : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#services" className="header__nav-link">
              Послуги
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#gallery" className="header__nav-link">
              Галерея
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#about" className="header__nav-link">
              Про мене
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#courses" className="header__nav-link">
              Курси
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#contacts" className="header__nav-link">
              Контакти
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
