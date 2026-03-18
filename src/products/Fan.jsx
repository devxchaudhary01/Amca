import React from "react";
import { useNavigate } from "react-router-dom";
import fansData from "./data";
import "../styles-prodcuts/fans.css";

const Fans = () => {
  const navigate = useNavigate();

  return (
    <div className="fans-container">
      <h2 className="title">Our Fan Products</h2>

      <div className="card-grid">
        {fansData.map((fan) => (
          <div className="card" key={fan.id}>
            <img src={fan.image} alt={fan.title} />

            <h3>{fan.title}</h3>
            <p>{fan.short}</p>

            <button onClick={() => navigate(`/fan/${fan.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fans;