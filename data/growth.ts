export interface GrowthMilestone {
  year: number;
  centerMilestone: string;
  manpower: number;
  calls: number;
  centersCount: number;
  cumulativeSqFt: number;
  highlights: string;
}

export const growthData: GrowthMilestone[] = [
  {
    year: 1995,
    centerMilestone: "Baroda",
    manpower: 4,
    calls: 200,
    centersCount: 1,
    cumulativeSqFt: 1000,
    highlights: "Founded in Baroda (1,000 sq ft ownership) by Chetan Kumbhani. Core focus on printer repairs and peripheral diagnostics."
  },
  {
    year: 2000,
    centerMilestone: "Surat",
    manpower: 8,
    calls: 600,
    centersCount: 2,
    cumulativeSqFt: 1900,
    highlights: "Expansion to Surat (Athwagate, 900 sq ft ownership). Emerged as major printer repair partner in South Gujarat."
  },
  {
    year: 2006,
    centerMilestone: "Pune & Nasik",
    manpower: 14,
    calls: 1200,
    centersCount: 4,
    cumulativeSqFt: 3500,
    highlights: "Crossed state borders into Maharashtra: Pune (Somesh Appt HQ, 800 sq ft) and Nashik. TVSE authorized spares partnership."
  },
  {
    year: 2016,
    centerMilestone: "Mumbai & Regional Hubs",
    manpower: 20,
    calls: 1800,
    centersCount: 7,
    cumulativeSqFt: 5850,
    highlights: "Established Navi Mumbai, Godhra, and Nanded centers. Extended service camps and on-site support to major enterprises."
  },
  {
    year: 2018,
    centerMilestone: "Indore (MP Expansion)",
    manpower: 41,
    calls: 2500,
    centersCount: 9,
    cumulativeSqFt: 7000,
    highlights: "Entered Madhya Pradesh with Indore center (Swami Vivekanand Infocare). Canon Best Partner award in 2015 and 2018."
  },
  {
    year: 2020,
    centerMilestone: "Ahmedabad HP Hub & Aurangabad",
    manpower: 70,
    calls: 3800,
    centersCount: 13,
    cumulativeSqFt: 9700,
    highlights: "Inauguration of flagship 1,600 sq ft HP ASC in Ellisbridge Ahmedabad and 1,100 sq ft center in Aurangabad. Workforce exceeding 100+ hardware and support engineers across group companies."
  }
];

export const keyImpactMetrics = [
  {
    label: "Annual Service Calls Handled",
    value: "2,500+",
    source: "2,500 calls recorded in 2018 milestone (up from 200 in 1995)",
    icon: "Headset"
  },
  {
    label: "Hardware & Support Engineers",
    value: "100+",
    source: "Technical workforce deployed across offices & field teams",
    icon: "Users"
  },
  {
    label: "IT Dealer Network Served",
    value: "1,000+",
    source: "Reputed service provider of printer repairs for 1,000+ dealers in India",
    icon: "Network"
  },
  {
    label: "States Spares Supply Footprint",
    value: "8 States",
    source: "Gujarat, Maharashtra, MP, Karnataka, AP, WB, Delhi, Tamil Nadu",
    icon: "MapPin"
  },
  {
    label: "Verified Service Centers",
    value: "13 Hubs",
    source: "Directly operated branches across Gujarat, Maharashtra & MP",
    icon: "Building2"
  },
  {
    label: "Years of Industry Leadership",
    value: "30+ Years",
    source: "Founded in 1995 by B.E. Telecom graduate Chetan Kumbhani",
    icon: "CalendarCheck2"
  }
];
