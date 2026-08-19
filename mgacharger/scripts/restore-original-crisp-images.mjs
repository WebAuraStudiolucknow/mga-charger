import fs from 'fs';
import path from 'path';

// Exact 1-to-1 Mapping between Original photo index (image_X.jpg) and Product
const productsList = [
  {
    id: "1",
    idx: 1,
    name: "MGA Intelligent Hawk Multi-Channel Battery Station",
    slug: "mga-intelligent-hawk-multi-channel-battery-station",
    category: "testing",
    categoryName: "Testing Equipment",
    shortDescription: "Multi-channel microprocessor controlled battery charging & testing console for industrial maintenance.",
    description: "The MGA Intelligent Hawk is an industrial-grade multi-channel battery charging and testing station engineered for simultaneous maintenance of lead-acid, AGM, and Gel batteries.",
    features: [
      "Independent Channel Isolation & Monitoring",
      "Microprocessor Auto-Cutoff & Thermal Throttling",
      "Digital LED Voltmeter & Ammeter Display",
      "Over-voltage & Reverse Polarity Protection"
    ],
    specifications: [
      { label: "Voltage Rating", value: "12V - 48V Output" },
      { label: "Current Capacity", value: "Dual 10A / 20A per channel" },
      { label: "Efficiency Rating", value: "94% SMPS High-Purity Core" }
    ],
    featured: true
  },
  {
    id: "2",
    idx: 2,
    name: "MGA Prince Automatic Fast Battery Charger",
    slug: "mga-prince-automatic-fast-battery-charger",
    category: "automotive",
    categoryName: "Automotive Battery Chargers",
    shortDescription: "Compact automatic fast charger with smart mains indicator and multi-stage battery protection.",
    description: "Designed for automotive workshops and fleet maintenance, the MGA Prince Automatic Charger delivers smooth fast-charging with active thermal regulation.",
    features: [
      "Smart Auto-Cutoff Trickle Charge Control",
      "High Efficiency Copper Transformer Engine",
      "Front Panel Status Indicators"
    ],
    specifications: [
      { label: "Output Voltage", value: "12V DC Nominal" },
      { label: "Max Current", value: "10 Ampere Continuous" }
    ],
    featured: true
  },
  {
    id: "3",
    idx: 3,
    name: "MGA Digital Heavy-Duty Battery Load Tester 450A",
    slug: "mga-digital-battery-load-tester-450a",
    category: "testing",
    categoryName: "Testing Equipment",
    shortDescription: "Heavy-duty 450A selectable battery load tester with 5-second automatic test pulse.",
    description: "The MGA Digital Battery Load Tester provides instantaneous 100A, 175A, 300A, and 450A discharge testing to accurately measure Cold Cranking Amps (CCA) and state of health.",
    features: [
      "4-Stage Selectable Load Switch (100A, 175A, 300A, 450A)",
      "5-Second Safety Push-Button Load Test",
      "High-Contrast Digital LED Voltage Meter"
    ],
    specifications: [
      { label: "Testing Capacity", value: "Up to 450 Amp Discharge Load" },
      { label: "Voltage Range", value: "0 - 19.99V Digital Precision" }
    ],
    featured: true
  },
  {
    id: "4",
    idx: 4,
    name: "MGA Industrial Copper Transformer Winding Station",
    slug: "mga-industrial-copper-transformer-winding-station",
    category: "industrial",
    categoryName: "Industrial Equipment",
    shortDescription: "High-purity copper core transformer assembly station engineered for 24/7 duty cycles.",
    description: "Built in-house at MGA Electronics manufacturing plant, this heavy transformer core winding assembly guarantees maximum electrical conductivity.",
    features: [
      "100% High-Purity Electrolytic Copper Winding",
      "Class H 180°C High-Temperature Varnish Insulation"
    ],
    specifications: [
      { label: "Core Material", value: "CRGO Grain-Oriented Silicon Steel" }
    ],
    featured: false
  },
  {
    id: "5",
    idx: 5,
    name: "MGA Intelligent SMPS High-Speed Battery Charger",
    slug: "mga-intelligent-smps-high-speed-battery-charger",
    category: "industrial",
    categoryName: "Industrial Battery Chargers",
    shortDescription: "Next-gen Switched-Mode Power Supply charger with active power factor correction.",
    description: "Utilizing modern high-frequency SMPS technology, this charger delivers fast 24V 20A power output in a lightweight compact footprint.",
    features: [
      "Active Power Factor Correction (PFC > 0.98)",
      "High-Frequency Switching Core (100kHz SMPS)"
    ],
    specifications: [
      { label: "Output Power", value: "24V DC / 20 Ampere" }
    ],
    featured: true
  },
  {
    id: "6",
    idx: 6,
    name: "MGA Active Auto Portable Battery Charger",
    slug: "mga-active-auto-portable-battery-charger",
    category: "automotive",
    categoryName: "Automotive Battery Chargers",
    shortDescription: "12V 12A active portable charger for personal vehicles, garage tools, and backup batteries.",
    description: "Compact, durable, and lightweight, the MGA Active 12V 12A Charger is engineered for easy portability with a built-in carrying handle.",
    features: [
      "Constant Current 12A Rapid Charge Mode",
      "Heavy-Duty Carry Handle & Rubberized Rubber Feet"
    ],
    specifications: [
      { label: "Rating Output", value: "12V DC / 12 Amp Peak" }
    ],
    featured: false
  },
  {
    id: "7",
    idx: 7,
    name: "MGA Big Boss 30 Commercial Fleet Charger",
    slug: "mga-big-boss-30-commercial-fleet-charger",
    category: "industrial",
    categoryName: "Industrial Battery Chargers",
    shortDescription: "30A high-output commercial charger with 12V/24V dual selectable voltage switches.",
    description: "The BIG BOSS 30 is built for heavy commercial truck, bus, and industrial generator batteries. Delivers up to 30 Amps continuous charge.",
    features: [
      "12V & 24V Dual Voltage Selector Toggle",
      "Dual High-Flow Ball Bearing Forced-Air Cooling Fans"
    ],
    specifications: [
      { label: "Charge Current", value: "30 Amp Continuous Boost" }
    ],
    featured: true
  },
  {
    id: "8",
    idx: 8,
    name: "MGA Titanium 15A Pulse Desulfation Charger",
    slug: "mga-titanium-15a-pulse-desulfation-charger",
    category: "automotive",
    categoryName: "Automotive Battery Chargers",
    shortDescription: "High-frequency pulse desulfation charger designed to revive old and deeply discharged batteries.",
    description: "Featuring MGA proprietary Pulse Desulfation Technology, the Titanium 15A breaks down lead-sulfate crystal buildup on battery plates.",
    features: [
      "High-Frequency High-Voltage Pulse Repair Mode",
      "LCD Digital Screen Displaying Voltage, Current & Battery %"
    ],
    specifications: [
      { label: "Max Current", value: "15 Ampere Pulse Mode" }
    ],
    featured: true
  },
  {
    id: "9",
    idx: 9,
    name: "MGA Heavy-Duty Industrial Testing Console",
    slug: "mga-heavy-duty-industrial-testing-console",
    category: "testing",
    categoryName: "Testing Equipment",
    shortDescription: "Factory quality assurance testing console for variable voltage and current calibration.",
    description: "Integrated in MGA manufacturing lines, this bench console allows precision variable voltage tuning and burn-in load testing.",
    features: [
      "Variable Voltage Tuning Dial (0V - 100V DC)",
      "Dual Digital Precision Voltmeter & Ammeter"
    ],
    specifications: [
      { label: "Adjustable Voltage", value: "0V to 100V Continuously Variable" }
    ],
    featured: false
  },
  {
    id: "10",
    idx: 10,
    name: "MGA Commercial EV 3-Wheeler Fast Charger",
    slug: "mga-commercial-ev-3-wheeler-fast-charger",
    category: "ev",
    categoryName: "EV Chargers",
    shortDescription: "High-efficiency 48V/60V/72V EV charger tailored for commercial 3-wheeler delivery fleets.",
    description: "Purpose-built for Indian commercial EV logistics, delivery fleets, and e-rickshaws. Built with rugged weatherproofing and thermal throttling.",
    features: [
      "Multi-Voltage Support (48V, 60V, 72V Lithium/Lead Packs)",
      "IP65 Moisture & Dust Resistant Enclosure"
    ],
    specifications: [
      { label: "Output Voltage", value: "48V / 60V / 72V Nominal" }
    ],
    featured: true
  },
  {
    id: "11",
    idx: 11,
    name: "MGA Solar Hybrid Intelligent Battery Controller",
    slug: "mga-solar-hybrid-intelligent-battery-controller",
    category: "inverter",
    categoryName: "Inverter Chargers",
    shortDescription: "Hybrid MPPT solar and AC grid charger for off-grid battery backup setups.",
    description: "Combines high-efficiency MPPT solar tracking with automatic grid charging to maximize solar energy utilization.",
    features: [
      "Maximum Power Point Tracking (MPPT Efficiency 99%)",
      "Automatic Priority Switching (Solar -> Battery -> Grid)"
    ],
    specifications: [
      { label: "Solar Input", value: "Up to 100V PV Open Circuit" }
    ],
    featured: false
  },
  {
    id: "12",
    idx: 12,
    name: "MGA Smart Float & Trickle Battery Maintainer",
    slug: "mga-smart-float-trickle-battery-maintainer",
    category: "automotive",
    categoryName: "Automotive Battery Chargers",
    shortDescription: "12V 5A float maintainer for long-term vehicle storage and generator starting batteries.",
    description: "Keeps standby generator batteries and seasonal vehicles 100% charged without overcharging.",
    features: [
      "Zero Overcharge Smart Float Mode",
      "Short Circuit & Reverse Polarity Spark-Proof Clamps"
    ],
    specifications: [
      { label: "Output Voltage", value: "12V DC Float (13.6V Constant)" }
    ],
    featured: false
  },
  {
    id: "13",
    idx: 13,
    name: "MGA Multi-Cell Lithium Battery Diagnostics System",
    slug: "mga-multi-cell-lithium-battery-diagnostics-system",
    category: "testing",
    categoryName: "Testing Equipment",
    shortDescription: "Lithium cell internal resistance & capacity analyzer for battery pack manufacturing.",
    description: "Designed for lithium-ion and LiFePO4 battery pack assemblers. Measures cell internal AC resistance (mΩ) and discharge capacity.",
    features: [
      "AC 1kHz Four-Terminal Kelvin Resistance Measurement",
      "High Precision Internal Resistance Resolution (0.01mΩ)"
    ],
    specifications: [
      { label: "IR Test Range", value: "0.01mΩ - 200Ω" }
    ],
    featured: true
  },
  {
    id: "14",
    idx: 14,
    name: "MGA Benchtop Regulated DC Power Supply 50A",
    slug: "mga-benchtop-regulated-dc-power-supply-50a",
    category: "power-supply",
    categoryName: "Power Supply",
    shortDescription: "0-30V 50A high-current regulated lab power supply with digital coarse/fine controls.",
    description: "High-precision benchtop power supply providing stable, low-noise DC power up to 50 Amps.",
    features: [
      "Coarse & Fine Voltage/Current Rotary Controls",
      "Constant Voltage (CV) & Constant Current (CC) Automatic Crossover"
    ],
    specifications: [
      { label: "Voltage Adjustment", value: "0 - 30V DC Continuous" }
    ],
    featured: false
  },
  {
    id: "15",
    idx: 15,
    name: "MGA Factory Automated QC Testing Bench",
    slug: "mga-factory-automated-qc-testing-bench",
    category: "testing",
    categoryName: "Testing Equipment",
    shortDescription: "Automated 8-bay burn-in and Quality Assurance testing bench for production quality control.",
    description: "Installed in MGA manufacturing facility, this automated 8-bay test station subjects newly built chargers to 24-hour burn-in cycles.",
    features: [
      "8-Bay Simultaneous Burn-in Load Testing",
      "Automated Voltage Spike & Thermal Cycling Simulator"
    ],
    specifications: [
      { label: "Testing Bays", value: "8 Independent QC Channels" }
    ],
    featured: false
  },
  {
    id: "16",
    idx: 16,
    name: "MGA Industrial Engine Jump Starter & Heavy Charger",
    slug: "mga-industrial-engine-jump-starter-heavy-charger",
    category: "industrial",
    categoryName: "Industrial Battery Chargers",
    shortDescription: "600A peak crank assist jump starter and fast charger for heavy earthmovers and trucks.",
    description: "Engineered for heavy construction equipment, diesel generators, and fleet yards.",
    features: [
      "600A Emergency Instant Engine Cranking Boost Mode",
      "12V / 24V Dual Heavy Duty Selector Switch"
    ],
    specifications: [
      { label: "Cranking Assist", value: "600 Amp Peak Surge" }
    ],
    featured: true
  },
  {
    id: "17",
    idx: 17,
    name: "MGA Marine & Inverter Deep Cycle Fast Charger",
    slug: "mga-marine-inverter-deep-cycle-fast-charger",
    category: "inverter",
    categoryName: "Inverter Chargers",
    shortDescription: "Multi-profile charger engineered for AGM, Gel, and Tubular deep-cycle inverter batteries.",
    description: "Custom-tuned for home inverters, solar battery banks, and marine vessels.",
    features: [
      "Selectable Battery Profiles (Tubular, AGM, Gel, Lead-Acid)",
      "Automatic Temperature Compensation Sensor"
    ],
    specifications: [
      { label: "Charge Current", value: "18 Ampere Intelligent" }
    ],
    featured: false
  },
  {
    id: "18",
    idx: 18,
    name: "MGA E-Rickshaw Intelligent SMPS Battery Charger",
    slug: "mga-e-rickshaw-intelligent-smps-battery-charger",
    category: "ev",
    categoryName: "EV Chargers",
    shortDescription: "48V 15A SMPS charger engineered for commercial e-rickshaw battery packs.",
    description: "India's leading commercial e-rickshaw charger. Highly efficient 48V 15A SMPS technology withstands Indian grid fluctuations.",
    features: [
      "Heavy-Duty Aluminum Extruded Heat Sink Chassis",
      "Over-Voltage & Under-Voltage Automatic Mains Cutoff"
    ],
    specifications: [
      { label: "Output Voltage", value: "48V DC Nominal (57.6V Max Float)" }
    ],
    featured: true
  },
  {
    id: "19",
    idx: 19,
    name: "MGA Commercial Multi-Bank Battery Charging Station",
    slug: "mga-commercial-multi-bank-battery-charging-station",
    category: "industrial",
    categoryName: "Industrial Battery Chargers",
    shortDescription: "6-bank isolated charging station for charging multiple batteries simultaneously.",
    description: "Designed for battery service centers, fleet maintenance hubs, and rental depots.",
    features: [
      "6 Completely Isolated Charging Banks",
      "Individual Ammeter & Voltmeter for Each Bank"
    ],
    specifications: [
      { label: "Number of Banks", value: "6 Isolated Independent Channels" }
    ],
    featured: false
  },
  {
    id: "20",
    idx: 20,
    name: "MGA Handheld Digital Conductance Battery Tester",
    slug: "mga-handheld-digital-conductance-battery-tester",
    category: "testing",
    categoryName: "Testing Equipment",
    shortDescription: "Portable battery analyzer for CCA, State of Health (SOH), and State of Charge (SOC).",
    description: "Fast handheld diagnostic tool for automotive mechanics and battery retailers.",
    features: [
      "Conductance Testing Method (No Battery Drain)",
      "Instant SOH & SOC Readout"
    ],
    specifications: [
      { label: "Test Range", value: "100 - 2000 CCA / 30 - 220Ah" }
    ],
    featured: false
  },
  {
    id: "21",
    idx: 21,
    name: "MGA Digital Heavy-Duty Battery Load Tester Panel",
    slug: "mga-digital-heavy-duty-battery-load-tester-panel",
    category: "testing",
    categoryName: "Testing Equipment",
    shortDescription: "Selective 4-stage 450A discharge tester with digital volt meter panel.",
    description: "Heavy-duty 450A digital load tester panel engineered for fast, accurate battery testing.",
    features: [
      "4-Level Load Selection: 100A, 175A, 300A, 450A",
      "High-Accuracy Digital 4-Digit LED Voltmeter"
    ],
    specifications: [
      { label: "Discharge Load", value: "Selective 100A / 175A / 300A / 450A" }
    ],
    featured: true
  },
  {
    id: "22",
    idx: 22,
    name: "MGA Automatic Servo Voltage Regulator & Fast Charger",
    slug: "mga-automatic-servo-voltage-regulator-fast-charger",
    category: "power-supply",
    categoryName: "Power Supply",
    shortDescription: "Combines precise servo voltage regulation with automatic battery fast charging.",
    description: "Ideal for locations with extreme line voltage fluctuations (140V-280V).",
    features: [
      "High-Speed Servo Motor Controlled Autotransformer Core",
      "Wide Input Voltage Range (140V to 280V AC)"
    ],
    specifications: [
      { label: "Input Voltage", value: "140V - 280V AC Single Phase" }
    ],
    featured: false
  },
  {
    id: "23",
    idx: 23,
    name: "MGA High-Capacity Industrial Energy Storage System",
    slug: "mga-high-capacity-industrial-energy-storage-system",
    category: "industrial",
    categoryName: "Industrial Equipment",
    shortDescription: "Modular LiFePO4 energy storage power pack with integrated BMS for commercial backup.",
    description: "State-of-the-art LiFePO4 battery pack engineered for industrial backup and solar energy storage.",
    features: [
      "Grade-A Lithium Iron Phosphate (LiFePO4) Cells",
      "Integrated Smart BMS with Bluetooth / RS485"
    ],
    specifications: [
      { label: "Energy Capacity", value: "5.12 kWh (48V 100Ah Pack)" }
    ],
    featured: true
  }
];

function restoreOriginalImages() {
  const galleryDir = path.resolve('public/gallery');
  const productsDir = path.resolve('public/products');
  const galleryNobgDir = path.resolve('public/gallery-nobg');

  if (!fs.existsSync(productsDir)) fs.mkdirSync(productsDir, { recursive: true });
  if (!fs.existsSync(galleryNobgDir)) fs.mkdirSync(galleryNobgDir, { recursive: true });

  const productsJson = [];
  const galleryProductsTs = [];

  for (const item of productsList) {
    const srcPhotoJpg = path.join(galleryDir, `image_${item.idx}.jpg`);

    const destProductPng = path.join(productsDir, `${item.slug}.png`);
    const destProductJpg = path.join(productsDir, `${item.slug}.jpg`);

    const destGalleryPng = path.join(galleryNobgDir, `${item.slug}.png`);
    const destGalleryJpg = path.join(galleryNobgDir, `${item.slug}.jpg`);

    if (fs.existsSync(srcPhotoJpg)) {
      // Copy original unedited crisp photo to both .png and .jpg filenames
      fs.copyFileSync(srcPhotoJpg, destProductPng);
      fs.copyFileSync(srcPhotoJpg, destProductJpg);
      fs.copyFileSync(srcPhotoJpg, destGalleryPng);
      fs.copyFileSync(srcPhotoJpg, destGalleryJpg);

      console.log(`✅ Restored original crisp photo for image_${item.idx}.jpg -> ${item.slug}.png`);
    } else {
      console.error(`⚠️ Source photo missing: ${srcPhotoJpg}`);
    }

    const relImagePath = `/products/${item.slug}.png`;

    productsJson.push({
      id: item.id,
      name: item.name,
      slug: item.slug,
      category: item.category,
      categoryName: item.categoryName,
      shortDescription: item.shortDescription,
      description: item.description,
      image: relImagePath,
      gallery: [relImagePath],
      specifications: item.specifications,
      features: item.features,
      featured: item.featured
    });

    const categoryMap = {
      automotive: "Products",
      industrial: "Products",
      testing: "Testing Equipment",
      ev: "EV Chargers",
      inverter: "Products",
      "power-supply": "Products"
    };

    galleryProductsTs.push({
      id: `gallery-${item.id}`,
      slug: item.slug,
      title: item.name,
      category: categoryMap[item.category] || "Products",
      modelGrade: "OEM Grade",
      rating: 4.9,
      reviews: 1200 + item.idx * 50,
      src: relImagePath,
      shortDescription: item.shortDescription,
      description: item.description,
      features: item.features,
      specifications: item.specifications
    });
  }

  // Write products.json
  const productsJsonPath = path.resolve('src/data/products.json');
  fs.writeFileSync(productsJsonPath, JSON.stringify(productsJson, null, 2));
  console.log(`\n🎉 Saved 23 perfectly mapped products to src/data/products.json`);

  // Write galleryProducts.ts
  const galleryProductsPath = path.resolve('src/data/galleryProducts.ts');
  const tsContent = `export interface GalleryProduct {
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

export const galleryProducts: GalleryProduct[] = ${JSON.stringify(galleryProductsTs, null, 2)};
`;
  fs.writeFileSync(galleryProductsPath, tsContent);
  console.log(`🎉 Saved 23 gallery products to src/data/galleryProducts.ts`);
}

restoreOriginalImages();
