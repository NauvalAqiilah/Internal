import React, { useState, useEffect } from "react";
import "./carousel.css"; // Import your Mini CSS styles for the carousel
import fotoRPL from "./perkakas/FotoRPL.jpg";
import fotoMM from "./perkakas/FotoMM.jpg";
import fotoTKJ from "./perkakas/FotoTKJ.jpg";

const Carousel = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide data, each containing an image URL, title, and description
  const slides = [
    {
      imageUrl: fotoRPL,
    },
    {
      imageUrl: fotoMM,
    },
    {
      imageUrl: fotoTKJ,
    },
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Automatically move to the next slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        ></div>
      ))}
    </div>
  );
};

export default Carousel;
