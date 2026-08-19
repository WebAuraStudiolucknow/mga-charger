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
    "description": "The MGA Intelligent Hawk is an industrial-grade multi-channel battery charging and testing station engineered for simultaneous maintenance of lead-acid, AGM, and Gel batteries.",
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
    "description": "Designed for automotive workshops and fleet maintenance, the MGA Prince Automatic Charger delivers smooth fast-charging with active thermal regulation.",
    "features": [
      "Smart Auto-Cutoff Trickle Charge Control",
      "High Efficiency Copper Transformer Engine",
      "Front Panel Status Indicators"
    ],
    "specifications": [
      {
        "label": "Output Voltage",
        "value": "12V DC Nominal"
      },
      {
        "label": "Max Current",
        "value": "10 Ampere Continuous"
      }
    ]
  },
  {
    "id": "gallery-3",
    "slug": "mga-digital-battery-load-tester-450a",
    "title": "MGA Digital Heavy-Duty Battery Load Tester 450A",
    "category": "Testing Equipment",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 1350,
    "src": "/products/mga-digital-battery-load-tester-450a.png",
    "shortDescription": "Heavy-duty 450A selectable battery load tester with 5-second automatic test pulse.",
    "description": "The MGA Digital Battery Load Tester provides instantaneous 100A, 175A, 300A, and 450A discharge testing to accurately measure Cold Cranking Amps (CCA) and state of health.",
    "features": [
      "4-Stage Selectable Load Switch (100A, 175A, 300A, 450A)",
      "5-Second Safety Push-Button Load Test",
      "High-Contrast Digital LED Voltage Meter"
    ],
    "specifications": [
      {
        "label": "Testing Capacity",
        "value": "Up to 450 Amp Discharge Load"
      },
      {
        "label": "Voltage Range",
        "value": "0 - 19.99V Digital Precision"
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
    "description": "Built in-house at MGA Electronics manufacturing plant, this heavy transformer core winding assembly guarantees maximum electrical conductivity.",
    "features": [
      "100% High-Purity Electrolytic Copper Winding",
      "Class H 180°C High-Temperature Varnish Insulation"
    ],
    "specifications": [
      {
        "label": "Core Material",
        "value": "CRGO Grain-Oriented Silicon Steel"
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
    "description": "Utilizing modern high-frequency SMPS technology, this charger delivers fast 24V 20A power output in a lightweight compact footprint.",
    "features": [
      "Active Power Factor Correction (PFC > 0.98)",
      "High-Frequency Switching Core (100kHz SMPS)"
    ],
    "specifications": [
      {
        "label": "Output Power",
        "value": "24V DC / 20 Ampere"
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
    "description": "Compact, durable, and lightweight, the MGA Active 12V 12A Charger is engineered for easy portability with a built-in carrying handle.",
    "features": [
      "Constant Current 12A Rapid Charge Mode",
      "Heavy-Duty Carry Handle & Rubberized Rubber Feet"
    ],
    "specifications": [
      {
        "label": "Rating Output",
        "value": "12V DC / 12 Amp Peak"
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
    "description": "The BIG BOSS 30 is built for heavy commercial truck, bus, and industrial generator batteries. Delivers up to 30 Amps continuous charge.",
    "features": [
      "12V & 24V Dual Voltage Selector Toggle",
      "Dual High-Flow Ball Bearing Forced-Air Cooling Fans"
    ],
    "specifications": [
      {
        "label": "Charge Current",
        "value": "30 Amp Continuous Boost"
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
    "description": "Featuring MGA proprietary Pulse Desulfation Technology, the Titanium 15A breaks down lead-sulfate crystal buildup on battery plates.",
    "features": [
      "High-Frequency High-Voltage Pulse Repair Mode",
      "LCD Digital Screen Displaying Voltage, Current & Battery %"
    ],
    "specifications": [
      {
        "label": "Max Current",
        "value": "15 Ampere Pulse Mode"
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
    "description": "Integrated in MGA manufacturing lines, this bench console allows precision variable voltage tuning and burn-in load testing.",
    "features": [
      "Variable Voltage Tuning Dial (0V - 100V DC)",
      "Dual Digital Precision Voltmeter & Ammeter"
    ],
    "specifications": [
      {
        "label": "Adjustable Voltage",
        "value": "0V to 100V Continuously Variable"
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
    "description": "Purpose-built for Indian commercial EV logistics, delivery fleets, and e-rickshaws. Built with rugged weatherproofing and thermal throttling.",
    "features": [
      "Multi-Voltage Support (48V, 60V, 72V Lithium/Lead Packs)",
      "IP65 Moisture & Dust Resistant Enclosure"
    ],
    "specifications": [
      {
        "label": "Output Voltage",
        "value": "48V / 60V / 72V Nominal"
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
    "description": "Combines high-efficiency MPPT solar tracking with automatic grid charging to maximize solar energy utilization.",
    "features": [
      "Maximum Power Point Tracking (MPPT Efficiency 99%)",
      "Automatic Priority Switching (Solar -> Battery -> Grid)"
    ],
    "specifications": [
      {
        "label": "Solar Input",
        "value": "Up to 100V PV Open Circuit"
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
    "description": "Keeps standby generator batteries and seasonal vehicles 100% charged without overcharging.",
    "features": [
      "Zero Overcharge Smart Float Mode",
      "Short Circuit & Reverse Polarity Spark-Proof Clamps"
    ],
    "specifications": [
      {
        "label": "Output Voltage",
        "value": "12V DC Float (13.6V Constant)"
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
    "description": "Designed for lithium-ion and LiFePO4 battery pack assemblers. Measures cell internal AC resistance (mΩ) and discharge capacity.",
    "features": [
      "AC 1kHz Four-Terminal Kelvin Resistance Measurement",
      "High Precision Internal Resistance Resolution (0.01mΩ)"
    ],
    "specifications": [
      {
        "label": "IR Test Range",
        "value": "0.01mΩ - 200Ω"
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
    "description": "High-precision benchtop power supply providing stable, low-noise DC power up to 50 Amps.",
    "features": [
      "Coarse & Fine Voltage/Current Rotary Controls",
      "Constant Voltage (CV) & Constant Current (CC) Automatic Crossover"
    ],
    "specifications": [
      {
        "label": "Voltage Adjustment",
        "value": "0 - 30V DC Continuous"
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
    "description": "Installed in MGA manufacturing facility, this automated 8-bay test station subjects newly built chargers to 24-hour burn-in cycles.",
    "features": [
      "8-Bay Simultaneous Burn-in Load Testing",
      "Automated Voltage Spike & Thermal Cycling Simulator"
    ],
    "specifications": [
      {
        "label": "Testing Bays",
        "value": "8 Independent QC Channels"
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
    "description": "Engineered for heavy construction equipment, diesel generators, and fleet yards.",
    "features": [
      "600A Emergency Instant Engine Cranking Boost Mode",
      "12V / 24V Dual Heavy Duty Selector Switch"
    ],
    "specifications": [
      {
        "label": "Cranking Assist",
        "value": "600 Amp Peak Surge"
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
    "description": "Custom-tuned for home inverters, solar battery banks, and marine vessels.",
    "features": [
      "Selectable Battery Profiles (Tubular, AGM, Gel, Lead-Acid)",
      "Automatic Temperature Compensation Sensor"
    ],
    "specifications": [
      {
        "label": "Charge Current",
        "value": "18 Ampere Intelligent"
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
    "description": "India's leading commercial e-rickshaw charger. Highly efficient 48V 15A SMPS technology withstands Indian grid fluctuations.",
    "features": [
      "Heavy-Duty Aluminum Extruded Heat Sink Chassis",
      "Over-Voltage & Under-Voltage Automatic Mains Cutoff"
    ],
    "specifications": [
      {
        "label": "Output Voltage",
        "value": "48V DC Nominal (57.6V Max Float)"
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
    "description": "Designed for battery service centers, fleet maintenance hubs, and rental depots.",
    "features": [
      "6 Completely Isolated Charging Banks",
      "Individual Ammeter & Voltmeter for Each Bank"
    ],
    "specifications": [
      {
        "label": "Number of Banks",
        "value": "6 Isolated Independent Channels"
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
    "description": "Fast handheld diagnostic tool for automotive mechanics and battery retailers.",
    "features": [
      "Conductance Testing Method (No Battery Drain)",
      "Instant SOH & SOC Readout"
    ],
    "specifications": [
      {
        "label": "Test Range",
        "value": "100 - 2000 CCA / 30 - 220Ah"
      }
    ]
  },
  {
    "id": "gallery-21",
    "slug": "mga-digital-heavy-duty-battery-load-tester-panel",
    "title": "MGA Digital Heavy-Duty Battery Load Tester Panel",
    "category": "Testing Equipment",
    "modelGrade": "OEM Grade",
    "rating": 4.9,
    "reviews": 2250,
    "src": "/products/mga-digital-heavy-duty-battery-load-tester-panel.png",
    "shortDescription": "Selective 4-stage 450A discharge tester with digital volt meter panel.",
    "description": "Heavy-duty 450A digital load tester panel engineered for fast, accurate battery testing.",
    "features": [
      "4-Level Load Selection: 100A, 175A, 300A, 450A",
      "High-Accuracy Digital 4-Digit LED Voltmeter"
    ],
    "specifications": [
      {
        "label": "Discharge Load",
        "value": "Selective 100A / 175A / 300A / 450A"
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
    "description": "Ideal for locations with extreme line voltage fluctuations (140V-280V).",
    "features": [
      "High-Speed Servo Motor Controlled Autotransformer Core",
      "Wide Input Voltage Range (140V to 280V AC)"
    ],
    "specifications": [
      {
        "label": "Input Voltage",
        "value": "140V - 280V AC Single Phase"
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
    "description": "State-of-the-art LiFePO4 battery pack engineered for industrial backup and solar energy storage.",
    "features": [
      "Grade-A Lithium Iron Phosphate (LiFePO4) Cells",
      "Integrated Smart BMS with Bluetooth / RS485"
    ],
    "specifications": [
      {
        "label": "Energy Capacity",
        "value": "5.12 kWh (48V 100Ah Pack)"
      }
    ]
  }
];
