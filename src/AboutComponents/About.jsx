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
              Founded in 2011, our journey has been defined by innovation,
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

      <section className="founder">

        <div className="founder-container">

          <div className="founder-img">
            <img src={founder} alt="Founder" />
            <h3>Rahul Verma</h3>
            <span>Managing Director</span>
          </div>

          <div className="founder-text">

            <p>
              Rahul Verma is the Founder and Director of Advance Machines and Components Access Industries ( AMCA Industries), a company dedicated to delivering advanced HVAC, industrial ventilation, and energy-efficient cooling solutions for industrial and commercial applications. With over 15
              Rahul holds a Bachelor of Technology (B.Tech) in Electronics, Instrumentation & Control Engineering from YMCA Institute of Engineering and Technology, Faridabad, Haryana. His engineering background provided him with a strong foundation in automation, instrumentation, and system optimization, which plays a vital role in the development of high-performance airflow and cooling systems.
            </p>

            <p>
              In 2011, he founded Autodynamics Engineering with a clear
              vision: to design innovative engineered air solutions that
              reduce energy consumption and improve air quality.
            </p>

            <p>
              Today, the company operates from a 20,000 sq ft facility
              equipped with advanced production and quality systems.
            </p>

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