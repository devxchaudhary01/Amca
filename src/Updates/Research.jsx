import React from "react";
import author from "../assets/founder.jpeg"; // use your author image

const ResearchBlog = () => {
  return (
    <>
      <style>{`

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: Arial, Helvetica, sans-serif;
      }

      .research-wrapper{
        width:100%;
        padding:60px 20px;
        background:#f7f7f7;
      }

      .research-container{
        max-width:1100px;
        margin:auto;
        background:#fff;
        padding:40px;
        border-radius:6px;
        box-shadow:0 4px 20px rgba(0,0,0,0.08);
      }

      .research-title{
        font-size:38px;
        font-weight:600;
        margin-bottom:30px;
        color:#222;
        line-height:1.3;
      }

      .research-text{
        font-size:17px;
        line-height:1.8;
        color:#444;
        margin-bottom:25px;
      }

      .research-link{
        display:block;
        margin-bottom:25px;
        color:#2ba7b3;
        font-size:16px;
        text-decoration:none;
      }

      .research-link:hover{
        text-decoration:underline;
      }

      .download-btn{
        display:inline-block;
        background:#59b6c0;
        color:#fff;
        padding:14px 26px;
        border-radius:3px;
        font-size:16px;
        text-decoration:none;
        margin-bottom:40px;
        transition:0.3s;
      }

      .download-btn:hover{
        background:#2ba7b3;
      }

      .author-section{
        display:flex;
        gap:30px;
        align-items:center;
        margin-top:20px;
      }

      .author-img img{
        width:200px;
        height:220px;
        object-fit:cover;
        border-radius:4px;
      }

      .author-text{
        font-size:16px;
        color:#333;
        line-height:1.7;
      }

      .author-text strong{
        display:block;
        margin-bottom:8px;
        font-size:18px;
      }

      /* Tablet */

      @media (max-width:900px){

      .research-title{
        font-size:30px;
      }

      .research-text{
        font-size:16px;
      }

      .author-section{
        flex-direction:column;
        align-items:flex-start;
      }

      .author-img img{
        width:180px;
        height:200px;
      }

      }

      /* Mobile */

      @media (max-width:600px){

      .research-container{
        padding:25px;
      }

      .research-title{
        font-size:24px;
      }

      .research-text{
        font-size:15px;
      }

      .download-btn{
        width:100%;
        text-align:center;
      }

      .author-img img{
        width:150px;
        height:170px;
      }

      }

      `}</style>

      <div className="research-wrapper">

        <div className="research-container">

          <h1 className="research-title">
            Research Paper on Transforming Export Competitiveness
          </h1>

          <p className="research-text">
            Measured through medium and high-tech exports—has a statistically
            significant positive impact on export competitiveness. In contrast,
            digitalization, proxied by broadband subscriptions, shows no
            significant effect, suggesting that mere infrastructure is
            insufficient without deeper operational integration.
          </p>

          <p className="research-text">
            The Indian HVAC sector, though poised for growth amid global demand
            and sustainability mandates, faces challenges such as limited R&D
            investment, inadequate digital adoption, and scale inefficiencies.
            The study proposes a theoretical framework linking technological
            advancement and digital readiness with competitive export
            performance, offering insights for policymakers and industry
            stakeholders.
          </p>

          <p className="research-text">
            By aligning macroeconomic data with sectoral realities, the research
            contributes to a nuanced understanding of how emerging economies
            like India can leverage technological transformation to boost
            global trade competitiveness.
          </p>

          <a
            href="https://doi.org/10.70122/ajbsp.vi2.36"
            className="research-link"
          >
            Read the article here: https://doi.org/10.70122/ajbsp.vi2.36
          </a>

          <a href="/" className="download-btn">
            Download the research paper
          </a>

          <div className="author-section">

            <div className="author-img">
              <img src={author} alt="author" />
            </div>

            <div className="author-text">
              <strong>Written by:</strong>
              Akash Pol
              <br />
              Swiss School of Business and Management,
              <br />
              Geneva, Switzerland
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default ResearchBlog;