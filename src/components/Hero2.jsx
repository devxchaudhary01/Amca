import React from "react";
import "../styles/hero2.css";

import fan from "../assets/hvls2.png";
import cooler from "../assets/exhaust2.png";
import exhaust from "../assets/exhaust.png";

const products = [
  {
    img: fan,
    title: "HVLS Fans",
    desc: "Energy-efficient fans that improve airflow across large spaces."
  },
  {
    img: cooler,
    title: "Evaporative Air Coolers",
    desc: "Naturally efficient coolers that deliver the fresh air."
  },
  {
    img: exhaust,
    title: "Exhaust Fans",
    desc: "High-capacity fans that remove heat, fumes and dust."
  }
];

const Hero2 = () => {
  return (
    <section className="products-section">
      <div className="products-container">

        {products.map((item, index) => (
          <div className="product-card" key={index}>

            <div className="product-img">
              <img src={item.img} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button className="explore-btn">
              Explore <span>»</span>
            </button>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Hero2;