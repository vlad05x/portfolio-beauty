import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <>
      <div className="service" id="services">
        <div className="service__container">
          <h2>Мої послуги</h2>
          <div className="service-grid">
            <div className="service-card">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                stroke-width="2"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.58-8 8-8 8 3.58 8 8-3.59 8-8 8z" />
              </svg>
              <h3>Збільшення губ</h3>
              <p>
                Природний об'єм та форма з використанням сучасних препаратів
              </p>
            </div>
            <div className="service-card">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                stroke-width="2"
              >
                <path d="M20 12c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8 8-3.58 8-8z" />
              </svg>
              <h3>Перманентний макіяж</h3>
              <p>
                Брови, губи та стрілки - природний результат на довгі місяці
              </p>
            </div>
            <div className="service-card">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                stroke-width="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <h3>Навчальні курси</h3>
              <p>Професійна підготовка майстрів з нуля</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
