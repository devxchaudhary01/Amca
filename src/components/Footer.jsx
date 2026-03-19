import React from "react";

const Footer = () => {
  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.container}>

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
            <p>📞 +91, 9958620640</p>

            <p>✉ info@amcaindustries.com</p>
            <p style={{ color: "blue", textDecoration: "underline" }}>
              sales@amcaindustries.com
            </p>

            <p>🌐 www.amcaindustries.com</p>

            <p style={{ marginTop: "10px" }}>
              Plot No.110, NGIA, Sector 51, Faridabad, Haryana-121004
            </p>
          </div>

        </div>
      </footer>

      {/* INTERNAL CSS */}
      <style>{`
        @media (max-width: 900px) {
          .footer-container {
            flex-direction: column;
            gap: 30px;
          }
        }
      `}</style>
    </>
  );
};

const styles = {
  footer: {
    background: "#e5e5e5",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    color: "#000"
  },

  container: {
    maxWidth: "1100px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap"
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
  }
};

export default Footer;