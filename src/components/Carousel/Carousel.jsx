import React, { useState } from 'react';
import "../../styles/Carousel.scss"
import ArrowLeft from "../../assets/arrow-left.svg"
import ArrowRight from "../../assets/arrow-right.svg"
const Carousel = ({ pictures }) => { // Remplacez "picture" par "pictures"
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Vérifiez que les images sont disponibles avant de les afficher
    if (!pictures || pictures.length === 0) {
      return <div>Images not available</div>;
    }

    return (
      <div className="carousel">
        <img src={ArrowLeft} className="carousel__arrow--left" onClick={previousSlide}>
        </img>
        <img
          className="carousel__image"
          src={pictures[currentIndex]} // Remplacez "picture" par "pictures"
          alt={`apartment-${currentIndex}`}
        />
        <img src={ArrowRight} className="carousel__arrow--right" onClick={nextSlide}>
        </img>
      </div>
    );
  };

  export default Carousel