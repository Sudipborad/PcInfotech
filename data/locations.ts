export interface ServiceCenter {
  id: string;
  name: string;
  brandFocus: string[];
  unitEntity: string;
  city: string;
  state: "Gujarat" | "Maharashtra" | "Madhya Pradesh";
  address: string;
  pincode?: string;
  phones: string[];
  emails?: string[];
  establishedYear: number;
  establishedMonth?: string;
  areaSqFt: number;
  tenure: "Ownership" | "Rented";
  staffCount: number;
  coveredAreas: string[];
  coordinates: [number, number]; // [lat, lng] for OpenStreetMap
  mapsQuery: string; // Exact venue & address query for Google Maps navigation
  specialization: string;
}

export const getDirectionsUrl = (loc: ServiceCenter): string => {
  const query = loc.mapsQuery || `${loc.address}, ${loc.city}, ${loc.state} ${loc.pincode || ""}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query.trim())}`;
};

export const serviceCentersData: ServiceCenter[] = [
  {
    id: "pune-hq",
    name: "Pune Head Office & Technical Center",
    brandFocus: ["TVSE", "HP", "Multi-brand"],
    unitEntity: "PC Infotech Solutions",
    city: "Pune",
    state: "Maharashtra",
    address: "1st Floor, Somesh Appartment, 425, Narayan Peth, Nr. Patrya Maruti Chowk",
    pincode: "411030",
    phones: ["020 24495041", "+91 9822204910", "+91 9822056030"],
    emails: ["svipl.pune@gmail.com", "chetan.kumbhani@ivek.com"],
    establishedYear: 2005,
    areaSqFt: 800,
    tenure: "Ownership",
    staffCount: 6,
    coveredAreas: ["Pune", "Aurangabad", "Kolhapur", "Satara", "Lonavala", "Rajgurunagar", "Narayangaon"],
    coordinates: [18.5173, 73.8502],
    mapsQuery: "Somesh Apartment, 425, Narayan Peth, Near Patrya Maruti Chowk, Pune, Maharashtra 411030",
    specialization: "Authorized Services Center & Spares Distributor of TVSE spares. High-end chip level logic card repairs."
  },
  {
    id: "ahmedabad-hp",
    name: "Ahmedabad HP Authorized Service Centre",
    brandFocus: ["HP"],
    unitEntity: "PC Infotech Solutions",
    city: "Ahmedabad",
    state: "Gujarat",
    address: "405, Devnandan Mall, Ashram Road, Ellisbridge, Nr. M.J. Library",
    pincode: "380006",
    phones: ["0265 2314265", "+91 9824751569"],
    establishedYear: 2019,
    areaSqFt: 1600,
    tenure: "Rented",
    staffCount: 16,
    coveredAreas: ["Ahmedabad", "Gandhinagar", "Mahesana", "Palanpur", "Sabarkantha", "Surendranagar"],
    coordinates: [23.0238, 72.5711],
    mapsQuery: "Devnandan Mall, Ashram Road, Ellisbridge, Opp M.J. Library, Ahmedabad, Gujarat 380006",
    specialization: "Dedicated Authorized Service Centre for HP Laptops, Printers, Plotters, and Commercial Scanners."
  },
  {
    id: "surat-branch",
    name: "Surat ASC Canon & Spares Stockist",
    brandFocus: ["Canon", "EPSON", "TVSE"],
    unitEntity: "PC Infotech Solutions",
    city: "Surat",
    state: "Gujarat",
    address: "314, Jolly Plaza, Athwa Gate, Nr. Jain Temple",
    pincode: "395001",
    phones: ["0261 2464011", "0261 2464012", "+91 9824751549", "+91 9824751690", "+91 9824751589"],
    establishedYear: 2000,
    areaSqFt: 900,
    tenure: "Ownership",
    staffCount: 6,
    coveredAreas: ["Surat", "Navsari", "Bharuch", "Ankleshwar", "Valsad", "Vapi", "Vyara"],
    coordinates: [21.1843, 72.8122],
    mapsQuery: "Jolly Plaza, Athwa Gate, Surat, Gujarat 395001",
    specialization: "Canon ASC, Authorised Stockist of EPSON print heads & spares, Authorised Distributor of TVSE printer spares."
  },
  {
    id: "baroda-founding",
    name: "Baroda Founding Center",
    brandFocus: ["Multi-brand", "HP", "Canon"],
    unitEntity: "PC Infotech Solutions",
    city: "Baroda",
    state: "Gujarat",
    address: "E, 1/210 Kashi Vishweshwar Township, Jetalpur Road",
    pincode: "390007",
    phones: ["0265 2314265", "0265 2323038", "+91 9824751569"],
    establishedYear: 1995,
    areaSqFt: 1000,
    tenure: "Ownership",
    staffCount: 6,
    coveredAreas: ["Baroda (Vadodara)", "Anand", "Nadiad", "Central Gujarat"],
    coordinates: [22.3121, 73.1712],
    mapsQuery: "Kashi Vishweshwar Township, Jetalpur Road, Vadodara, Gujarat 390007",
    specialization: "Original founding headquarters (1995). Logic card repair, fusing assembly, laser printer motor reconditioning."
  },
  {
    id: "nashik-canon",
    name: "Nashik ASC Canon (Vivek Infotech)",
    brandFocus: ["Canon", "EPSON"],
    unitEntity: "Vivek Infotech",
    city: "Nashik",
    state: "Maharashtra",
    address: "Plot no 28, Devkinandan Shopping Complex, Nr. Sharma Mangal Karyalaya, Deepali Nagar, Mumbai Naka",
    pincode: "422009",
    phones: ["+91 9850888180", "+91 9552501814"],
    emails: ["chirag.patoliya@ivekv.com"],
    establishedYear: 2012,
    areaSqFt: 800,
    tenure: "Rented",
    staffCount: 10,
    coveredAreas: ["Malegaon", "Manmad", "Shahada", "Dhule", "Nandurbar", "Sirpur", "Sinnar", "Sangamner"],
    coordinates: [19.9818, 73.7842],
    mapsQuery: "Devkinandan Shopping Complex, Deepali Nagar, Mumbai Naka, Nashik, Maharashtra 422009",
    specialization: "Canon ASC and regional spare stockist for North Maharashtra district network."
  },
  {
    id: "aurangabad-canon",
    name: "Aurangabad Canon Authorised Service Centre",
    brandFocus: ["Canon"],
    unitEntity: "PC Infotech Network",
    city: "Aurangabad",
    state: "Maharashtra",
    address: "Plot no 80, Abhinav Housing Society, Maya Nagar, N2, Cidco",
    pincode: "431003",
    phones: ["+91 9881244030", "+91 8390448580"],
    establishedYear: 2020,
    establishedMonth: "January",
    areaSqFt: 1100,
    tenure: "Rented",
    staffCount: 6,
    coveredAreas: ["Aurangabad (Chhatrapati Sambhajinagar)", "Jalna", "Beed Corridor"],
    coordinates: [19.8862, 75.3628],
    mapsQuery: "Abhinav Housing Society, Maya Nagar, N2 Cidco, Aurangabad, Maharashtra 431003",
    specialization: "High-volume Canon authorized printer & multi-function peripheral repairs."
  },
  {
    id: "junagadh-canon",
    name: "Junagadh ASC Canon",
    brandFocus: ["Canon"],
    unitEntity: "PC Infotech Solutions",
    city: "Junagadh",
    state: "Gujarat",
    address: "121, Shikhar Complex, Jayshree Cinema Road, Kalwa Chowk",
    pincode: "362001",
    phones: ["0281 2466891", "+91 9824751579", "+91 9824751670"],
    establishedYear: 2002,
    areaSqFt: 600,
    tenure: "Ownership",
    staffCount: 5,
    coveredAreas: ["Junagadh", "Manavadar", "Keshod", "Bantva", "Veraval", "Porbandar", "Amreli", "Surendranagar", "Upleta", "Dhoraji", "Jetpur", "Una", "Kodinar", "Diu"],
    coordinates: [21.5235, 70.4638],
    mapsQuery: "Shikhar Complex, Jayshree Cinema Road, Kalwa Chowk, Junagadh, Gujarat 362001",
    specialization: "Saurashtra coastal & southern peninsula regional service center covering 14 municipal territories."
  },
  {
    id: "rajkot-center",
    name: "Rajkot Regional Technical Center",
    brandFocus: ["HP", "Canon", "Multi-brand"],
    unitEntity: "PC Infotech Solutions",
    city: "Rajkot",
    state: "Gujarat",
    address: "304, Sorath Plaza, 2/10 Bhaktinagar Railway Station Plot, Opp. Dattatreya Hospital",
    pincode: "360002",
    phones: ["0281 2466891", "+91 9824751569"],
    establishedYear: 2019,
    areaSqFt: 450,
    staffCount: 8,
    coveredAreas: ["Rajkot", "Morbi Industrial Belt", "Jamnagar", "Gondal"],
    coordinates: [22.2818, 70.8035],
    tenure: "Rented",
    mapsQuery: "Sorath Plaza, Bhaktinagar Station Plot, Opp Dattatreya Hospital, Rajkot, Gujarat 360002",
    specialization: "Rapid-dispatch turnaround center for enterprise & commercial printing hardware."
  },
  {
    id: "godhra-canon",
    name: "Godhra ASC Canon",
    brandFocus: ["Canon"],
    unitEntity: "PC Infotech Solutions",
    city: "Godhra",
    state: "Gujarat",
    address: "Shop no. F/5, Platinum Plaza, Opp. Bus Stand, Garden Road",
    pincode: "389001",
    phones: ["+91 9824038910", "+91 9824028910"],
    establishedYear: 2016,
    establishedMonth: "April",
    areaSqFt: 600,
    tenure: "Rented",
    staffCount: 3,
    coveredAreas: ["Dahod", "Panchmahal", "Kheda", "Nadiad", "Khambhat", "Meghraj"],
    coordinates: [22.7761, 73.6192],
    mapsQuery: "Platinum Plaza, Opp Bus Stand, Garden Road, Godhra, Gujarat 389001",
    specialization: "Panchmahal and Eastern Gujarat border commercial & institutional printer support."
  },
  {
    id: "jalgaon-canon",
    name: "Jalgaon ASC Canon",
    brandFocus: ["Canon"],
    unitEntity: "PC Infotech Network",
    city: "Jalgaon",
    state: "Maharashtra",
    address: "Shop no. 169, Golani Market, Nr. Railway Station",
    pincode: "425001",
    phones: ["+91 9552508218"],
    establishedYear: 2017,
    establishedMonth: "June",
    areaSqFt: 350,
    tenure: "Rented",
    staffCount: 3,
    coveredAreas: ["Jalgaon", "Bhusawal", "Chalisgaon", "Amalner", "Varangaon"],
    coordinates: [21.0090, 75.5648],
    mapsQuery: "Golani Market, Near Railway Station, Jalgaon, Maharashtra 425001",
    specialization: "Central railway corridor service post for Canon inkjets, lasers, and passbook printers."
  },
  {
    id: "nanded-canon",
    name: "Nanded ASC Canon (Vivek Infotech)",
    brandFocus: ["Canon"],
    unitEntity: "Vivek Infotech",
    city: "Nanded",
    state: "Maharashtra",
    address: "Shop no. 31, Guru Sai Appartment, Nr. Shyam Talkies, Vazirabad",
    pincode: "431601",
    phones: ["+91 9552501811"],
    establishedYear: 2016,
    establishedMonth: "February",
    areaSqFt: 400,
    tenure: "Rented",
    staffCount: 3,
    coveredAreas: ["Nanded", "Parbhani", "Latur", "Beed", "Hingoli"],
    coordinates: [19.1555, 77.3155],
    mapsQuery: "Guru Sai Apartment, Near Shyam Talkies, Vazirabad, Nanded, Maharashtra 431601",
    specialization: "Marathwada south region coverage for Canon printers, dot matrix units, and POS equipment."
  },
  {
    id: "navi-mumbai",
    name: "Navi Mumbai ASC Canon",
    brandFocus: ["Canon"],
    unitEntity: "PC Infotech Solutions",
    city: "Navi Mumbai",
    state: "Maharashtra",
    address: "Shop No. 12, Ground Floor, Sector 17, Vashi",
    pincode: "400703",
    phones: ["+91 9822204910"],
    establishedYear: 2016,
    areaSqFt: 450,
    tenure: "Rented",
    staffCount: 3,
    coveredAreas: ["Navi Mumbai", "Vashi", "Belapur", "Panvel", "Thane Corridor"],
    coordinates: [19.0758, 72.9984],
    mapsQuery: "Sector 17, Vashi, Navi Mumbai, Maharashtra 400703",
    specialization: "Mumbai Metropolitan Region enterprise on-site & off-site printing solutions."
  },
  {
    id: "indore-canon",
    name: "Indore ASC Canon (Swami Vivekanand Infocare)",
    brandFocus: ["Canon"],
    unitEntity: "Swami Vivekanand Infocare",
    city: "Indore",
    state: "Madhya Pradesh",
    address: "B-97, MIG Colony, AB Road",
    pincode: "452001",
    phones: ["+91 9822204910", "020 24495041"],
    establishedYear: 2018,
    establishedMonth: "August",
    areaSqFt: 800,
    tenure: "Rented",
    staffCount: 4,
    coveredAreas: ["Indore", "Ujjain", "Dewas", "Pithampur Industrial Area"],
    coordinates: [22.7386, 75.8856],
    mapsQuery: "B-97, MIG Colony, AB Road, Indore, Madhya Pradesh 452001",
    specialization: "Madhya Pradesh hub office: ASC Canon, commercial plotter service, and regional warranty repair."
  }
];

export const statesList = ["All States", "Gujarat", "Maharashtra", "Madhya Pradesh"] as const;
export const brandList = ["All Brands", "Canon", "HP", "EPSON", "TVSE"] as const;
