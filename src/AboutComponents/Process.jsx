import React from "react";
import "../styles-about/process.css";
import { FaCheckCircle, FaIndustry, FaUsers, FaTools, FaBuilding } from "react-icons/fa";

import { FaClipboardList,  FaCogs, FaFileInvoiceDollar,   FaHeadset } from "react-icons/fa";

const processData = [
  {
    step: 1,
    icon: <FaClipboardList />,
    title: "Requirement Analysis",
    desc: "Understand Client Needs",
  },
  {
    step: 2,
    icon: <FaBuilding />,
    title: "Site Inspection",
    desc: "Conduct Detailed Site Survey",
  },
  {
    step: 3,
    icon: <FaCogs />,
    title: "System Design & Engineering",
    desc: "Develop Custom HVAC Solution",
  },
  {
    step: 4,
    icon: <FaFileInvoiceDollar />,
    title: "Solution Proposal",
    desc: "Project Plan & Cost Estimate",
  },
  {
    step: 5,
    icon: <FaTools />,
    title: "Installation",
    desc: "Expert Installation of HVAC Systems",
  },
  {
    step: 6,
    icon: <FaCheckCircle />,
    title: "Testing & Commissioning",
    desc: "Performance Testing & Calibration",
  },
  {
    step: 7,
    icon: <FaHeadset />,
    title: "After-Sales Support",
    desc: "Ongoing Maintenance & Assistance",
  },
];

const Process = () => {
  return (
    <>
      <section className="process-section">
        <div className="process-container">

          <h2 className="process-title">
            Our <span>Process</span>
          </h2>

          <p className="process-subtitle">
            Delivering HVAC & Cooling Solutions
          </p>

          <div className="process-grid">

            {processData.map((item) => (
              <div className="process-card" key={item.step}>

                <div className="process-icon">
                  {item.icon}
                  <span className="step-number">{item.step}</span>
                </div>

                <div className="process-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
      <section className="commitment-section">
        <div className="commitment-container">

          <h2 className="commitment-title">Our Commitment to Excellence</h2>

          <div className="commitment-grid">

            {/* Left side checklist */}
            <div className="commitment-left">

              <div className="commitment-item">
                <FaCheckCircle className="check-icon" />
                <p>Professional Engineering Approach</p>
              </div>

              <div className="commitment-item">
                <FaCheckCircle className="check-icon" />
                <p>High-Quality HVAC Solutions</p>
              </div>

              <div className="commitment-item">
                <FaCheckCircle className="check-icon" />
                <p>Timely Project Execution</p>
              </div>

              <div className="commitment-item">
                <FaCheckCircle className="check-icon" />
                <p>Reliable After-Sales Service</p>
              </div>

            </div>


            {/* Right side stats */}
            <div className="commitment-right">

              <div className="stat-card">
                <FaIndustry className="stat-icon" />
                <h3>15+</h3>
                <p>Years Industry Experience</p>
              </div>

              <div className="stat-card">
                <FaUsers className="stat-icon" />
                <h3>30+</h3>
                <p>Leading Corporate Clients</p>
              </div>

              <div className="stat-card">
                <FaTools className="stat-icon" />
                <h3>100+</h3>
                <p>Industrial Installations</p>
              </div>

              <div className="stat-card">
                <FaBuilding className="stat-icon" />
                <h3>Trusted</h3>
                <p>Across Multiple Industry Sectors</p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Process;