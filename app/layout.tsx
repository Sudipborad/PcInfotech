import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B4EA2",
};

export const metadata: Metadata = {
  title: "PC Infotech Solutions | Authorized Service Provider (HP, Canon, TVSE)",
  description:
    "Founded in 1995 by technocrat Chetan Kumbhani. Authorized HP and Canon service center operating 13 hubs across Gujarat, Maharashtra, and MP with over 100+ hardware engineers and spares distribution across 8 states.",
  keywords: [
    "PC Infotech Solutions",
    "HP Authorized Service Provider Gujarat",
    "Canon Authorized Service Center",
    "Pune Narayan Peth printer repair",
    "Ahmedabad Ashram Road HP service center",
    "Surat Jolly Plaza Canon service center",
    "Logic card chip level repair",
    "Chetan Kumbhani",
    "Vivek Infotech",
    "Swami Vivekanand Infocare",
    "TVSE spares distributor",
    "Epson print head stockist"
  ],
  authors: [{ name: "PC Infotech Solutions" }],
  icons: {
    icon: "/PCIS_logo_light_mode.svg",
    shortcut: "/PCIS_logo_light_mode.svg",
    apple: "/PCIS_logo_light_mode.svg",
  },
  openGraph: {
    title: "PC Infotech Solutions — Authorized Enterprise IT & Printer Services",
    description:
      "Direct network of 13 certified service centers in Western India, 100+ hardware and support engineers, handling mission-critical printer hardware since 1995.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-800 min-h-screen selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
