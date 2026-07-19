import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
import { RealScoutScript } from "@/components/realscout/RealScoutScript";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | ${site.shortName}, REALTOR® | Las Vegas & OZ Homes`,
    template: `%s | ${site.brand}`,
  },
  description: `${site.shortName} at ${site.brokerage}. Buy, sell, and invest in Las Vegas Opportunity Zone and residential real estate. Call ${site.phone.display}.`,
  openGraph: {
    title: `${site.brand} | ${site.shortName}`,
    description: site.tagline,
    url: site.url,
    siteName: site.brand,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <RealScoutScript />
        <JsonLd data={localBusinessSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
