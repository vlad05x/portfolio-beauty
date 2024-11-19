import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div class="header">
        <div class="header__logo">
          <h2 class="header__title">Beauty Practice</h2>
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <a href="#services" class="header__nav-link">
                Послуги
              </a>
            </li>
            <li class="header__nav-item">
              <a href="#gallery" class="header__nav-link">
                Галерея
              </a>
            </li>
            <li class="header__nav-item">
              <a href="#about" class="header__nav-link">
                Про мене
              </a>
            </li>
            <li class="header__nav-item">
              <a href="#courses" class="header__nav-link">
                Курси
              </a>
            </li>
            <li class="header__nav-item">
              <a href="#contacts" class="header__nav-link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
