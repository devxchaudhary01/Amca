import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo-box">
        <div className="logo">
          <img src={logo} alt="AMCA Logo" />
          <span className="company-name">AMCA INDUSTRIES</span>
        </div>

        <p className="logo-sub">
          Advance Machines and Components Access Industries
        </p>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/products">Products & Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/updates">Updates</Link></li>

        <li>
          <Link to="/contact-us">
            <button className="contact-btn">Contact Us</button>
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;