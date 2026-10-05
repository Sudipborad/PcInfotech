export interface CompanyInfo {
  name: string;
  tagline: string;
  foundingYear: number;
  founder: {
    name: string;
    qualification: string;
    background: string;
    experience: string;
  };
  vision: string;
  corePhilosophy: string;
  groupCompanies: string[];
  headquarters: {
    address: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
    mobile: string[];
    email: string[];
  };
  workforceCount: string;
  dealerNetwork: string;
  sparesSupplyStates: string[];
  corporateClients: {
    name: string;
    location: string;
    category: string;
  }[];
  authorizedPartnerships: {
    brand: string;
    role: string;
    recognition?: string;
    territory?: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "PC Infotech Solutions",
  tagline: "Premier IT Hardware, Printer & Peripherals Enterprise Service Provider Since 1995",
  foundingYear: 1995,
  founder: {
    name: "Mr. Chetan Kumbhani",
    qualification: "B.E. (Electronics & Telecommunications), Pune University (1994)",
    background: "Technocrat with over 30 years of hands-on expertise in computer peripherals diagnosis, DMP, inkjet, laser printer, plotter repairs, and logic card chip-level troubleshooting.",
    experience: "Key executive driving hardware procurement, system diagnostics, multi-vendor partnerships, and customer support standards across PC Infotech Solutions, Vivek Infotech, and Swami Vivekanand Infocare."
  },
  vision: "To simplify the life of people by providing optimum solutions while they face problems with their computer and peripherals, enabling them to enjoy great discoveries and new technologies.",
  corePhilosophy: "Acquire knowledge first to justify your role of IT solution provider.",
  groupCompanies: [
    "PC Infotech Solutions",
    "Vivek Infotech",
    "Swami Vivekanand Infocare"
  ],
  headquarters: {
    address: "1st Floor, Somesh Apartment, 425 Narayan Peth, Nr. Patrya Maruti Chowk",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411030",
    phone: "020 24495041",
    mobile: ["+91 9822204910", "+91 9822056030"],
    email: ["svipl.pune@gmail.com", "chetan.kumbhani@ivek.com"]
  },
  workforceCount: "100+ Hardware & Support Engineers",
  dealerNetwork: "1,000+ IT Dealers Across India",
  sparesSupplyStates: [
    "Gujarat",
    "Maharashtra",
    "Madhya Pradesh",
    "Karnataka",
    "Andhra Pradesh",
    "West Bengal",
    "Delhi",
    "Tamil Nadu"
  ],
  corporateClients: [
    { name: "Reliance Industries Ltd", location: "Hazira, Gujarat", category: "Industrial & Petrochemical" },
    { name: "Torrent Power Ltd", location: "Bhiwandi & Surat", category: "Power & Utilities" },
    { name: "Thermax India Ltd", location: "Pune, Maharashtra", category: "Energy & Environment Engineering" },
    { name: "Axis Bank", location: "Multi-branch Network", category: "Banking & Financial Services" },
    { name: "Kotak Mahindra Bank", location: "Multi-branch Network", category: "Banking & Financial Services" },
    { name: "Cholamandalam Investment and Finance", location: "Regional Operations", category: "NBFC & Financial Services" }
  ],
  authorizedPartnerships: [
    {
      brand: "HP",
      role: "Authorized Service Provider for HP Printers & Laptops",
      territory: "Gujarat State (Ellisbridge Ahmedabad Regional ASC & state network)"
    },
    {
      brand: "Canon",
      role: "Authorized Service Center (ASC)",
      recognition: "Awarded Best Partner in 2015 & 2018",
      territory: "Multi-branch network across Surat, Junagadh, Godhra, Nashik, Aurangabad, Jalgaon, Nanded, Navi Mumbai, Indore"
    },
    {
      brand: "Epson",
      role: "Authorized Spare Stockist & Technical Service Provider",
      territory: "Surat & Nashik Region (Print heads & genuine components)"
    },
    {
      brand: "TVS Electronics",
      role: "Authorized Service Center & Spares Distributor",
      territory: "Pune, Surat & Western India"
    },
    {
      brand: "Redington",
      role: "Authorized Service Partner",
      territory: "Western Region"
    },
    {
      brand: "WeP",
      role: "Peripherals & Dot Matrix Support Center",
      territory: "Western Region"
    },
    {
      brand: "Samsung",
      role: "Laser Printer & Peripherals Service Support",
      territory: "Multi-City"
    }
  ]
};
