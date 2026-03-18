import React from "react";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";

const AhuBlog = () => {
  return (
    <>
      <style>{`

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: Arial, Helvetica, sans-serif;
      }

      .blog-wrapper{
        width:100%;
        background:#f7f7f7;
        padding:60px 20px;
      }

      .blog-container{
        max-width:1100px;
        margin:auto;
        background:#fff;
        padding:40px;
        border-radius:6px;
        box-shadow:0 5px 20px rgba(0,0,0,0.08);
      }

      .blog-title{
        font-size:36px;
        font-weight:600;
        margin-bottom:25px;
        color:#222;
        text-align:center;
      }

      .blog-text{
        font-size:17px;
        line-height:1.7;
        color:#444;
        text-align:center;
        margin-bottom:40px;
      }

      .img-grid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:20px;
      }

      .img-grid img{
        width:100%;
        height:260px;
        object-fit:cover;
        border-radius:6px;
        transition:0.3s;
        cursor:pointer;
      }

      .img-grid img:hover{
        transform:scale(1.05);
        box-shadow:0 6px 20px rgba(0,0,0,0.2);
      }

      /* Tablet */

      @media (max-width:900px){

      .blog-title{
        font-size:30px;
      }

      .blog-text{
        font-size:16px;
      }

      .img-grid{
        grid-template-columns:repeat(2,1fr);
      }

      .img-grid img{
        height:220px;
      }

      }

      /* Mobile */

      @media (max-width:600px){

      .blog-container{
        padding:25px;
      }

      .blog-title{
        font-size:24px;
      }

      .blog-text{
        font-size:15px;
      }

      .img-grid{
        grid-template-columns:1fr;
      }

      .img-grid img{
        height:200px;
      }

      }

      `}</style>

      <div className="blog-wrapper">

        <div className="blog-container">

          <h1 className="blog-title">
            AHU Training at Amca Industries
          </h1>

          <p className="blog-text">
            Amca Industries's annual Sales Meet took place from 3rd–5th July
            2025 at Kalasagar Hotel, bringing together 20–25 team members from
            across India.
            <br /><br />
            The event focused on future-ready growth strategies, featuring
            in-depth training on Air Handling Units (AHUs), HRM, and CRN
            modules, equipping teams with knowledge to better serve customer
            needs across regions.
          </p>

          <div className="img-grid">
            <img src={b1} alt="hall meeting" />
            <img src={b2} alt="projector meeting" />
            <img src={b3} alt="campus meeting" />
          </div>

        </div>

      </div>
    </>
  );
};

export default AhuBlog;