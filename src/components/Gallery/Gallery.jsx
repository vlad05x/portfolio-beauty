import React, { useRef } from "react";
import "./Gallery.scss";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8",
      alt: "Перманентний макіяж бровей, крупний план",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1522337360788-8a9f81dc236e",
      alt: "Процес збільшення губ, професійне фото",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
      alt: "Результат роботи з перманентним макіяжу глаз",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a3236c",
      alt: "Процес навчання, мастер-клас",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a3236c",
      alt: "Процес навчання, мастер-клас",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a3236c",
      alt: "Процес навчання, мастер-клас",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a3236c",
      alt: "Процес навчання, мастер-клас",
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="gallery">
      <h2>Галерея робіт</h2>
      <div className="gallery__wrapper">
        <button
          className="gallery__button gallery__button--left"
          onClick={scrollLeft}
        >
          ◀
        </button>
        <div className="gallery__grid" ref={scrollContainerRef}>
          {images.map((image) => (
            <div className="gallery-item" key={image.id}>
              <img src={image.src} alt={image.alt} width="300" height="300" />
            </div>
          ))}
        </div>
        <button
          className="gallery__button gallery__button--right"
          onClick={scrollRight}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Gallery;
