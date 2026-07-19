import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CalendlyBadge } from "@/components/calendly/CalendlyBadge";
import { CalendlyScript } from "@/components/calendly/CalendlyScript";
import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
import { RealScoutScript } from "@/components/realscout/RealScoutScript";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Homes for Sale in Las Vegas, NV | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description: `${site.shortName} at ${site.brokerage}. Browse Las Vegas homes for sale with live MLS inventory and Opportunity Zone guidance. Call ${site.phone.display}.`,
  openGraph: {
    title: `Homes for Sale in Las Vegas | ${site.shortName}`,
    description: site.tagline,
    url: site.url,
    siteName: site.brand,
    type: "website",
    images: [{ url: "/realty/heroes/hero-homes-for-sale.jpg" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh font-sans antialiased">
        <RealScoutScript />
        <CalendlyScript />
        <JsonLd data={localBusinessSchema()} />
        <div className="flex min-h-dvh flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CalendlyBadge url={site.calendlyUrl} />
      </body>
    </html>
  );
}
