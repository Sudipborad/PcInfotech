export interface MilestoneEvent {
  year: string;
  title: string;
  category: "Award" | "Partnership" | "Network Expansion" | "Enterprise Milestone";
  description: string;
  details: string;
  stat?: string;
}

export const achievementsData: MilestoneEvent[] = [
  {
    year: "1995",
    title: "Foundation by Technocrat Chetan Kumbhani",
    category: "Enterprise Milestone",
    description: "Founded in Baroda, Gujarat with an initial team of 4 engineers and 200 service calls handled in the first year.",
    details: "Started with a vision to simplify technology adoption and peripheral servicing, grounded in Chetan Kumbhani's B.E. Telecom degree from Pune University.",
    stat: "4 Engineers • 200 Calls"
  },
  {
    year: "2000",
    title: "Surat Commercial Hub & Athwagate Facility",
    category: "Network Expansion",
    description: "Established owned facility at Jolly Plaza, Athwagate, Surat (900 sq.ft) with an expanding team of 6 engineers.",
    details: "Expanded operational capacity to 600 annual calls, establishing PC Infotech as South Gujarat's premier printer specialist.",
    stat: "600 Annual Calls"
  },
  {
    year: "2005 - 2006",
    title: "Interstate Expansion to Pune HQ & TVSE Distribution",
    category: "Partnership",
    description: "Purchased 800 sq.ft facility at Narayan Peth, Pune, establishing company headquarters and TVSE authorized spares distributorship.",
    details: "Parallel expansion into Nashik. Workforce grew to 14 engineers handling 1,200 annual service calls across Maharashtra and Gujarat.",
    stat: "1,200 Service Calls"
  },
  {
    year: "2015",
    title: "Canon Best Partner Award",
    category: "Award",
    description: "Conferred the prestigious 'Best Partner Award' by Canon for outstanding service delivery, technical excellence, and customer satisfaction.",
    details: "Recognized as a leading Authorized Service Center operating across Western India with exceptional turnaround metrics.",
    stat: "Canon Best Partner 2015"
  },
  {
    year: "2016",
    title: "Tri-State Acceleration & 1,800 Annual Calls",
    category: "Network Expansion",
    description: "Launched dedicated service operations in Navi Mumbai, Godhra (Garden Road), and Nanded (Vazirabad).",
    details: "Field service capabilities expanded to include mobile service vans and corporate on-site camps for enterprise accounts.",
    stat: "20 Staff • 1,800 Calls"
  },
  {
    year: "2018",
    title: "Canon Best Partner Award & MP Expansion",
    category: "Award",
    description: "Won second Canon Best Partner Award (2018) while inaugurating Indore center under Swami Vivekanand Infocare.",
    details: "Annual calls surged to 2,500 with technical manpower reaching 41 engineers. Spares distribution expanded across 8 Indian states.",
    stat: "Canon Best Partner 2018"
  },
  {
    year: "2019 - 2020",
    title: "HP Authorized Hub in Ahmedabad & Aurangabad Center",
    category: "Partnership",
    description: "Inaugurated state-of-the-art 1,600 sq.ft HP ASC at Ashram Road, Ellisbridge, Ahmedabad, staffing 16 specialized engineers for HP Laptops and Printers.",
    details: "Opened 1,100 sq.ft center in Aurangabad. Entire group network surpassed 100+ hardware and support engineers serving over 1,000 dealers nationwide.",
    stat: "100+ Technical Engineers"
  }
];
