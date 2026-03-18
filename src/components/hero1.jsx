import React from "react";
import "../styles/hero1.css";

const Hero1 = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-left">
          <h2>
            Cooling and ventilation <br />
            solutions for every space
          </h2>

          <p className="highlight">
            Efficient, reliable, tailored
          </p>
        </div>

        <div className="about-right">
          <p>
            Amca Industries manufactures industrial cooling and ventilation systems
            engineered for large, open spaces. Our product range includes
            <strong> HVLS fans, evaporative coolers, and air circulators</strong>,
            all crafted for efficiency, durability, and performance. With a
            pan-India service network, we offer customised solutions to match
            your unique requirements, ensuring comfort, energy savings, and
            long-term reliability.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero1;