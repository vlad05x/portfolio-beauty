import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">Про мене</h2>
        <div className="about-content animated">
          <div className="profile-circle">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="Професійне фото косметолога, портрет в круглому форматі"
              width="300"
              height="300"
            />
          </div>
          <div className="about-text">
            <p>
              Привіт! Я професійний косметолог та викладач з більш ніж 13-річним
              досвідом роботи. Моя місія - допомагати людям розкривати свою
              природну красу та навчати майбутніх фахівців сучасним технікам в
              індустрії краси.
            </p>
            <p>
              Постійно вдосконалюю свої навички, відвідую міжнародні конференції
              та майстер-класи, щоб надавати своїм клієнтам та учням
              найсучасніші та безпечні методики.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
