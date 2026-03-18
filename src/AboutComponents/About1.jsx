import React, { useState, useEffect } from "react";
import "../styles-about/about.css";

import img1 from "../assets/v1.png";
import img2 from "../assets/v2.png";
import img3 from "../assets/v3.png";
import img4 from "../assets/v4.png";
import img5 from "../assets/5.png";

const CardsSlider = () => {

  const cards = [
    {
      img: img1,
      title: "Responsibility",
      desc: "We prioritise safety, sustainability and accountability across people, processes and performance."
    },
    {
      img: img2,
      title: "Customer Focus",
      desc: "We listen, adapt and respond to customer needs, building long-term trust through tailored solutions."
    },
    {
      img: img3,
      title: "Excellence",
      desc: "We follow structured systems to deliver consistent, high-quality outcomes with room for continuous improvement."
    },
    {
      img: img4,
      title: "Innovation",
      desc: "We develop smart engineered solutions that improve efficiency and reduce operational costs."
    },
    {
      img: img5,
      title: "Integrity",
      desc: "We work with honesty and transparency in every project we undertake."
    }
  ];

  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  /* responsive cards count */

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth < 600) {
        setCardsToShow(1);
      }
      else if (window.innerWidth < 900) {
        setCardsToShow(2);
      }
      else {
        setCardsToShow(3);
      }

    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  /* auto slide */

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) =>
        prev === cards.length - cardsToShow ? 0 : prev + 1
      );

    }, 3500);

    return () => clearInterval(interval);

  }, [cardsToShow]);

  return (

    <section className="cards-section">

      <div className="slider-container">

        <div
          className="cards-track"
          style={{
            transform: `translateX(-${index * (100 / cardsToShow)}%)`
          }}
        >

          {cards.map((card, i) => (

            <div className="card" key={i}>

              <img src={card.img} alt={card.title} />

              <h3>{card.title}</h3>

              <p>{card.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default CardsSlider;