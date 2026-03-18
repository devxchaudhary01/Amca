import React from "react";
import "../styles-about/about3.css";
import bharat from '../assets/bharat.png'
import lion from '../assets/lion.png'
import map from '../assets/ind-map.png'

const AboutCertifications = () => {
  return (
    <section className="certifications-section">

      {/* Top Logos */}
      <div className="certification-logos">

        <img
          src={bharat}
          alt="aatmanirbhar"
          className="logo"
        />

        <img
          src={lion}
          alt="make in india"
          className="logo"
        />

        <img
          src={map}
          alt="vocal for local"
          className="logo"
        />

      </div>

      {/* Bottom Content */}

      
      

    </section>
  );
};

export default AboutCertifications;