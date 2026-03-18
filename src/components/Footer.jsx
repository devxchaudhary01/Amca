import React from "react";
import "../styles/Footer.css";

import { FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

import bg from "../assets/b1.jpg";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer-overlay">

        <div className="footer-container">

          {/* Column 1 */}
          <div className="footer-col">
            <h3 className="footer-logo">Amca Industies</h3>

            <p className="footer-text">
              Energy-efficient, environmentally friendly
              and cost-effective cooling systems
            </p>

            <div className="social-icons">
              <span className="icon linkedin"><FaLinkedinIn /></span>
              <span className="icon facebook"><FaFacebookF /></span>
              <span className="icon instagram"><FaInstagram /></span>
              <span className="icon youtube"><FaYoutube /></span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3>QUICK LINKS</h3>

            <ul>
              <li><BsChevronRight /> About Us</li>
              <li><BsChevronRight /> Applications</li>
              <li><BsChevronRight /> Installations</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3>QUICK LINKS</h3>

            <ul>
              <li><BsChevronRight /> HVLS Fans</li>
              <li><BsChevronRight /> Evaporative Air Coolers</li>
              <li><BsChevronRight /> Exhaust Fans</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3><FaPhoneAlt className="footer-icon" /> CONTACT</h3>

            <p>(+91) 9217962766</p>
            <p>9625676397</p>
            <p>info@amcaindustries.com</p>
            <p>Sales@amcaindustries.com</p>

            <h3 className="head-office">
              <FaMapMarkerAlt className="footer-icon" /> HEAD OFFICE
            </h3>

            <p>Pune, Maharashtra</p>
          </div>

        </div>

        {/* Stats Section */}
        <div className="footer-stats">
          <h2>
            10,000+ Installations | 500+ Cities | 100+ Distributors | 100+ Industries
          </h2>

          <p>
            Product supply, installation and service available across India.
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        Designed by WeCare Digital | Powered by CLOUDPURSUIT®
      </div>
    </footer>
  );
};

export default Footer;