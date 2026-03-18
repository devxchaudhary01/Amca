import React, { useState } from "react";
import "../styles/hero5.css";

import img1 from "../assets/c1.jpg";
import img2 from "../assets/c2.jpg";
import img3 from "../assets/c3.jpg";
import img5 from "../assets/c5.jpg";
import img6 from "../assets/c6.jpg";
import img7 from "../assets/c7.jpg";
import img8 from "../assets/c8.jpg";

const images = [img1, img2, img3, img5, img6, img7, img8];

const Hero5 = () => {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (i) => {
    setIndex(i);
  };

  return (
    <div className="slider-section">

      <button className="arrow left" onClick={prevSlide}>❮</button>

      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="slide" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>❯</button>

      {/* dots */}

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={index === i ? "dot active" : "dot"}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>

    </div>
  );
};

export default Hero5;