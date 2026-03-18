import React, { useState, useEffect } from "react";
import "../styles/hero.css";


import img2 from "../assets/h2.png";
import img3 from "../assets/h3.png";
import Hero1 from "./hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
import Hero5 from "./Hero5";
import Hero6 from "./Hero6";


const images = [ img2, img3];

const HeroSection = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);

  }, []);

  return (
    <>
    <section className="hero">

      {/* Background Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`hero-img ${i === index ? "active" : ""}`}
          alt="background"
        />
      ))}


      {/* Waves */}

      <div className="waves">

        <svg viewBox="0 0 1440 200" className="wave layer1">
          <path d="M0,120 C300,200 1100,0 1440,120 L1440,200 L0,200 Z"/>
        </svg>

        <svg viewBox="0 0 1440 200" className="wave layer2">
          <path d="M0,140 C350,210 1100,40 1440,140 L1440,200 L0,200 Z"/>
        </svg>

        <svg viewBox="0 0 1440 200" className="wave layer3">
          <path d="M0,160 C400,230 1100,80 1440,160 L1440,200 L0,200 Z"/>
        </svg>

      </div>

    </section>
    <Hero1/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <Hero5/>
    <Hero6/>
    </>
  );
};

export default HeroSection;