import React from "react";
import "./first.css";

import {
  FaCar,
  FaWarehouse,
  FaTshirt,
  FaUtensils,
  FaFlask,
  FaCogs,
  FaBuilding,
  FaCity
} from "react-icons/fa";

const industries = [
  {
    icon: <FaCar />,
    title: "Automotive Manufacturing",
    desc: "Automotive production facilities generate significant heat due to heavy machinery and continuous operations. Our HVLS fans and ventilation systems maintain airflow and improve worker comfort."
  },
  {
    icon: <FaWarehouse />,
    title: "Warehousing & Logistics",
    desc: "Large warehouses require effective air circulation. Our HVLS fans ensure uniform airflow and temperature control across large storage spaces."
  },
  {
    icon: <FaTshirt />,
    title: "Textile & Garment Industry",
    desc: "Textile manufacturing units require controlled airflow and temperature for efficient production and worker comfort."
  },
  {
    icon: <FaUtensils />,
    title: "Food Processing Industry",
    desc: "Food processing plants require proper ventilation and cooling to maintain hygiene standards and fresh air circulation."
  },
  {
    icon: <FaFlask />,
    title: "Pharmaceutical Industry",
    desc: "Pharmaceutical facilities require controlled environmental conditions for manufacturing and storage."
  },
  {
    icon: <FaCogs />,
    title: "Engineering & Heavy Manufacturing",
    desc: "Heavy manufacturing generates heat, dust, and fumes. Our industrial ventilation systems maintain safer working environments."
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Buildings",
    desc: "Retail spaces, workshops, and service centers benefit from improved airflow and energy-efficient cooling solutions."
  },
  {
    icon: <FaCity />,
    title: "Infrastructure & Government Projects",
    desc: "Our solutions are used in transport hubs, public sector manufacturing units, and government facilities."
  }
];

const Gallery = () => {
  return (
    <section className="industries-section">
      <div className="industries-container">

        <h2 className="industries-title">Industries We Serve</h2>

        <p className="industries-subtitle">
          At AMCA Industries, we provide advanced HVAC, industrial ventilation,
          and energy-efficient cooling solutions across multiple industrial sectors.
        </p>

        <div className="industries-grid">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;