import React, { useState, useEffect } from "react";
import "../styles-about/about.css"
import aboutImg from "../assets/h3.png";
import founder from "../assets/amca's maalik.png";
import { FaUserCheck, FaCogs, FaLightbulb } from "react-icons/fa";
import WorkGallery from "./About2";
import AboutCertifications from "./About3";
import Process from "./Process";



const About = () => {


  return (
    <div className="about-page">

      {/* HERO IMAGE */}
      <div className="about-hero">
        <img src={aboutImg} alt="About" />
      </div>

      {/* WAVES */}
      <div className="waves">

        <svg className="wave layer1" viewBox="0 0 1440 320">
          <path d="M0,192L80,186C160,181,320,171,480,176C640,181,800,203,960,197C1120,192,1280,160,1360,144L1440,128V320H0Z"></path>
        </svg>

        <svg className="wave layer2" viewBox="0 0 1440 320">
          <path d="M0,224L80,213C160,203,320,181,480,170C640,160,800,160,960,181C1120,203,1280,245,1360,266L1440,288V320H0Z"></path>
        </svg>

        <svg className="wave layer3" viewBox="0 0 1440 320">
          <path d="M0,256L80,245C160,235,320,213,480,208C640,203,800,213,960,224C1120,235,1280,245,1360,250L1440,256V320H0Z"></path>
        </svg>

      </div>

      {/* ABOUT CONTENT */}

      <section className="about-section">

        <div className="about-container">

          <div className="about-left">
            <h1>Leading with innovation</h1>
            <h3>Driven by expertise, powered by passion</h3>
          </div>

          <div className="about-right">
            <p>
              We are a team of dedicated professionals committed to enhancing
              comfort and efficiency in industrial and commercial spaces.
              Founded in 2026, our journey has been defined by innovation,
              reliability, and a deep understanding of our clients’ needs.
            </p>

            <p>
              Our engineers, designers, and support staff work collaboratively
              to deliver customised solutions that not only meet but exceed
              expectations.
            </p>

          </div>

        </div>

      </section>

      {/* FOUNDER */}
      {/* FOUNDER */}

      <section className="founder">

        <div className="founder-container">

          <div className="founder-img">
            <img src={founder} alt="Founder" />
            <h3>Rahul Verma</h3>
            <span>Founder & Director – AMCA Industries</span>
          </div>

          <div className="founder-text">

            <p>
              Rahul Verma is the Founder and Director of Advance Machines and Components Access Industries (AMCA Industries), a company dedicated to delivering advanced HVAC, industrial ventilation, and energy-efficient cooling solutions for industrial and commercial applications. With over 15 years of professional experience in HVAC systems, industrial airflow management, and climate control technologies, he has established himself as a dynamic entrepreneur committed to innovation and quality.
            </p>

            <p>
              Rahul holds a Bachelor of Technology (B.Tech) in Electronics, Instrumentation & Control Engineering from YMCA Institute of Engineering and Technology, Faridabad, Haryana. His engineering background provides a strong foundation in automation, instrumentation, and system optimization, which plays a vital role in developing high-performance airflow and cooling systems.
            </p>

            <p>
              To complement his technical expertise, Rahul pursued an MBA in Finance and Marketing from Harcourt Butler Technical University (HBTU), Kanpur, Uttar Pradesh. This combination of engineering knowledge and business strategy enables him to bridge technology with market needs, driving innovation and sustainable business growth.
            </p>

            <p>
              With a passion for HVAC technology and industrial climate control, Rahul founded AMCA Industries with the vision of delivering reliable, energy-efficient, and technologically advanced airflow solutions for factories, warehouses, commercial buildings, and large industrial spaces.
            </p>

            <p>
              Under his leadership, the company specializes in HVLS fans, evaporative air cooling systems, industrial ventilation systems, and HVAC airflow optimization technologies. He has consistently focused on enhancing workplace comfort, productivity, and energy efficiency.
            </p>

            <p>
              Guided by his commitment to innovation, quality, and customer satisfaction, Rahul Verma continues to lead AMCA Industries toward becoming a recognized name in HVAC engineering and advanced cooling technologies.
            </p>

            <h4 style={{ marginTop: "20px" }}>Founder’s Vision</h4>

            <p style={{ fontStyle: "italic" }}>
              "Our goal is to engineer smart HVAC and airflow solutions that create comfortable, efficient, and sustainable environments for industries."
            </p>

            <p style={{ fontWeight: "bold" }}>— Rahul Verma</p>

          </div>

        </div>

      </section>

      <section className="stand-section">
        <div className="stand-container">

          {/* LEFT SIDE */}
          <div className="stand-left">
            <h2>Our Process</h2>
            <h3>Innovation, integrity, insight</h3>
          </div>

          {/* RIGHT SIDE */}
          <div className="stand-right">
            <p>
              At AMCA Industries, we follow a systematic and professional approach to deliver the most efficient HVAC, ventilation, and industrial cooling solutions for every project.
              From initial consultation to final installation, our process ensures precision, reliability, and optimal system performance.
            </p>

            <div className="stand-features">

              <div className="feature">
                <div className="icon">
                  <FaUserCheck />
                </div>
                <p>Customer-First Thinking</p>
              </div>

              <div className="feature">
                <div className="icon">
                  <FaCogs />
                </div>
                <p>Operational Excellence</p>
              </div>

              <div className="feature">
                <div className="icon">
                  <FaLightbulb />
                </div>
                <p>Simple, Smart Innovation</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Process />

      <section className="core-values">
        {/* LEFT SIDE */}
        <div className="stand-left">
          <h2>Our Core Values</h2>
          <h3>Strong Foundations for Real Result</h3>
        </div>

        {/*RIGHT SIDE */}
        <div>
          <p>
            Our core values define how we operate, from the way we
            design our systems to how we engage with clients. They
            guide our commitment to quality, integrity, and
            innovation, ensuring that every solutions we deliver is
            built to perform, built to last, and built to make a diffrence.
          </p>
        </div>
      </section>

      <WorkGallery />
      <AboutCertifications />

    </div >
  );
};

export default About;