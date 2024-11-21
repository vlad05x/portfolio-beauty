import React from "react";
import "./Courses.scss";

const Courses = () => {
  return (
    <section className="courses" id="courses">
      <div className="courses__container">
        <h2 className="courses__title">Курси</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3>Базовий курс перманентного макіяжу</h3>
            <p>Тривалість: 2 місяці</p>
            <p>Старт курсу: щомісяця</p>
            <p>Включає теорію та практику на моделях</p>
            <a href="#contacts" className="cta-button">
              Записатися
            </a>
          </div>
          <div className="course-card animated">
            <h3>Поглиблений курс ін'єкційних методик</h3>
            <p>Тривалість: 3 місяці</p>
            <p>Старт курсу: по набору групи</p>
            <p>Для практикуючих косметологів</p>
            <a href="#contacts" className="cta-button">
              Записатися
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
