import React from "react";
import Avatar from "../../images/Galleary/avatar2.JPG"
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">Про мене</h2>
        <div className="about-content animated">
          <div className="profile-circle hero-3d-element">
            <img
              src={Avatar}
              alt="Професійне фото косметолога, портрет в круглому форматі"
              width="300"
              height="300"
            />
          </div>
          <div className="about-text">
            <p>
              Засновниця студії, акредитований майстер та викладач КССК 4 рівня
              з перманентного макіяжу. Маю більше 100 учнів з Європи та України
              які успішно працюють в Україні та закордоном👌 В індустрії краси з
              2011 року. Свої знання та навички здобула в найпрестижніших
              академіях краси. Завжди відвідую конференції, конгреси та підвищую
              кваліфікацію 👌 Володію найтиповішими техніками перманенту 💫
            </p>
            <p>
              Щиро ділюся своїм досвідом, новими навичками та секретами і
              фішками дорогого перманенту зі своїми учнями. Мій девіз: Найкраща
              запорука успіху-це закохатися в те, що робиш🤍
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
