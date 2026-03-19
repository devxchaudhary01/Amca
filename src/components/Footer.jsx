import React from "react";


const Footer = () => {
  return (
    <>
      <footer
        style={{
          ...styles.footer,
       
        }}
      >
        <div style={styles.overlay}>
          <div className="footer-container">

            {/* QUICK LINKS */}
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Product Range</li>
                <li>Enquiry</li>
                <li>Gallery</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* PRODUCTS */}
            <div className="footer-col">
              <h3>Products</h3>
              <ul>
                <li>HVLS Fans</li>
                <li>Industrial Aircooler</li>
                <li>Exhaust Fans</li>
                <li>Air Circulators</li>
                <li>Wallmount BLDC Fans</li>
                <li>AHU</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="footer-col">
              <h3>Get In Touch</h3>

              <p>
                📞 <a href="tel:+919217962766">+91 9217962766</a>
              </p>
              <p>
                📞 <a href="tel:+919625676397">+91 9625676397</a>
              </p>
              <p>
                📞 <a href="tel:+919958620640">+91 9958620640</a>
              </p>

              <p>
                ✉ <a href="mailto:info@amcaindustries.com">
                  info@amcaindustries.com
                </a>
              </p>
              <p>
                ✉ <a href="mailto:sales@amcaindustries.com">
                  sales@amcaindustries.com
                </a>
              </p>

              <p>
                🌐{" "}
                <a
                  href="https://www.amcaindustries.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  amcaindustries.com
                </a>
              </p>

              <p className="address">
                Plot No.110, NGIA, Sector 51, Faridabad, Haryana-121004
              </p>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            © {new Date().getFullYear()} AMCA Industries. All rights reserved.
          </div>
        </div>
      </footer>

      {/* CSS */}
      <style>{`
        .footer-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 1100px;
          margin: auto;
        }

        .footer-col h3 {
          color: red;
          font-size: 15px;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
        }

        .footer-col ul li {
          margin-bottom: 8px;
          cursor: pointer;
          transition: 0.3s;
        }

        .footer-col ul li:hover {
          color: red;
          transform: translateX(5px);
        }

        .footer-col p {
          margin: 6px 0;
          font-size: 14px;
        }

        .footer-col a {
          color: black;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-col a:hover {
          color: red;
          text-decoration: underline;
        }

        .address {
          margin-top: 10px;
          line-height: 1.5;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          font-size: 13px;
          border-top: 1px solid #ccc;
          padding-top: 15px;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            text-align: center;
          }
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
          }

          .footer-col h3 {
            font-size: 14px;
          }

          .footer-col p,
          .footer-col li {
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
    color: "#000",
  },

  overlay: {
    padding: "40px 20px",
  },
};

export default Footer;