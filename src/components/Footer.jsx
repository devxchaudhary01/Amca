import React from "react";
import bg from "../assets/b1.jpg";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          ...styles.footer,
          backgroundImage: `url(${bg})`
        }}
      >
        <div style={styles.overlay}>

          <div className="footer-container" style={styles.container}>

            {/* QUICK LINKS */}
            <div style={styles.col}>
              <h3 style={styles.heading}>QUICK LINKS</h3>
              <ul style={styles.list}>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>PRODUCT RANGE</li>
                <li>ENQUIRY</li>
                <li>GALLERY</li>
                <li>CONTACT US</li>
              </ul>
            </div>

            {/* PRODUCTS */}
            <div style={styles.col}>
              <h3 style={styles.heading}>PRODUCTS</h3>
              <ul style={styles.list}>
                <li>HVLS FANS</li>
                <li>INDUSTRIAL AIRCOOLER</li>
                <li>EXHAUSTS FANS</li>
                <li>AIR CIRCULATORS</li>
                <li>WALLMOUNT BLDC FANS</li>
                <li>AHU</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div style={styles.col}>
              <h3 style={styles.heading}>GET IN TOUCH WITH US</h3>

              <p>📞 (+91) 9217962766, 9625676397</p>
              <p>📞 +91 9958620640</p>

              <p>✉ info@amcaindustries.com</p>
              <p style={styles.link}>sales@amcaindustries.com</p>

              <p>🌐 www.amcaindustries.com</p>

              <p style={{ marginTop: "10px" }}>
                Plot No.110, NGIA, Sector 51, Faridabad, Haryana-121004
              </p>
            </div>

          </div>

        </div>
      </footer>

      {/* RESPONSIVE CSS */}
      <style>{`
        .footer-container {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .footer-container {
            flex-direction: column;
            gap: 30px;
            text-align: center;
          }
        }

        @media (max-width: 500px) {
          .footer-container h3 {
            font-size: 13px;
          }

          .footer-container li,
          .footer-container p {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

const styles = {
  footer: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "50px 20px",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    color: "#000"
  },

  overlay: {
    background: "rgba(255,255,255,0.9)", // white overlay like image
    padding: "40px 20px"
  },

  container: {
    maxWidth: "1100px",
    margin: "auto"
  },

  col: {
    flex: "1",
    minWidth: "250px"
  },

  heading: {
    color: "red",
    fontSize: "14px",
    marginBottom: "15px",
    fontWeight: "bold"
  },

  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2"
  },

  link: {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer"
  }
};

export default Footer;