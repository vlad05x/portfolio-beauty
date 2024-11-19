import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero_content">
            <h1 className="hero__title">Краса, впевненість, майстерність</h1>
            <p className="hero__text">
              Професійний підхід до краси та навчання{" "}
            </p>
            <a href="#contact" className="hero__button">Записатися на консультацію</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
