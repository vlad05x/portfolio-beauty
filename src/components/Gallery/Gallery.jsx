import React, { useRef } from "react";
import images from "./ListPhoto"; 
import "./Gallery.scss";

const Gallery = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="gallery" id="gallery">
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
