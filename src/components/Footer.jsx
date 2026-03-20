import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const speed = 20;
    const increment = target / 50;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, speed);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div style={styles.statCard}>
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.overlay}>
        <div style={styles.container}>

          {/* LEFT */}
          <div style={styles.left}>
            <h1 style={styles.logo}>AMCA INDUSTRIES</h1>

            <p style={styles.desc}>
              Engineering advanced cooling & ventilation systems
              trusted across industries. Performance, reliability
              and innovation — all in one.
            </p>

            {/* COUNTERS */}
            <div style={styles.stats}>
              <Counter target={1000} label="Installations" />
              <Counter target={300} label="Cities" />
              <Counter target={100} label="Clients" />
              <Counter target={50} label="Industries" />
            </div>
          </div>

          {/* RIGHT */}
          <div style={styles.right}>

            {/* LINKS */}
            <div>
              <h3 style={styles.heading}>Quick Links</h3>
              <ul style={styles.list}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                <li><Link to="/about" style={styles.link}>About</Link></li>
                <li><Link to="/products" style={styles.link}>Products</Link></li>
                <li><Link to="/enquiry" style={styles.link}>Enquiry</Link></li>
                <li><Link to="/contact" style={styles.link}>Contact</Link></li>
              </ul>
            </div>

            {/* PRODUCTS */}
            <div>
              <h3 style={styles.heading}>Products</h3>
              <ul style={styles.list}>
                <li style={styles.link}>HVLS Fans</li>
                <li style={styles.link}>Industrial Air Coolers</li>
                <li style={styles.link}>Exhaust Fans</li>
                <li style={styles.link}>Air Circulators</li>
                <li style={styles.link}>Wallmount BLDC Fans</li>
                <li style={styles.link}>YU-GO Fans</li>
                <li style={styles.link}>AHU</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 style={styles.heading}>Contact</h3>
              <p style={styles.contact}>
                📍 AMCA Industries, India <br />
                📧 support@amcaindustries.com <br />
                📞 +91 98765 43210
              </p>

              {/* SOCIAL */}
              <div style={styles.social}>
                <span style={styles.icon}>🌐</span>
                <span style={styles.icon}>💼</span>
                <span style={styles.icon}>📸</span>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div style={styles.bottom}>
          © 2026 AMCA Industries | Designed for Performance 🚀
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },

  overlay: {
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.92), rgba(0,80,100,0.85))",
    padding: "70px 20px 20px",
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "40px",
  },

  left: {
    flex: "1",
    minWidth: "280px",
  },

  logo: {
    fontSize: "32px",
    fontWeight: "900",
    marginBottom: "15px",
    letterSpacing: "1px",
  },

  desc: {
    fontSize: "14px",
    lineHeight: "1.7",
    opacity: 0.85,
    marginBottom: "25px",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
  },

  statCard: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(8px)",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
    transition: "0.3s",
    cursor: "pointer",
  },

  right: {
    flex: "2",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "30px",
  },

  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    borderBottom: "2px solid #00e0ff",
    display: "inline-block",
    paddingBottom: "5px",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  link: {
    color: "#ddd",
    textDecoration: "none",
    fontSize: "14px",
    display: "block",
    marginBottom: "8px",
    transition: "0.3s",
  },

  contact: {
    fontSize: "14px",
    lineHeight: "1.6",
  },

  social: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },

  icon: {
    background: "rgba(255,255,255,0.1)",
    padding: "8px",
    borderRadius: "50%",
    cursor: "pointer",
  },

  bottom: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "13px",
    opacity: 0.7,
  },
};