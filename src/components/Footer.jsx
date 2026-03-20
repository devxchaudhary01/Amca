import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="footer">
      <div className="overlay">

        <div className="footer-container">

          {/* COMPANY */}
          <div>
            <h1 className="footer-logo">AMCA INDUSTRIES</h1>

            <p className="footer-desc">
              Energy-efficient, environmentally friendly and
              cost-effective cooling systems designed for modern industries.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list cursor-pointer">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about-us" className="footer-link">About</Link></li>
              <li><Link to="/products" className="footer-link">Products</Link></li>
              <li><Link to="/contact-us" className="footer-link">Enquiry</Link></li>
              <li><Link to="/contact-us" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="cursor-pointer">
            <h3 className="footer-heading">Products</h3>
            <ul className="footer-list">
              <li onClick={() => navigate("/products")} className="footer-link ">HVLS Fans</li>
              <li onClick={() => navigate("/products")} className="footer-link ">Industrial Air Coolers</li>
              <li onClick={() => navigate("/products")} className="footer-link ">Exhaust Fans</li>
              <li onClick={() => navigate("/products")} className="footer-link ">Air Circulators</li>
              <li onClick={() => navigate("/products")} className="footer-link ">Wallmount BLDC Fans</li>
              <li onClick={() => navigate("/products")} className="footer-link ">YU-GO Fans</li>
              <li onClick={() => navigate("/products")} className="footer-link ">AHU</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-contactCard">
            <h4 className="footer-contactHeading">GET IN TOUCH WITH US</h4>
            <p className="footer-contactText">
              📞  (+91) 9217962766 <br />
              📞  (+91) 9625676397
              <br />
              📧 support@amcaindustries.com <br />
              🌐 www.amcaindustries.com <br />
              📍 Plot No. 110, NGIA Sector 51, Faridabad 121004
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="statsRow">
          <div className="statBox first">1000+ <br /> Installations</div>
          <div className="statBox second">500+ <br /> Cities</div>
          <div className="statBox third">400+ <br /> Clients</div>
          <div className="statBox fourth">200+ <br /> Industries</div>
        </div>

        <div className="bottom">
          © 2026 AMCA Industries | Designed for Performance 🚀
        </div>

      </div>
    </footer>
  );
};

export default Footer;