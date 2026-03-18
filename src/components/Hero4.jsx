import React from "react";
import "../styles/hero4.css";
import { FaSnowflake } from "react-icons/fa";
import { WiStrongWind } from "react-icons/wi";
import { GiDustCloud } from "react-icons/gi";
import { GiWindSlap } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { GiElectric } from "react-icons/gi";

const Hero4 = () => {
  return (
    <section className="cooling">

      {/* Top Text Section */}

      <div className="cooling-top">

        <div className="cooling-left">
          <h1>Cooling solutions you can rely on</h1>
          <h3>Powering productivity & efficiency</h3>
        </div>

        <div className="cooling-right">
          <p>
            Our pan-India network, proven performance and industrial expertise
            make us the trusted partner for cooling and ventilation in large,
            open spaces.
          </p>
        </div>

      </div>


      {/* Features Grid */}

      <div className="features">

        <div className="feature">
          <FaSnowflake className="icon" />
          <h4>Superior Cooling Performance</h4>
          <p>
            Lower temperatures by up to 20°C in large, open spaces,
            efficiently and consistently.
          </p>
        </div>

        <div className="feature">
          <WiStrongWind className="icon" />
          <h4>Clean, Fresh Air</h4>
          <p>
            Filtered air that improves overall air quality in high-activity
            zones and boosts health and comfort.
          </p>
        </div>

        <div className="feature">
          <GiDustCloud className="icon" />
          <h4>Dust-Free Environments</h4>
          <p>
            Effective dust control to protect people, processes
            and sensitive equipment.
          </p>
        </div>


        {/* Second Row */}

        <div className="feature">
          <GiWindSlap className="icon" />
          <h4>Efficient Air Distribution</h4>
          <p>
            Even airflow that eliminates hotspots and covers wide areas
            with minimal energy use.
          </p>
        </div>

        <div className="feature">
          <TbAirConditioning className="icon" />
          <h4>Open Space Cooling</h4>
          <p>
            Reliable cooling designed specifically for factories,
            warehouses and open sites.
          </p>
        </div>

        <div className="feature">
          <GiElectric className="icon" />
          <h4>Exhausting Large Volumes of Air</h4>
          <p>
            Powerful extraction of stale air, fumes and heat,
            ideal for industrial ventilation needs.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Hero4;