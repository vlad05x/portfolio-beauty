import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="contact__container">
        <h2 className="contact__title">Контакти</h2>
        <div className="contact-grid">
          <div className="contact-info animated">
            <h3>Мої контакти</h3>
            <p>
              <svg
                width="16.013489"
                height="15.992676"
                viewBox="0 0 16.0135 15.9927"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  d="M16.01 1.49C16.01 1.14 15.76 0.86 15.41 0.77L12.16 0.02C11.82 -0.07 11.45 0.11 11.29 0.46L9.79 3.96C9.66 4.27 9.76 4.61 10.01 4.83L11.91 6.39C10.79 8.77 8.82 10.77 6.38 11.93L4.82 10.02C4.6 9.77 4.26 9.68 3.95 9.8L0.45 11.3C0.1 11.46 -0.05 11.83 0.01 12.18L0.76 15.43C0.85 15.77 1.13 15.99 1.51 15.99C9.51 15.99 16.01 9.52 16.01 1.49Z"
                  fill="#4A4A4A"
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </svg>{" "}
              Телефон: +7 (XXX) XXX-XX-XX
            </p>
            <p>
              <svg
                width="16.000000"
                height="12.000000"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Symbol"
                  d="M6.04 6.98C6.6 7.41 7.39 8.02 8 8C8.57 8.02 9.35 7.42 9.91 6.99C10.05 6.88 10.17 6.79 10.28 6.71C14.43 3.71 14.75 3.43 15.68 2.68C15.87 2.56 16 2.34 16 2.09L16 1.5C16 0.68 15.31 0 14.5 0L1.5 0C0.65 0 0 0.68 0 1.5L0 2.09C0 2.34 0.09 2.56 0.28 2.68C1.21 3.43 1.53 3.71 5.68 6.71C5.78 6.79 5.9 6.88 6.04 6.98ZM16 4.12C16 3.96 15.81 3.87 15.68 3.96C14.96 4.53 14.06 5.21 10.87 7.53C10.25 8 9.09 9.03 8 9.03C6.87 9.03 5.75 8 5.09 7.53C1.9 5.21 1 4.53 0.28 3.96C0.15 3.87 0 3.96 0 4.12L0 10.5C0 11.34 0.65 12 1.5 12L14.5 12C15.31 12 16 11.34 16 10.5L16 4.12Z"
                  fill="#4A4A4A"
                  fillOpacity="1.000000"
                  fillRule="evenodd"
                />
              </svg>{" "}
              Email: info@beautypractice.com
            </p>
            <p>
              <svg
                width="12.000000"
                height="16.015625"
                viewBox="0 0 12 16.0156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Symbol"
                  d="M0 6C0 8.43 0.81 9.12 5.37 15.68C5.65 16.12 6.31 16.12 6.59 15.68C11.15 9.12 12 8.43 12 6C12 2.68 9.31 0 6 0C2.65 0 0 2.68 0 6ZM8.5 6C8.5 7.4 7.37 8.5 6 8.5C4.59 8.5 3.5 7.4 3.5 6C3.5 4.62 4.59 3.5 6 3.5C7.37 3.5 8.5 4.62 8.5 6Z"
                  fill="#4A4A4A"
                  fillOpacity="1.000000"
                  fillRule="evenodd"
                />
              </svg>{" "}
              Адреса: г. Москва, ул. Примерная, д. 1
            </p>
            <div className="social-links">
              <h3>Соціальні мережі</h3>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-telegram"></i> Telegram
              </a>
            </div>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5887712000984!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sen!2sru!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: "0px", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
