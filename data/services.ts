export interface ServiceItem {
  id: string;
  title: string;
  category: "Authorized OEM Services" | "Component & Chip-Level" | "Spares & Distribution" | "Field & Enterprise";
  badge: string;
  shortDesc: string;
  detailedPoints: string[];
  supportedBrands: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "hp-authorized",
    title: "HP Printers & Laptop Authorized Service",
    category: "Authorized OEM Services",
    badge: "Gujarat Regional ASC",
    shortDesc: "Complete warranty and out-of-warranty servicing for HP Laptops, LaserJets, Ink Tanks, and DesignJet Plotters.",
    detailedPoints: [
      "Authorized Service Provider of HP printers and Laptops across Gujarat State",
      "Full coverage of Deskjet, Ink Tank, LaserJet MFP, and Enterprise Color LaserJets",
      "Large-format HP DesignJet Plotter diagnostics, calibration, and carriage assembly repair",
      "Certified diagnostic tools, original firmware updates, and genuine OEM parts"
    ],
    supportedBrands: ["HP", "HP DesignJet"],
    icon: "Laptop"
  },
  {
    id: "canon-asc",
    title: "Canon Authorized Service Center (ASC)",
    category: "Authorized OEM Services",
    badge: "Best Partner 2015 & 2018",
    shortDesc: "Multi-branch ASC providing certified servicing for Canon bubblejet, laser printers, scanners, and digital cameras.",
    detailedPoints: [
      "Honored with Canon Best Partner award in 2015 and 2018",
      "Dedicated ASC facilities in Surat, Junagadh, Godhra, Nashik, Aurangabad, Jalgaon, Nanded, Navi Mumbai, and Indore",
      "Bubblejet, mega-tank, multifunction laser printers, flatbed scanners, and cameras",
      "Factory-trained engineers with direct manufacturer technical escalation channels"
    ],
    supportedBrands: ["Canon"],
    icon: "Printer"
  },
  {
    id: "chip-level-repair",
    title: "Chip-Level Logic Card & Motherboard Repair",
    category: "Component & Chip-Level",
    badge: "Proprietary Lab Bench",
    shortDesc: "Precision micro-soldering, SMD component replacement, and firmware recovery for logic cards across all printer brands.",
    detailedPoints: [
      "Chip-level repairing of any logic card of any make and model of printer",
      "Oscilloscope and SMD rework station diagnostics for power circuitry and I/O controllers",
      "EEPROM flashing, firmware reprogramming, and sensor bus troubleshooting",
      "Cost-effective alternative to costly board replacements with guaranteed reliability"
    ],
    supportedBrands: ["All Makes", "HP", "Canon", "Epson", "Samsung", "Brother"],
    icon: "Cpu"
  },
  {
    id: "printhead-fuser-recondition",
    title: "Print Head & Mechanical Assembly Reconditioning",
    category: "Component & Chip-Level",
    badge: "Specialized Mechanical",
    shortDesc: "Specialized reconditioning of dot matrix print heads, laser scanner units, fuser assemblies, and stepping motors.",
    detailedPoints: [
      "Repair and recondition of any make of dot matrix print head (9-pin & 24-pin needles, coils, and jewels)",
      "Scanner assembly overhaul: mirrors, CCD/CIS sensors, belts, and inverter boards",
      "Fusing assembly refurbishment: Teflon sleeve replacement, pressure rollers, heating lamps, and thermistors",
      "Drive motor, gear train, and paper pickup roller replacements for heavy-duty commercial machines"
    ],
    supportedBrands: ["Epson", "TVSE", "WeP", "HP", "Canon", "Samsung"],
    icon: "Wrench"
  },
  {
    id: "spares-distribution",
    title: "Genuine Spares Distribution & Bulk Supply",
    category: "Spares & Distribution",
    badge: "8 States Footprint",
    shortDesc: "Authorized stockist of EPSON print heads & spares, TVSE spares distributor, supplying 1,000+ dealers nationwide.",
    detailedPoints: [
      "Authorised stockist of EPSON print heads and genuine spare components for Surat & Nashik",
      "Authorised distributor of TVSE printer spares in Pune and Surat regions",
      "Bulk quantity supply to over 1,000 dealers across Gujarat, Maharashtra, MP, Karnataka, AP, West Bengal, Delhi, and Tamil Nadu",
      "Ready stock of rollers, logic cards, power boards, toner gears, ribbons, cables, and optical assemblies"
    ],
    supportedBrands: ["Epson", "TVSE", "HP", "Canon", "Samsung", "WeP", "Brother", "Xerox"],
    icon: "Boxes"
  },
  {
    id: "enterprise-field-support",
    title: "Enterprise On-Site, Off-Site & Mobile Van Service",
    category: "Field & Enterprise",
    badge: "Mission-Critical SLA",
    shortDesc: "Full-spectrum enterprise maintenance, periodic service camps, and mobile service vans for rapid corporate field support.",
    detailedPoints: [
      "Proven corporate maintenance handler for giants like Reliance Hazira, Torrent Power, and Thermax",
      "Banking equipment support for Axis Bank, Kotak Mahindra Bank, and Chola Mandalam branches",
      "Off-site workbench diagnostics, emergency on-site engineer dispatch, and mobile service vans",
      "Specialized support for Modi Olivetti passbook printers and high-speed banking transactional printers"
    ],
    supportedBrands: ["Reliance", "Torrent Power", "Thermax", "Axis Bank", "Kotak Bank", "Chola Mandalam"],
    icon: "Truck"
  }
];
