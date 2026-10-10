import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B4EA2",
};

export const metadata: Metadata = {
  title: "PC Infotech Solutions | HP & Canon Authorised Service • 13 Hubs • Spares Store",
  description:
    "Two trusted brands. One reliable support. Founded in 1995 by Mr. Chetan Kumbhani. Authorized HP & Canon service network across Gujarat, Rajasthan, Maharashtra & Madhya Pradesh with 13 direct service hubs and Vivek Infotech online parts store.",
  keywords: [
    "PC Infotech Solutions",
    "HP Authorized Service Centre",
    "Canon Authorized Service Centre",
    "Pune Narayan Peth printer repair",
    "Ahmedabad HP service center",
    "Surat Canon service center",
    "Indore Canon service center",
    "Vivek Infotech online store",
    "vivekinfotech.catalog.to",
    "Printer spare parts online",
    "Print head EPSON Canon HP",
    "Logic card chip level repair",
    "Chetan Kumbhani"
  ],
  authors: [{ name: "PC Infotech Solutions" }],
  icons: {
    icon: "/LOGOS/pcis-icon.svg",
    shortcut: "/LOGOS/pcis-icon.svg",
    apple: "/LOGOS/pcis-icon.svg",
  },
  openGraph: {
    title: "PC Infotech Solutions — One Trust. Two Brands. Four States.",
    description:
      "Direct network of 13 certified service hubs in Western India, 100+ hardware specialists, chip-level labs, and official online spare parts store.",
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
