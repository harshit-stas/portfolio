import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harshitraman.dev"),
  title: "Harshit Raman — Data Analyst, Data Systems & Reporting",
  description:
    "Data Analyst with a Biostatistics background who builds the reporting systems, CRM infrastructure, and data-quality processes operations teams run on. SQL, Python, Power BI, Excel, Zoho CRM, statistical analysis.",
  keywords: [
    "Data Analyst",
    "Business Analyst",
    "BI Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Excel",
    "Data Analytics",
    "Business Intelligence",
    "Data Visualization",
    "Data Quality",
    "ETL",
    "Data Transformation",
    "Data Validation",
    "Statistics",
  ],
  authors: [{ name: "Harshit Raman" }],
  openGraph: {
    title: "Harshit Raman — Data Analyst, Data Systems & Reporting",
    description:
      "A data professional who builds the reporting systems, CRM infrastructure, and data-quality processes operations teams run on.",
    type: "website",
    url: "https://harshitraman.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Raman — Data Analyst, Data Systems & Reporting",
    description:
      "A data professional who builds the reporting systems, CRM infrastructure, and data-quality processes operations teams run on.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📊</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
