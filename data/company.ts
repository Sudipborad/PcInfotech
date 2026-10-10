export interface CompanyInfo {
  name: string;
  tagline: string;
  brandPromise: string;
  fourStatesTagline: string;
  foundingYear: number;
  onlineStoreUrl: string;
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
  localBranches: {
    name: string;
    role: string;
    location: string;
  }[];
  operatingStates: string[];
  networkBranchesByState: {
    stateCode: string;
    stateName: string;
    brandFocus: string;
    cities: string[];
  }[];
  alsoAvailable: string[];
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
  brandPromise: "Two Trusted Brands. One Reliable Support.",
  fourStatesTagline: "One Trust. Two Brands. Four States. We've Got You Covered.",
  foundingYear: 1995,
  onlineStoreUrl: "https://vivekinfotech.catalog.to/",
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
    "Vivek Infotech (Online Store: vivekinfotech.catalog.to)",
    "Swami Vivekanand Infocare"
  ],
  headquarters: {
    address: "1st Floor, Somesh Apartment, 425 Narayan Peth, Nr. Patrya Maruti Chowk",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411030",
    phone: "020 24495041",
    mobile: ["+91 9822204910", "+91 9822056030", "+91 9160003112"],
    email: ["svipl.pune@gmail.com", "chetan.kumbhani@ivek.com", "Vivekinfotech@ivekv.com"]
  },
  localBranches: [
    {
      name: "Pune Head Office & Technical Center",
      role: "Central Operations & High-End Lab",
      location: "425 Narayan Peth, Nr. Patrya Maruti Chowk, Pune"
    },
    {
      name: "Pimpri (Pune) Canon Authorised Service Centre",
      role: "Local Pune Canon ASC Branch",
      location: "Pimpri, Pune, Maharashtra"
    }
  ],
  operatingStates: [
    "Gujarat",
    "Rajasthan",
    "Maharashtra",
    "Madhya Pradesh"
  ],
  networkBranchesByState: [
    {
      stateCode: "GJ",
      stateName: "Gujarat",
      brandFocus: "HP & Canon Authorised Service Centre",
      cities: [
        "Vapi",
        "Surat",
        "Ankleshwar",
        "Baroda (Vadodara)",
        "Godhara",
        "Ahmedabad",
        "Gandhinagar",
        "Rajkot",
        "Morbi",
        "Junagadh",
        "Adipur",
        "Jamnagar"
      ]
    },
    {
      stateCode: "MH",
      stateName: "Maharashtra",
      brandFocus: "HP & Canon Authorised Service Centre",
      cities: [
        "Pune (Narayan Peth HQ)",
        "Pimpri (Pune Canon ASC)",
        "Nashik",
        "Chh. Sambhajinagar",
        "Jalgaon",
        "Ahilyanagar"
      ]
    },
    {
      stateCode: "MP",
      stateName: "Madhya Pradesh",
      brandFocus: "HP & Canon Authorised Service Centre",
      cities: [
        "Indore",
        "Bhopal",
        "Gwalior",
        "Jabalpur"
      ]
    },
    {
      stateCode: "RJ",
      stateName: "Rajasthan",
      brandFocus: "HP Authorised Service Network",
      cities: [
        "Jaipur",
        "Udaipur",
        "Alwar"
      ]
    }
  ],
  alsoAvailable: [
    "Printer Sales — All Leading Brands (HP, Canon, EPSON, TVS-E)",
    "Bulk Printer Spare Parts Selling with Fast Courier Dispatch",
    "Genuine OEM & Certified Compatible Replacement Parts",
    "Parts Supply for All Brands (Paper Pickups, Fusers, Motors, Formatter Cards)",
    "Dedicated Support for IT Dealers, Corporates & Service Centers",
    "Official Online Store with Direct Ordering: vivekinfotech.catalog.to"
  ],
  workforceCount: "100+ Hardware & Support Engineers",
  dealerNetwork: "1,000+ IT Dealers Across India",
  sparesSupplyStates: [
    "Gujarat",
    "Maharashtra",
    "Madhya Pradesh",
    "Rajasthan",
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
      territory: "Serving in Gujarat, Rajasthan, Maharashtra & Madhya Pradesh"
    },
    {
      brand: "Canon",
      role: "Authorized Service Center (ASC) — 2x Best Partner Winner",
      recognition: "Awarded Best Partner in 2015 & 2018",
      territory: "Serving in Gujarat & Maharashtra (Surat, Pimpri Pune, Junagadh, Godhara, Nashik, Chh. Sambhajinagar, Jalgaon, Indore)"
    },
    {
      brand: "Epson",
      role: "Authorized Spare Stockist & Technical Service Provider",
      territory: "Western Region (Print heads & genuine components)"
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
