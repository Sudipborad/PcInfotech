export interface ServiceItem {
  id: string;
  title: string;
  category: "Authorized OEM Services" | "Component & Chip-Level" | "Spares & Distribution" | "Field & Enterprise";
  badge: string;
  detailedPoints: string[];
  supportedBrands: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "hp-authorized",
    title: "HP Printers & Laptop Service",
    category: "Authorized OEM Services",
    badge: "Gujarat Regional ASC",
    detailedPoints: [
      "Authorized warranty & out-of-warranty service across Gujarat",
      "Coverage for HP Laptops, LaserJets, Ink Tanks & DesignJet Plotters",
      "Certified diagnostic tools & original OEM replacement parts"
    ],
    supportedBrands: ["HP", "HP DesignJet"],
    icon: "Laptop"
  },
  {
    id: "canon-asc",
    title: "Canon Authorized Service (ASC)",
    category: "Authorized OEM Services",
    badge: "Best Partner 2015 & 2018",
    detailedPoints: [
      "Two-time Canon Best Partner awardee (2015 & 2018)",
      "Direct ASC facilities in Surat, Junagadh, Godhra, Nashik, Aurangabad, Jalgaon, Nanded, Indore",
      "Bubblejet, mega-tank, multifunction lasers, scanners & cameras"
    ],
    supportedBrands: ["Canon"],
    icon: "Printer"
  },
  {
    id: "chip-level-repair",
    title: "Chip-Level Logic Card Repair",
    category: "Component & Chip-Level",
    badge: "Specialized Lab",
    detailedPoints: [
      "Micro-soldering & SMD component repair for all printer makes",
      "Oscilloscope testing for power circuitry & I/O controllers",
      "EEPROM flashing, firmware reprogramming & logic board diagnostics"
    ],
    supportedBrands: ["All Makes", "HP", "Canon", "Epson", "Samsung", "Brother"],
    icon: "Cpu"
  },
  {
    id: "printhead-fuser-recondition",
    title: "Print Head & Mechanical Assemblies",
    category: "Component & Chip-Level",
    badge: "Precision Mechanical",
    detailedPoints: [
      "Reconditioning of 9-pin & 24-pin dot matrix print heads",
      "Fusing assembly rebuilding: Teflon sleeves, pressure rollers & thermistors",
      "Laser scanner unit overhaul, drive motors & pickup mechanism"
    ],
    supportedBrands: ["Epson", "TVSE", "WeP", "HP", "Canon", "Samsung"],
    icon: "Wrench"
  },
  {
    id: "spares-distribution",
    title: "Genuine Spares Distribution",
    category: "Spares & Distribution",
    badge: "8 States Footprint",
    detailedPoints: [
      "Authorized stockist for EPSON print heads & TVSE printer spares",
      "Bulk quantity supply to 1,000+ dealers across 8 Indian states",
      "Ready inventory of logic boards, rollers, ribbons, cables & optical units"
    ],
    supportedBrands: ["Epson", "TVSE", "HP", "Canon", "Samsung", "WeP", "Brother", "Xerox"],
    icon: "Boxes"
  },
  {
    id: "enterprise-field-support",
    title: "Enterprise On-Site & Mobile Vans",
    category: "Field & Enterprise",
    badge: "Corporate SLA",
    detailedPoints: [
      "Corporate SLA handler: Reliance Hazira, Torrent Power, Thermax",
      "Banking equipment support: Axis Bank, Kotak Mahindra Bank, Chola",
      "Rapid on-site engineer dispatch, service camps & mobile vans"
    ],
    supportedBrands: ["Reliance", "Torrent Power", "Thermax", "Axis Bank", "Kotak Bank", "Chola"],
    icon: "Truck"
  }
];
