export interface GalleryProduct {
  id: string;
  slug: string;
  title: string;
  category: "Products" | "Testing Equipment" | "EV Chargers" | "Manufacturing" | "Factory";
  modelGrade: string;
  rating: number;
  reviews: number;
  src: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: Array<{ label: string; value: string }>;
}

export const galleryProducts: GalleryProduct[] = [
  {
    "id": "gallery-1",
    "slug": "mga-intelligent-hawk-multi-channel-battery-station",
    "title": "MGA Intelligent Hawk Multi-Channel Battery Station",
    "category": "Testing Equipment",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1250,
    "src": "/products/mga-intelligent-hawk-multi-channel-battery-station.png",
    "shortDescription": "Multi-channel microprocessor controlled battery charging & testing console for industrial maintenance.",
    "description": "The MGA Intelligent Hawk is an industrial-grade multi-channel battery charging and testing station engineered for simultaneous maintenance of lead-acid, AGM, and Gel batteries. Features independent channel isolation and automatic multi-stage CC/CV charging profiles.",
    "features": [
      "Independent Channel Isolation & Monitoring",
      "Microprocessor Auto-Cutoff & Thermal Throttling",
      "Digital LED Voltmeter & Ammeter Display",
      "Over-voltage & Reverse Polarity Protection"
    ],
    "specifications": [
      {
        "label": "Voltage Rating",
        "value": "12V - 48V Output"
      },
      {
        "label": "Current Capacity",
        "value": "Dual 10A / 20A per channel"
      },
      {
        "label": "Efficiency Rating",
        "value": "94% SMPS High-Purity Core"
      },
      {
        "label": "Enclosure Type",
        "value": "Heavy-Duty Powder Coated Steel"
      }
    ]
  },
  {
    "id": "gallery-2",
    "slug": "mga-prince-automatic-fast-battery-charger",
    "title": "MGA Prince Automatic Fast Battery Charger",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1300,
    "src": "/products/mga-prince-automatic-fast-battery-charger.png",
    "shortDescription": "Compact automatic fast charger with smart mains indicator and multi-stage battery protection.",
    "description": "Designed for automotive workshops and fleet maintenance, the MGA Prince Automatic Charger delivers smooth fast-charging with active thermal regulation and auto trickle-charge cutoff once full capacity is reached.",
    "features": [
      "Smart Auto-Cutoff Trickle Charge Control",
      "High Efficiency Copper Transformer Engine",
      "Front Panel Status Indicators (Mains, Charging, Battery Ready)",
      "Rugged Steel Casing with Ventilation Grills"
    ],
    "specifications": [
      {
        "label": "Output Voltage",
        "value": "12V DC Nominal"
      },
      {
        "label": "Max Current",
        "value": "10 Ampere Continuous"
      },
      {
        "label": "Input Voltage",
        "value": "180V - 250V AC 50Hz"
      },
      {
        "label": "Cooling System",
        "value": "Convection & Passive Heatsink"
      }
    ]
  },
  {
    "id": "gallery-3",
    "slug": "mga-digital-battery-load-tester-450a",
    "title": "MGA High-Precision Digital Battery Load Tester 450A",
    "category": "Testing Equipment",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1350,
    "src": "/products/mga-digital-battery-load-tester-450a.png",
    "shortDescription": "Heavy-duty 450A selectable battery load tester with 5-second automatic test pulse.",
    "description": "The MGA Digital Battery Load Tester is the gold standard for testing automotive, inverter, and commercial vehicle batteries. Provides instantaneous 100A, 175A, 300A, and 450A discharge testing to accurately measure Cold Cranking Amps (CCA) and state of health.",
    "features": [
      "4-Stage Selectable Load Switch (100A, 175A, 300A, 450A)",
      "5-Second Safety Push-Button Load Test",
      "High-Contrast Digital LED Voltage Meter",
      "Heavy-Duty Solid Copper Cables & High-Tension Clamps"
    ],
    "specifications": [
      {
        "label": "Testing Capacity",
        "value": "Up to 450 Amp Discharge Load"
      },
      {
        "label": "Voltage Range",
        "value": "0 - 19.99V Digital Precision"
      },
      {
        "label": "Test Duration",
        "value": "5 Seconds Auto Cut-off Safety"
      },
      {
        "label": "Cable Rating",
        "value": "25mm² Pure Copper Woven Cable"
      }
    ]
  },
  {
    "id": "gallery-4",
    "slug": "mga-industrial-copper-transformer-winding-station",
    "title": "MGA Industrial Copper Transformer Winding Station",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1400,
    "src": "/products/mga-industrial-copper-transformer-winding-station.png",
    "shortDescription": "High-purity copper core transformer assembly station engineered for 24/7 duty cycles.",
    "description": "Built in-house at MGA Electronics manufacturing plant, this heavy transformer core winding assembly guarantees maximum electrical conductivity, minimal hysteresis loss, and Class H temperature insulation.",
    "features": [
      "100% High-Purity Electrolytic Copper Winding",
      "Class H 180°C High-Temperature Varnish Insulation",
      "Precision CNC Automated Layer Tensioning",
      "Zero Hysteresis Loss Silicon Steel Stator Core"
    ],
    "specifications": [
      {
        "label": "Core Material",
        "value": "CRGO Grain-Oriented Silicon Steel"
      },
      {
        "label": "Winding Material",
        "value": "99.9% Electrolytic Copper Wire"
      },
      {
        "label": "Insulation Class",
        "value": "Class H (180°C Rated)"
      },
      {
        "label": "Operating Efficiency",
        "value": "96.5% Thermal Efficiency"
      }
    ]
  },
  {
    "id": "gallery-5",
    "slug": "mga-intelligent-smps-high-speed-battery-charger",
    "title": "MGA Intelligent SMPS High-Speed Battery Charger",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1450,
    "src": "/products/mga-intelligent-smps-high-speed-battery-charger.png",
    "shortDescription": "Next-gen Switched-Mode Power Supply charger with active power factor correction.",
    "description": "Utilizing modern high-frequency SMPS technology, this charger delivers fast 24V 20A power output in a lightweight compact footprint with active power factor correction (PFC > 0.98) and zero noise interference.",
    "features": [
      "Active Power Factor Correction (PFC > 0.98)",
      "High-Frequency Switching Core (100kHz SMPS)",
      "Microprocessor Controlled 4-Stage CC/CV Profile",
      "Short Circuit & Soft-Start Inrush Protection"
    ],
    "specifications": [
      {
        "label": "Output Power",
        "value": "24V DC / 20 Ampere"
      },
      {
        "label": "Efficiency",
        "value": "95% SMPS Conversion Rate"
      },
      {
        "label": "Protection",
        "value": "Over-Temp, Reverse Polarity, Spike Filter"
      },
      {
        "label": "Weight",
        "value": "3.8 kg Ultra-Portable"
      }
    ]
  },
  {
    "id": "gallery-6",
    "slug": "mga-active-auto-portable-battery-charger",
    "title": "MGA Active Auto Portable Battery Charger",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1500,
    "src": "/products/mga-active-auto-portable-battery-charger.png",
    "shortDescription": "12V 12A active portable charger for personal vehicles, garage tools, and backup batteries.",
    "description": "Compact, durable, and lightweight, the MGA Active 12V 12A Charger is engineered for easy portability with a built-in carrying handle and heavy-duty steel protective casing.",
    "features": [
      "Constant Current 12A Rapid Charge Mode",
      "Heavy-Duty Carry Handle & Rubberized Rubber Feet",
      "Analog Ammeter for Real-time Charge Current Monitoring",
      "Short Circuit Fuse & Surge Suppressor"
    ],
    "specifications": [
      {
        "label": "Rating Output",
        "value": "12V DC / 12 Amp Peak"
      },
      {
        "label": "Mains Input",
        "value": "220V AC 50/60Hz"
      },
      {
        "label": "Body Casing",
        "value": "Powder-coated Mild Steel"
      },
      {
        "label": "Weight",
        "value": "4.2 kg"
      }
    ]
  },
  {
    "id": "gallery-7",
    "slug": "mga-big-boss-30-commercial-fleet-charger",
    "title": "MGA Big Boss 30 Commercial Fleet Charger",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1550,
    "src": "/products/mga-big-boss-30-commercial-fleet-charger.png",
    "shortDescription": "30A high-output commercial charger with 12V/24V dual selectable voltage switches.",
    "description": "The BIG BOSS 30 is built for heavy commercial truck, bus, and industrial generator batteries. Delivers up to 30 Amps continuous charge with dual forced-air cooling fans and heavy-duty copper transformer.",
    "features": [
      "12V & 24V Dual Voltage Selector Toggle",
      "Dual High-Flow Ball Bearing Forced-Air Cooling Fans",
      "30A High-Output Rapid Boost Mode",
      "Illuminated Power Switch & Rotary Current Selector"
    ],
    "specifications": [
      {
        "label": "Charge Current",
        "value": "30 Amp Continuous Boost"
      },
      {
        "label": "Selectable Voltage",
        "value": "12V DC / 24V DC"
      },
      {
        "label": "Transformer",
        "value": "Heavy Copper Toroidal Core"
      },
      {
        "label": "Warranty",
        "value": "2-Year MGA Commercial Warranty"
      }
    ]
  },
  {
    "id": "gallery-8",
    "slug": "mga-titanium-15a-pulse-desulfation-charger",
    "title": "MGA Titanium 15A Pulse Desulfation Charger",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1600,
    "src": "/products/mga-titanium-15a-pulse-desulfation-charger.png",
    "shortDescription": "High-frequency pulse desulfation charger designed to revive old and deeply discharged batteries.",
    "description": "Featuring MGA proprietary Pulse Desulfation Technology, the Titanium 15A breaks down lead-sulfate crystal buildup on battery plates to restore capacity, extend lifespan, and recover deeply discharged batteries.",
    "features": [
      "High-Frequency High-Voltage Pulse Repair Mode",
      "LCD Digital Screen Displaying Voltage, Current & Battery %",
      "Smart Temperature Compensation Sensor",
      "Microprocessor Auto Voltage Sensing"
    ],
    "specifications": [
      {
        "label": "Max Current",
        "value": "15 Ampere Pulse Mode"
      },
      {
        "label": "Compatibility",
        "value": "Lead-Acid, AGM, Gel, Tubular"
      },
      {
        "label": "Pulse Frequency",
        "value": "10kHz High-Frequency Pulse"
      },
      {
        "label": "Display",
        "value": "Blue Backlit LCD Telemetry"
      }
    ]
  },
  {
    "id": "gallery-9",
    "slug": "mga-heavy-duty-industrial-testing-console",
    "title": "MGA Heavy-Duty Industrial Testing Console",
    "category": "Testing Equipment",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1650,
    "src": "/products/mga-heavy-duty-industrial-testing-console.png",
    "shortDescription": "Factory quality assurance testing console for variable voltage and current calibration.",
    "description": "Integrated in MGA manufacturing lines, this bench console allows precision variable voltage tuning, ripple noise analysis, and continuous burn-in load testing for quality assurance.",
    "features": [
      "Variable Voltage Tuning Dial (0V - 100V DC)",
      "Dual Digital Precision Voltmeter & Ammeter",
      "Emergency E-Stop Isolation Switch",
      "Zero-Noise EMI Shielded Enclosure"
    ],
    "specifications": [
      {
        "label": "Adjustable Voltage",
        "value": "0V to 100V Continuously Variable"
      },
      {
        "label": "Max Power Output",
        "value": "3000 Watts Peak Load"
      },
      {
        "label": "Meter Accuracy",
        "value": "±0.1% Full Scale Digital Precision"
      },
      {
        "label": "Protection",
        "value": "Thermal Magnetic Circuit Breaker"
      }
    ]
  },
  {
    "id": "gallery-10",
    "slug": "mga-commercial-ev-3-wheeler-fast-charger",
    "title": "MGA Commercial EV 3-Wheeler Fast Charger",
    "category": "EV Chargers",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1700,
    "src": "/products/mga-commercial-ev-3-wheeler-fast-charger.png",
    "shortDescription": "High-efficiency 48V/60V/72V EV charger tailored for commercial 3-wheeler delivery fleets.",
    "description": "Purpose-built for Indian commercial EV logistics, delivery fleets, and e-rickshaws. Built with rugged weatherproofing, thermal auto-throttling, and CAN Bus communication protocol.",
    "features": [
      "Multi-Voltage Support (48V, 60V, 72V Lithium/Lead Packs)",
      "CAN Bus 2.0B Smart BMS Communication Protocol",
      "IP65 Moisture & Dust Resistant Enclosure",
      "Over-Temperature Auto Thermal Throttling"
    ],
    "specifications": [
      {
        "label": "Output Voltage",
        "value": "48V / 60V / 72V Nominal"
      },
      {
        "label": "Charging Current",
        "value": "15A / 20A / 25A Configurable"
      },
      {
        "label": "Efficiency",
        "value": "96.2% High SMPS Efficiency"
      },
      {
        "label": "Cooling",
        "value": "Intelligent Speed-Control Fan"
      }
    ]
  },
  {
    "id": "gallery-11",
    "slug": "mga-solar-hybrid-intelligent-battery-controller",
    "title": "MGA Solar Hybrid Intelligent Battery Controller",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1750,
    "src": "/products/mga-solar-hybrid-intelligent-battery-controller.png",
    "shortDescription": "Hybrid MPPT solar and AC grid charger for off-grid battery backup setups.",
    "description": "Combines high-efficiency MPPT solar tracking with automatic grid charging to maximize solar energy utilization and minimize grid electricity consumption for battery banks.",
    "features": [
      "Maximum Power Point Tracking (MPPT Efficiency 99%)",
      "Automatic Priority Switching (Solar -> Battery -> Grid)",
      "Backlit Graphical LCD Display",
      "Comprehensive Battery Protection Algorithm"
    ],
    "specifications": [
      {
        "label": "Solar Input",
        "value": "Up to 100V PV Open Circuit"
      },
      {
        "label": "System Voltage",
        "value": "12V / 24V Auto Select"
      },
      {
        "label": "Max Solar Current",
        "value": "30 Ampere MPPT"
      },
      {
        "label": "Efficiency",
        "value": "98.5% MPPT Conversion Rate"
      }
    ]
  },
  {
    "id": "gallery-12",
    "slug": "mga-smart-float-trickle-battery-maintainer",
    "title": "MGA Smart Float & Trickle Battery Maintainer",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1800,
    "src": "/products/mga-smart-float-trickle-battery-maintainer.png",
    "shortDescription": "12V 5A float maintainer for long-term vehicle storage and generator starting batteries.",
    "description": "Keeps standby generator batteries and seasonal vehicles 100% charged without overcharging. Uses smart 4-stage float technology to maintain battery voltage indefinitely.",
    "features": [
      "Zero Overcharge Smart Float Mode",
      "Short Circuit & Reverse Polarity Spark-Proof Clamps",
      "Ultra-Compact Lightweight ABS Case",
      "Automatic Battery Health Self-Diagnosis"
    ],
    "specifications": [
      {
        "label": "Output Voltage",
        "value": "12V DC Float (13.6V Constant)"
      },
      {
        "label": "Maintain Current",
        "value": "5 Ampere Max Peak"
      },
      {
        "label": "Safety Rating",
        "value": "Spark-proof & Short-circuit Protected"
      },
      {
        "label": "Weight",
        "value": "1.2 kg"
      }
    ]
  },
  {
    "id": "gallery-13",
    "slug": "mga-multi-cell-lithium-battery-diagnostics-system",
    "title": "MGA Multi-Cell Lithium Battery Diagnostics System",
    "category": "Testing Equipment",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1850,
    "src": "/products/mga-multi-cell-lithium-battery-diagnostics-system.png",
    "shortDescription": "Lithium cell internal resistance & capacity analyzer for battery pack manufacturing.",
    "description": "Designed for lithium-ion and LiFePO4 battery pack assemblers. Measures cell internal AC resistance (mΩ) and discharge capacity to match cells accurately before pack assembly.",
    "features": [
      "AC 1kHz Four-Terminal Kelvin Resistance Measurement",
      "High Precision Internal Resistance Resolution (0.01mΩ)",
      "Simultaneous Voltage & Resistance Dual LCD Display",
      "USB Data Logging & PC Software Suite"
    ],
    "specifications": [
      {
        "label": "IR Test Range",
        "value": "0.01mΩ - 200Ω"
      },
      {
        "label": "Voltage Range",
        "value": "0.001V - 100V DC"
      },
      {
        "label": "Test Frequency",
        "value": "1kHz AC Signal Method"
      },
      {
        "label": "Accuracy",
        "value": "±0.2% High Precision"
      }
    ]
  },
  {
    "id": "gallery-14",
    "slug": "mga-benchtop-regulated-dc-power-supply-50a",
    "title": "MGA Benchtop Regulated DC Power Supply 50A",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1900,
    "src": "/products/mga-benchtop-regulated-dc-power-supply-50a.png",
    "shortDescription": "0-30V 50A high-current regulated lab power supply with digital coarse/fine controls.",
    "description": "High-precision benchtop power supply providing stable, low-noise DC power up to 50 Amps. Ideal for electronics design labs, R&D testing, and heavy DC equipment testing.",
    "features": [
      "Coarse & Fine Voltage/Current Rotary Controls",
      "Constant Voltage (CV) & Constant Current (CC) Automatic Crossover",
      "Low Output Ripple (<5mV RMS)",
      "Built-in Over-Current Protection (OCP) Shutoff"
    ],
    "specifications": [
      {
        "label": "Voltage Adjustment",
        "value": "0 - 30V DC Continuous"
      },
      {
        "label": "Current Adjustment",
        "value": "0 - 50A DC Continuous"
      },
      {
        "label": "Ripple & Noise",
        "value": "< 5mV RMS Low Ripple"
      },
      {
        "label": "Display",
        "value": "Dual 4-Digit Blue LED Panels"
      }
    ]
  },
  {
    "id": "gallery-15",
    "slug": "mga-factory-automated-qc-testing-bench",
    "title": "MGA Factory Automated QC Testing Bench",
    "category": "Testing Equipment",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1950,
    "src": "/products/mga-factory-automated-qc-testing-bench.png",
    "shortDescription": "Automated 8-bay burn-in and Quality Assurance testing bench for production quality control.",
    "description": "Installed in MGA manufacturing facility, this automated 8-bay test station subjects newly built chargers to 24-hour burn-in cycles under full load to ensure zero defect delivery.",
    "features": [
      "8-Bay Simultaneous Burn-in Load Testing",
      "Automated Voltage Spike & Thermal Cycling Simulator",
      "Pass/Fail Automatic QR Code Serial Tagging",
      "Centralized Data Storage & Quality Auditing"
    ],
    "specifications": [
      {
        "label": "Testing Bays",
        "value": "8 Independent QC Channels"
      },
      {
        "label": "Burn-in Capacity",
        "value": "Up to 5kW Total Load Bank"
      },
      {
        "label": "Cycle Duration",
        "value": "24-Hour Automated Stress Cycle"
      },
      {
        "label": "Compliance",
        "value": "ISO 9001:2015 QC Standard"
      }
    ]
  },
  {
    "id": "gallery-16",
    "slug": "mga-industrial-engine-jump-starter-heavy-charger",
    "title": "MGA Industrial Engine Jump Starter & Heavy Charger",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 2000,
    "src": "/products/mga-industrial-engine-jump-starter-heavy-charger.png",
    "shortDescription": "600A peak crank assist jump starter and fast charger for heavy earthmovers and trucks.",
    "description": "Engineered for heavy construction equipment, diesel generators, and fleet yards. Provides instant 600A emergency engine cranking boost and high-capacity fast charging.",
    "features": [
      "600A Emergency Instant Engine Cranking Boost Mode",
      "12V / 24V Dual Heavy Duty Selector Switch",
      "Heavy Industrial Steel Wheels & Push Handle",
      "High-Current Pure Copper Cables with Insulated Clamps"
    ],
    "specifications": [
      {
        "label": "Cranking Assist",
        "value": "600 Amp Peak Surge"
      },
      {
        "label": "Charging Output",
        "value": "40 Amp Continuous Rapid Charge"
      },
      {
        "label": "System Voltage",
        "value": "12V / 24V Dual Mode"
      },
      {
        "label": "Cable Gauge",
        "value": "35mm² Heavy Duty Copper"
      }
    ]
  },
  {
    "id": "gallery-17",
    "slug": "mga-marine-inverter-deep-cycle-fast-charger",
    "title": "MGA Marine & Inverter Deep Cycle Fast Charger",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 2050,
    "src": "/products/mga-marine-inverter-deep-cycle-fast-charger.png",
    "shortDescription": "Multi-profile charger engineered for AGM, Gel, and Tubular deep-cycle inverter batteries.",
    "description": "Custom-tuned for home inverters, solar battery banks, and marine vessels. Features 4-stage charge algorithms tailored for tubular and gel battery chemistry.",
    "features": [
      "Selectable Battery Profiles (Tubular, AGM, Gel, Lead-Acid)",
      "Automatic Temperature Compensation Sensor",
      "Low Mains Charging Capability (Works down to 110V AC)",
      "Soft-Start Deep-Discharge Recovery Mode"
    ],
    "specifications": [
      {
        "label": "Charge Current",
        "value": "18 Ampere Intelligent"
      },
      {
        "label": "Supported Chemistry",
        "value": "Tubular, AGM, Gel, Wet"
      },
      {
        "label": "Input Range",
        "value": "110V - 280V AC Wide Range"
      },
      {
        "label": "Enclosure",
        "value": "Corrosion-resistant Coated Steel"
      }
    ]
  },
  {
    "id": "gallery-18",
    "slug": "mga-e-rickshaw-intelligent-smps-battery-charger",
    "title": "MGA E-Rickshaw Intelligent SMPS Battery Charger",
    "category": "EV Chargers",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 2100,
    "src": "/products/mga-e-rickshaw-intelligent-smps-battery-charger.png",
    "shortDescription": "48V 15A SMPS charger engineered for commercial e-rickshaw battery packs.",
    "description": "India's leading commercial e-rickshaw charger. Highly efficient 48V 15A SMPS technology withstands Indian grid fluctuations and summer heat up to 50°C.",
    "features": [
      "Heavy-Duty Aluminum Extruded Heat Sink Chassis",
      "Over-Voltage & Under-Voltage Automatic Mains Cutoff",
      "Constant Current / Constant Voltage (CC/CV) Auto Mode",
      "High Surge Resistance & Short Circuit Protection"
    ],
    "specifications": [
      {
        "label": "Output Voltage",
        "value": "48V DC Nominal (57.6V Max Float)"
      },
      {
        "label": "Charge Current",
        "value": "15 Ampere High Efficiency"
      },
      {
        "label": "Heat Dissipation",
        "value": "Extruded Aluminum Heat Sink Fan"
      },
      {
        "label": "Warranty",
        "value": "1-Year MGA Direct Replacement"
      }
    ]
  },
  {
    "id": "gallery-19",
    "slug": "mga-commercial-multi-bank-battery-charging-station",
    "title": "MGA Commercial Multi-Bank Battery Charging Station",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 2150,
    "src": "/products/mga-commercial-multi-bank-battery-charging-station.png",
    "shortDescription": "6-bank isolated charging station for charging multiple batteries simultaneously.",
    "description": "Designed for battery service centers, fleet maintenance hubs, and rental depots. Features 6 isolated outputs to charge different capacity batteries at their ideal current.",
    "features": [
      "6 Completely Isolated Charging Banks",
      "Individual Ammeter & Voltmeter for Each Bank",
      "Independent Rotary Current Adjustment Dials",
      "Centralized Thermal Circuit Breaker Protection"
    ],
    "specifications": [
      {
        "label": "Number of Banks",
        "value": "6 Isolated Independent Channels"
      },
      {
        "label": "Output Per Bank",
        "value": "12V / 10A Max Each Bank"
      },
      {
        "label": "Total Capacity",
        "value": "60 Ampere Total Output"
      },
      {
        "label": "Casing",
        "value": "Powder-coated Industrial Floor Rack"
      }
    ]
  },
  {
    "id": "gallery-20",
    "slug": "mga-handheld-digital-conductance-battery-tester",
    "title": "MGA Handheld Digital Conductance Battery Tester",
    "category": "Testing Equipment",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 2200,
    "src": "/products/mga-handheld-digital-conductance-battery-tester.png",
    "shortDescription": "Portable battery analyzer for CCA, State of Health (SOH), and State of Charge (SOC).",
    "description": "Fast handheld diagnostic tool for automotive mechanics and battery retailers. Tests battery conductance without draining energy to give instant SOH, SOC, and CCA health readouts.",
    "features": [
      "Conductance Testing Method (No Battery Drain)",
      "Instant SOH (State of Health) & SOC (State of Charge) %",
      "CCA Range 100 to 2000 CCA Testing",
      "Backlit Screen & Tough Rubber Armor Sleeve"
    ],
    "specifications": [
      {
        "label": "Test Range",
        "value": "100 - 2000 CCA / 30 - 220Ah"
      },
      {
        "label": "Voltage Range",
        "value": "7V to 30V DC"
      },
      {
        "label": "Standards Supported",
        "value": "CCA, JIS, DIN, SAE, IEC, EN"
      },
      {
        "label": "Weight",
        "value": "0.45 kg Lightweight Handheld"
      }
    ]
  },
  {
    "id": "gallery-21",
    "slug": "mga-digital-heavy-duty-battery-load-tester-450a",
    "title": "MGA Digital Heavy-Duty Battery Load Tester 450A",
    "category": "Testing Equipment",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 2250,
    "src": "/products/mga-digital-heavy-duty-battery-load-tester-450a.png",
    "shortDescription": "Selective 4-stage 450A discharge tester with digital volt meter for automotive & industrial batteries.",
    "description": "Heavy-duty 450A digital load tester engineered for fast, accurate battery testing. Equipped with precision digital LED voltmeter and heavy copper clamps for commercial battery testing.",
    "features": [
      "4-Level Load Selection: 100A, 175A, 300A, 450A",
      "5-Second Timed Push-for-Load Safety Test Button",
      "High-Accuracy Digital 4-Digit LED Voltmeter",
      "Made in India - MGA Quality Assurance"
    ],
    "specifications": [
      {
        "label": "Discharge Load",
        "value": "Selective 100A / 175A / 300A / 450A"
      },
      {
        "label": "Voltmeter",
        "value": "0.00V - 19.99V LED Digital Display"
      },
      {
        "label": "Safety Timer",
        "value": "5 Seconds Automatic Cutoff"
      },
      {
        "label": "Body",
        "value": "Crimson Red Powder-Coated Steel Chassis"
      }
    ]
  },
  {
    "id": "gallery-22",
    "slug": "mga-automatic-servo-voltage-regulator-fast-charger",
    "title": "MGA Automatic Servo Voltage Regulator & Fast Charger",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 2300,
    "src": "/products/mga-automatic-servo-voltage-regulator-fast-charger.png",
    "shortDescription": "Combines precise servo voltage regulation with automatic battery fast charging.",
    "description": "Ideal for locations with extreme line voltage fluctuations (140V-280V). Regulates output voltage smoothly while simultaneously fast-charging connected battery banks.",
    "features": [
      "High-Speed Servo Motor Controlled Autotransformer Core",
      "Wide Input Voltage Range (140V to 280V AC)",
      "Pure Sine Wave Voltage Regulation (<1% Error)",
      "High/Low Cutoff Protection & Digital Telemetry"
    ],
    "specifications": [
      {
        "label": "Input Voltage",
        "value": "140V - 280V AC Single Phase"
      },
      {
        "label": "Output Voltage",
        "value": "230V AC ± 1% Regulated"
      },
      {
        "label": "Charger Output",
        "value": "12V / 15A Integrated Charger"
      },
      {
        "label": "Correction Speed",
        "value": "60V per Second High Speed"
      }
    ]
  },
  {
    "id": "gallery-23",
    "slug": "mga-high-capacity-industrial-energy-storage-system",
    "title": "MGA High-Capacity Industrial Energy Storage System",
    "category": "Products",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 2350,
    "src": "/products/mga-high-capacity-industrial-energy-storage-system.png",
    "shortDescription": "Modular LiFePO4 energy storage power pack with integrated BMS for commercial backup.",
    "description": "State-of-the-art LiFePO4 battery pack engineered for industrial backup, solar energy storage, and EV charging stations. Delivers 4000+ cycle life with integrated smart BMS.",
    "features": [
      "Grade-A Lithium Iron Phosphate (LiFePO4) Cells",
      "Integrated Smart BMS with Bluetooth / RS485 Monitoring",
      "4000+ Deep Cycle Life at 80% DOD",
      "Thermal Runaway Prevention & Active Balancing"
    ],
    "specifications": [
      {
        "label": "Energy Capacity",
        "value": "5.12 kWh (48V 100Ah Pack)"
      },
      {
        "label": "Cycle Life",
        "value": "> 4000 Cycles @ 80% DOD"
      },
      {
        "label": "Discharge Current",
        "value": "100A Continuous / 200A Peak"
      },
      {
        "label": "Communication",
        "value": "RS485, CAN, Modbus Protocol"
      }
    ]
  }
];
