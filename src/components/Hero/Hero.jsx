import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero_content">
          <h1 className="hero__title fade-in">
            Найкраща запорука успіху-це закохатися в те, що робиш
          </h1>
          <p className="hero__text fade-in">
            Професійний підхід до краси та навчання
          </p>
          <a href="#contacts" className="hero__button">
            Записатися на консультацію
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
