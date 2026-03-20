import h1 from "../assets/hvls2.png"
import grid from "../assets/gridfan.jpeg"
import roof from "../assets/roof.png"
import wall from "../assets/wallFan.png"
import yogo from "../assets/yogo.png"
import exhaust from "../assets/exhaust.png"
import geared from "../assets/hvls2.png"
import pmsFan from "../assets/pmsFan.png"


const fansData = [

  {
    id: 1,
    title: "Geared HVLS Fans",
    image: geared,

    description:
      "Efficient Cooling & Ventilation Solutions for Large Spaces. Designed for industrial and commercial environments with high air circulation and energy efficiency.",

    overview: [
      "Reduces operational cost up to 80%",
      "Covers up to 18,000 sq.ft area",
      "Consumes only 1.5 KW power",
      "Improves air quality & reduces humidity",
      "Prevents mold and bacteria growth"
    ],

    safety: [
      "Hub in hub impeller assembly with Z brackets",
      "Embedded wire ropes in each blade",
      "6 mm GI wire ropes for anti-sway & anti-fall",
      "High tensile fasteners with Nylock nuts"
    ],

    features: [
      "German Make Gear Motors (SEW/Lenze)",
      "Danfoss/ABB VFD control system",
      "Aeronautical grade aluminium blades",
      "3,78,000+ CFM airflow",
      "Low noise <50 dB",
      "Reverse airflow option"
    ],

    applications: [
      "Industries, warehouses, factories",
      "Railway stations, airports",
      "Shopping malls & commercial complexes",
      "Dairy farms & storage units"
    ],

    specifications: [
      {
        model: "EAHVLS2.4E",
        size: "8 ft",
        power: "0.75 KW",
        rpm: 120,
        airflow: "90,000 CFM",
        coverage: "4,500 sq.ft"
      },
      {
        model: "EAHVLS4E",
        size: "12 ft",
        power: "1.1 KW",
        rpm: 85,
        airflow: "130,000 CFM",
        coverage: "6,800 sq.ft"
      },
      {
        model: "EAHVLS7E",
        size: "24 ft",
        power: "1.5 KW",
        rpm: 52,
        airflow: "378,000 CFM",
        coverage: "18,000 sq.ft"
      }
    ],

    warranty: "1 year electrical, 5 years mechanical",
    noise: "<65 dB"
  },

  // ✅ UPDATED PMSM DATA
  {
    id: 2,
    title: "PMSM HVLS Fans",
    image: pmsFan,

    description:
      "Energy-Efficient & Silent Operation. PMSM (Permanent Magnet Synchronous Motor) gearless fans deliver exceptional energy efficiency with ultra-quiet performance, ensuring consistent airflow across large spaces.",

    overview: [
      "Consumes 30% less power than standard HVLS fans",
      "Gearless motor reduces wear and tear",
      "Ultra-quiet operation (<45 dB)",
      "Suitable for continuous 24×7 use",
      "Reliable high-speed performance with zero rotor losses"
    ],

    features: [
      "Brushless PMSM motor technology",
      "High torque at low RPM",
      "32–64 pole specialised motor design",
      "Gearless direct drive system",
      "5-blade 6061 T6 aluminium alloy construction",
      "Compact and lightweight structure"
    ],

    benefits: [
      "Maintenance required only after 1,00,000+ hours",
      "Energy savings reduce operational cost",
      "Long lifespan due to minimal mechanical wear",
      "Smooth and vibration-free operation"
    ],

    safety: [
      "Primary and secondary anti-fall safety mechanism",
      "Strong aluminium alloy blades",
      "Stable operation even at high speed"
    ],

    applications: [
      "Airports, railway stations, bus stands",
      "Auditoriums, cinema halls, theatres",
      "Temples, mosques, churches",
      "Air-conditioned buildings (reduce AC cost)",
      "Large commercial and public spaces",
      "24×7 low-noise environments"
    ],

    design: [
      "No chassis design makes it lightweight",
      "Compact round structure",
      "Compatible with various VFDs"
    ],

    specifications: [
      {
        model: "EABPM2.4E",
        size: "8 ft",
        power: "0.4 KW",
        rpm: 120,
        airflow: "90,000 CFM",
        height: "3 m",
        weight: "44 kg",
        coverage: "4,500 sq.ft"
      },
      {
        model: "EABPM4E",
        size: "12 ft",
        power: "0.4 KW",
        rpm: 86,
        airflow: "130,000 CFM",
        height: "4.5 m",
        weight: "54 kg",
        coverage: "6,800 sq.ft"
      },
      {
        model: "EABPM5E",
        size: "16 ft",
        power: "0.75 KW",
        rpm: 72,
        airflow: "225,000 CFM",
        height: "6.1 m",
        weight: "74 kg",
        coverage: "9,000 sq.ft"
      },
      {
        model: "EABPM6E",
        size: "20 ft",
        power: "1.5 KW",
        rpm: 65,
        airflow: "288,000 CFM",
        height: "7.5 m",
        weight: "99 kg",
        coverage: "13,500 sq.ft"
      },
      {
        model: "EABPM7E",
        size: "24 ft",
        power: "1.5 KW",
        rpm: 52,
        airflow: "378,000 CFM",
        height: "9.1 m",
        weight: "105 kg",
        coverage: "18,000 sq.ft"
      }
    ],

    warranty: "1 year electrical, 5 years mechanical",
    noise: "<50 dB"
  },

  {
    id: 3,
    title: "EMF PMSM HVLS Fans",
    image: h1,

    description:
      "Extremely Energy Efficient Motors for Heavy Duty, Continuous Operations. EMF PMSM gearless fans with German make motors deliver superior efficiency, durability, and ultra-quiet performance for 24×7 industrial use.",

    overview: [
      "Consumes 30% less power than standard HVLS fans",
      "Designed for heavy-duty continuous 24×7 operation",
      "Ultra-quiet performance (<45 dB)",
      "Zero rotor losses for maximum efficiency",
      "Consistent airflow across large areas"
    ],

    features: [
      "German make EMF motor with robust chassis",
      "Brushless PMSM technology",
      "High torque at low RPM",
      "66 pole motor with 6 pole winding",
      "Compatible with VFDs (Danfoss, Schneider, ABB)",
      "Gearless direct drive system",
      "Rectangular and robust motor design"
    ],

    benefits: [
      "Maintenance required only after 1,00,000+ hours",
      "Zero derating ensures consistent 100% performance",
      "Energy savings reduce operational costs",
      "Long lifespan with minimal wear and tear",
      "Reliable even at high speeds"
    ],

    safety: [
      "Primary and secondary anti-fall safety mechanisms",
      "Strong aluminium alloy blade construction",
      "Stable and vibration-free operation"
    ],

    applications: [
      "Airports, railway stations, bus stands",
      "Auditoriums, cinema halls, theatres",
      "Temples, mosques, churches",
      "Air-conditioned buildings (reduce AC cost)",
      "Large commercial and industrial spaces",
      "24×7 low-noise environments"
    ],

    design: [
      "Comes with chassis for added strength",
      "Rectangular robust motor structure",
      "Compact and durable design",
      "Compatible with multiple VFD systems"
    ],

    specifications: [
      {
        model: "ECOPM2.4E",
        size: "8 ft",
        power: "0.29 KW",
        rpm: 110,
        airflow: "90,000 CFM",
        height: "3 m",
        weight: "58 kg",
        coverage: "4,500 sq.ft"
      },
      {
        model: "ECOPM4E",
        size: "12 ft",
        power: "0.29 KW",
        rpm: 86,
        airflow: "130,000 CFM",
        height: "4.5 m",
        weight: "90 kg",
        coverage: "6,800 sq.ft"
      },
      {
        model: "ECOPM5E",
        size: "16 ft",
        power: "0.63 KW",
        rpm: 72,
        airflow: "225,000 CFM",
        height: "6.1 m",
        weight: "98 kg",
        coverage: "9,000 sq.ft"
      },
      {
        model: "ECOPM6E",
        size: "20 ft",
        power: "1 KW",
        rpm: 68,
        airflow: "288,000 CFM",
        height: "7.5 m",
        weight: "143 kg",
        coverage: "13,500 sq.ft"
      },
      {
        model: "ECOPM7E",
        size: "24 ft",
        power: "1.1 KW",
        rpm: 52,
        airflow: "378,000 CFM",
        height: "9.1 m",
        weight: "154 kg",
        coverage: "18,000 sq.ft"
      }
    ],

    warranty: "1 year electrical, 5 years mechanical",
    noise: "<50 dB"
  },

  {
    id: 4,
    title: "Exhaust Fans",
    image: exhaust,

    description:
      "Energy-Efficient Industrial Exhaust Fans for Optimal Ventilation. Designed for powerful air displacement with low energy consumption, these fans ensure effective removal of heat, smoke, and odours in industrial environments.",

    overview: [
      "High airflow for efficient ventilation",
      "Low energy consumption",
      "Quiet operation for indoor environments",
      "Direct drive system (no belts required)",
      "Improves air quality in large spaces"
    ],

    features: [
      "Maintenance-free direct drive motor",
      "Aluminium die-cast impeller",
      "Strong G.I. body construction",
      "Gravitational louvers (auto close)",
      "Double ball bearings",
      "Copper winding motor"
    ],

    benefits: [
      "No belt replacement required",
      "Long lifespan with durable materials",
      "Energy-saving performance",
      "Prevents duct ingress when switched off",
      "Reliable continuous operation"
    ],

    safety: [
      "Strong structural body for industrial use",
      "Stable and vibration-free performance",
      "Protected airflow system with louvers"
    ],

    applications: [
      "Industrial ventilation systems",
      "Restaurants and kitchens",
      "Airport and hotel reception areas",
      "Low ceiling height spaces",
      "Air-conditioned rooms with hot pockets"
    ],

    design: [
      "Direct drive (no belt system)",
      "Compact and robust body",
      "Heavy-duty industrial design",
      "Optimized for indoor airflow"
    ],

    specifications: [
      {
        model: "EAEX600",
        power: "0.25 KW",
        voltage: "415/50 V/Hz",
        airflow: "17,000 CMH",
        rpm: 720,
        size: "800 x 400 x 800 mm"
      },
      {
        model: "EAEX800",
        power: "0.4 KW",
        voltage: "415/50 V/Hz",
        airflow: "23,000 CMH",
        rpm: 520,
        size: "900 x 400 x 900 mm"
      },
      {
        model: "EAEX1000",
        power: "0.55 KW",
        voltage: "415/50 V/Hz",
        airflow: "32,000 CMH",
        rpm: 460,
        size: "1060 x 400 x 1060 mm"
      },
      {
        model: "EAEX1200",
        power: "0.75 KW",
        voltage: "415/50 V/Hz",
        airflow: "37,000 CMH",
        rpm: 460,
        size: "1220 x 400 x 1220 mm"
      },
      {
        model: "EAEX1300",
        power: "1.1 KW",
        voltage: "415/50 V/Hz",
        airflow: "44,500 CMH",
        rpm: 460,
        size: "1380 x 400 x 1380 mm"
      }
    ],

    warranty: "Standard industrial warranty",
    note: "Compatible with three-phase power supply (as per standard test conditions)"
  },

  {
    id: 5,
    title: "Roof Extractors",
    image: roof,

    description:
      "Durable & Energy-Efficient Roof Ventilation. Designed for industrial and commercial environments, roof extractors provide powerful airflow to remove heat, smoke, and airborne contaminants while maintaining low energy consumption and quiet operation.",

    overview: [
      "High airflow for effective ventilation",
      "Low energy consumption",
      "Quiet operation",
      "Improves air quality in large spaces",
      "Suitable for harsh and contaminated environments"
    ],

    features: [
      "CFD optimized airflow design",
      "Low noise operation",
      "Energy-efficient performance",
      "Stainless steel blades",
      "High-strength powder-coated body",
      "Low RPM motor for longer life"
    ],

    benefits: [
      "Reliable performance in contaminated conditions",
      "Long operational lifespan",
      "Cost-effective ventilation solution",
      "Reduced maintenance requirements",
      "Consistent airflow output"
    ],

    safety: [
      "Short circuit protection",
      "Anti-fall safety grill",
      "Stable and secure roof mounting"
    ],

    applications: [
      "Warehouses without natural ventilation",
      "Forge shops, welding & fabrication units",
      "Pressure die casting industries",
      "Large kitchens",
      "Foundries and machine shops",
      "Mist-heavy industrial environments"
    ],

    design: [
      "Compact rooftop mounted structure",
      "Powder-coated mild steel body",
      "6-blade configuration",
      "Designed for industrial durability"
    ],

    specifications: [
      {
        parameter: "Application",
        value: "Forced Exhaust"
      },
      {
        parameter: "Fan Diameter",
        value: "700 mm"
      },
      {
        parameter: "Protection Rating",
        value: "IP55"
      },
      {
        parameter: "Body",
        value: "Mild Steel Powder Coated"
      },
      {
        parameter: "Number of Blades",
        value: "6"
      },
      {
        parameter: "Machine Size",
        value: "Diameter 750 mm, Height 550 mm"
      },
      {
        parameter: "Motor Type",
        value: "3 Phase Induction Motor"
      },
      {
        parameter: "Power",
        value: "0.37 KW"
      },
      {
        parameter: "Voltage",
        value: "415 V (Three Phase)"
      },
      {
        parameter: "Current Load",
        value: "1.4 A"
      },
      {
        parameter: "Speed",
        value: "690 RPM"
      },
      {
        parameter: "Control Method",
        value: "Direct Start"
      },
      {
        parameter: "Insulation Class",
        value: "Class F"
      },
      {
        parameter: "Duty Cycle",
        value: "S1"
      },
      {
        parameter: "Airflow",
        value: "10,000 CFM"
      },
      {
        parameter: "Static Pressure",
        value: "30 mmW.G."
      },
      {
        parameter: "Weight",
        value: "60 kg"
      },
      {
        parameter: "Noise Level",
        value: "~70 dB (at 3m below fan)"
      }
    ],

    warranty: "Standard industrial warranty"
  },

  {
    id: 6,
    title: "Wall Mounted HVLS Fans",
    image: wall,

    description:
      "High Air Flow and Vertically Mounted. Wall-mounted HVLS fans deliver powerful and energy-efficient cooling with up to 160° adjustable airflow, making them ideal for industrial, commercial, and large open spaces.",

    overview: [
      "Up to 160° wide-angle airflow coverage",
      "Cost-effective cooling solution",
      "Suitable for indoor and semi-open spaces",
      "Low installation and maintenance cost",
      "Improves air circulation and comfort"
    ],

    features: [
      "Wide-angle airflow (up to 160°)",
      "Pivoting adjustable design",
      "Optional oscillating head",
      "Intelligent controller for motor protection",
      "Steel crank link casting",
      "Can be mounted on wall or beam"
    ],

    benefits: [
      "Lower investment compared to traditional cooling systems",
      "Flexible installation options",
      "Targeted airflow direction",
      "Efficient cooling in large areas",
      "Reduced operational cost"
    ],

    safety: [
      "Additional wire rope for anti-fall protection",
      "Strong mounting structure",
      "Stable and secure operation"
    ],

    applications: [
      "Retail showrooms and shops",
      "Manufacturing units and warehouses",
      "Outdoor areas like patios and docks",
      "Classrooms, cafeterias, auditoriums",
      "Marriage halls and gymkhanas",
      "Semi-open commercial and industrial spaces"
    ],

    design: [
      "Lightweight structure (~70 kg)",
      "High-grade 6061 T6 aluminium blades",
      "Anti-corrosion steel construction",
      "Pivot and oscillation-based airflow system"
    ],

    attributes: [
      "Approx weight: 70 kg",
      "Airflow: up to 45,000 CFM",
      "Compact and flexible mounting design"
    ],

    specifications: [
      {
        model: "ECOFLEX-1.4E",
        size: "4'6''",
        power: "1.1 KW",
        rpm: 450,
        oscillation: "With / Without",
        drive: "Intelligent Controller",
        weight: "70 kg",
        airflow: "45,000 CFM"
      }
    ],

    warranty: "Standard industrial warranty",
    noise: "<75 dB"
  },

  {
    id: 7,
    title: "YU-GO Fans",
    image: yogo,

    description:
      "Portable, Energy-Efficient Fans for Versatile Cooling Requirements. YU-GO Fans are floor-mounted solutions designed for powerful and efficient air circulation across various spaces.",

    overview: [
      "Portable floor-mounted cooling solution",
      "Available in 6 ft and 8 ft sizes",
      "Energy-efficient motor for low power consumption",
      "Provides natural wind chill effect",
      "Ideal for flexible and multi-location use"
    ],

    features: [
      "Heavy-duty wheels for easy mobility",
      "Compact and durable construction",
      "Adjustable speed control",
      "Quiet operation for comfort",
      "High airflow performance",
      "Plug-and-play easy usage"
    ],

    benefits: [
      "Easy to move and reposition",
      "Cost-effective cooling solution",
      "Low maintenance requirements",
      "Energy saving performance",
      "Suitable for temporary and permanent setups"
    ],

    safety: [
      "Strong and stable base structure",
      "Protected motor housing",
      "Durable fan blades",
      "Safe operation with minimal vibration"
    ],

    applications: [
      "Factories and warehouses",
      "Workshops and industrial units",
      "Commercial spaces",
      "Outdoor and semi-open areas",
      "Events and temporary setups"
    ],

    design: [
      "Compact floor-mounted design",
      "Wheel-based mobility system",
      "Rugged industrial build quality",
      "Optimized for portability and durability"
    ],

    specifications: [
      {
        size: "6 ft",
        type: "Portable Floor Mounted",
        airflow: "High Airflow",
        mobility: "Yes (Wheels Included)"
      },
      {
        size: "8 ft",
        type: "Portable Floor Mounted",
        airflow: "Very High Airflow",
        mobility: "Yes (Wheels Included)"
      }
    ],

    warranty: "Standard industrial warranty",
    noise: "Low noise operation",

    brochure: "Download Brochure"
  },

  {
    id: 8,
    title: "Grid Fans",
    image: grid,
    description:
      "Engineered for Enhanced Cooling, Comfort & Energy Efficiency. Grid Fans (Air Circulators) are ceiling-mounted solutions designed to integrate seamlessly into standard false ceiling grids for efficient air distribution.",

    overview: [
      "Fits standard 2’ x 2’ false ceiling grids",
      "Provides uniform air distribution across large areas",
      "Creates natural wind chill effect",
      "Reduces load on air conditioning systems",
      "Enhances energy efficiency and cost savings"
    ],

    features: [
      "Ceiling-mounted compact design",
      "Revolving louvers for better air circulation",
      "Energy-efficient motor performance",
      "Quiet operation for indoor comfort",
      "Easy installation in modular ceilings",
      "Low maintenance system"
    ],

    benefits: [
      "Improves indoor air circulation",
      "Reduces electricity bills by lowering AC usage",
      "Maintains consistent cooling",
      "Ideal for energy-conscious environments",
      "Long-lasting and reliable performance"
    ],

    safety: [
      "Secure ceiling mounting structure",
      "Durable internal components",
      "Stable and vibration-free operation",
      "Protected motor housing"
    ],

    applications: [
      "Offices and corporate spaces",
      "Shopping malls and showrooms",
      "Hospitals and clinics",
      "Hotels and restaurants",
      "Residential apartments",
      "Commercial and industrial buildings"
    ],

    design: [
      "Compact 2’ x 2’ grid-compatible structure",
      "False ceiling integrated design",
      "Modern and minimal appearance",
      "Optimized airflow distribution system"
    ],

    specifications: [
      {
        size: "2 ft x 2 ft",
        mounting: "False Ceiling Grid",
        airflow: "Uniform Air Distribution",
        louvers: "Revolving Louvers"
      }
    ],

    warranty: "Standard industrial warranty",
    noise: "Low noise operation",

    brochure: "Download Brochure"
  }

];

export default fansData;