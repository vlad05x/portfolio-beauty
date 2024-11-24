import React from "react";
import "./Courses.scss";

const Courses = () => {
  return (
    <section className="courses" id="courses">
      <div className="courses__container">
        <h2 className="courses__title">Курси</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3>
              Курс майстер перманентного макіяжу -1 зона (Брови від А до Я)
            </h3>
            <p>Тривалість: 4 дні навчання + БОНУС в подарунок 🎁</p>
            <p>Включає теорію та практику на моделях</p>
            <a href="#contacts" className="cta-button">
              Записатися
            </a>
          </div>
          <div className="course-card animated">
            <h3>
              Курс майстер перманентного макіяжу -3 зони - (брови, губи, очі){" "}
            </h3>
            <p>Тривалість: 6 днів навчання + БОНУС в подарунок 🎁 </p>
            <p>Включає теорію та практику на моделях</p>
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
