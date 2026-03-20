import React, { useState } from "react";
import "../styles-about/about2.css";

import img1 from "../assets/g1.jpg";
import img2 from "../assets/g2.jpg";
import img3 from "../assets/g3.jpg";
import img4 from "../assets/g4.jpg";
import img5 from "../assets/g5.jpg";
import img6 from "../assets/g6.jpg";
import img7 from "../assets/g1.jpg";
import img8 from "../assets/Amca.png";

const WorkGallery = () => {

  const images = [img1,img2,img3,img4,img5,img6,img7,img8];

  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="work-page">

      {/* SECTION 1 */}

      <section className="work-section">

        <div className="work-left">
          <h2>How we work</h2>
          <h3>From design to delivery</h3>
        </div>

        <div className="work-right">
          <p>
            We handle every step in-house, from design and engineering
            to manufacturing and delivery. Our operations are built for
            speed and precision, ensuring consistent quality across every
            project. With a pan-India network, we provide rapid support and
            seamless integration tailored to every site's unique requirements.
          </p>
        </div>

      </section>

      {/* SECTION 2 IMAGE GRID */}

      <section className="gallery-section">

        <div className="gallery-grid">

          {images.map((img,i)=>(
            <img
              key={i}
              src={img}
              alt=""
              onClick={()=>setActiveImg(img)}
            />
          ))}

        </div>

      </section>


      {/* IMAGE POPUP */}

      {activeImg && (

        <div className="image-modal">

          <button
            className="close-btn"
            onClick={()=>setActiveImg(null)}
          >
            ✕
          </button>

          <img src={activeImg} alt="preview" />

        </div>

      )}

    </div>
  );
};

export default WorkGallery;