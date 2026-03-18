import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import fansData from "./data";
import "../styles-prodcuts/details.css";

const FanDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fan = fansData.find((item) => item.id === parseInt(id));

  if (!fan) return <h2 className="not-found">Product Not Found</h2>;

  const renderList = (title, data) => {
    if (!data) return null;

    return (
      <div className="section">
        <h3>{title}</h3>
        <div className="list-grid">
          {data.map((item, index) => (
            <div key={index} className="list-card">
              ✔ {item}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="details-container">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* TOP */}
      <div className="top-section">
        <img src={fan.image} alt={fan.title} />

        <div className="top-content">
          <h1>{fan.title}</h1>
          <p className="desc">{fan.description}</p>

          <div className="meta">
            {fan.warranty && <p><strong>Warranty:</strong> {fan.warranty}</p>}
            {fan.noise && <p><strong>Noise:</strong> {fan.noise}</p>}
          </div>
        </div>
      </div>

      {renderList("Overview", fan.overview)}
      {renderList("Features", fan.features)}
      {renderList("Benefits", fan.benefits)}
      {renderList("Safety", fan.safety)}
      {renderList("Applications", fan.applications)}

      {/* TABLE */}
      {fan.specifications && (
        <div className="section">
          <h3>Specifications</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  {Object.keys(fan.specifications[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fan.specifications.map((spec, index) => (
                  <tr key={index}>
                    {Object.values(spec).map((val, i) => (
                      <td key={i}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {fan.note && <p className="note">{fan.note}</p>}
    </div>
  );
};

export default FanDetails;