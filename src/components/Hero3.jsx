import React, { useState } from "react";
import "../styles/hero3.css";

import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";

const cards = [
  { img: img4, title: "Manufacturing Facilities", text: "Reduce heat and improve working conditions." },
  { img: img5, title: "Warehouses", text: "Preserve goods and reduce stale air." },
  { img: img6, title: "Distribution Centres", text: "Reliable cooling and airflow." },
  { img: img7, title: "Factories", text: "Cooling for heavy production." },
  { img: img8, title: "Logistics", text: "Better airflow for logistics." },
  { img: img9, title: "Industrial Plants", text: "Cooling for large scale plants." }
];

const Hero3 = () => {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < cards.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="engineering">

      <div className="slider-wrapper">

        <div
          className="engineering-cards"
          style={{ transform: `translateX(-${index * 350}px)` }}
        >
          {cards.map((card, i) => (
            <div className="card" key={i}>
              <img src={card.img} alt="" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="slider-buttons">
        <button onClick={prevSlide} disabled={index === 0}>Prev</button>
        <button onClick={nextSlide} disabled={index >= cards.length - 3}>Next</button>
      </div>

    </section>
  );
};

export default Hero3;