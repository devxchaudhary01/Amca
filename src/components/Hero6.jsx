import React from "react";
import "../styles/hero6.css";

import cofco from "../assets/cofco.png";
import mumbai from "../assets/police.png";
import ola from "../assets/ola.png";

const Hero6 = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-container">

        <div className="testimonial-card">
          <img src={cofco} alt="COFCO" className="testimonial-logo" />

          <p className="testimonial-text">
            Positive pressure could be generated in the user area without
            increasing the humidity. We will definitely like to be associated
            with Amca Industries for future projects.
          </p>

          <h4 className="testimonial-company">
            COFCO AGRI LIMITED
          </h4>
        </div>

        <div className="testimonial-card">
          <img src={mumbai} alt="Mumbai Central" className="testimonial-logo" />

          <p className="testimonial-text">
            We were able to make our commuters/passengers' lives comfortable by
            installing Amca Industries HVLS fans at Mumbai Central Railway Station.
          </p>

          <h4 className="testimonial-company">
            MUMBAI CENTRAL RAILWAY
          </h4>
        </div>

        <div className="testimonial-card">
          <img src={ola} alt="Ola Electric" className="testimonial-logo" />

          <p className="testimonial-text">
            We're very satisfied with the efficient air circulation, low noise
            levels, and consistent performance, ensuring a comfortable,
            productive environment.
          </p>

          <h4 className="testimonial-company">
            OLA ELECTRIC
          </h4>
        </div>

      </div>
    </section>
  );
};

export default Hero6;