import type { Metadata } from "next";
import HomePage from "../page";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Homes for Sale in Las Vegas, NV | Current Listings & Market Data",
  description:
    "Browse homes for sale in Las Vegas, NV with up-to-date market data. Live MLS inventory with Dr. Jan Duffy, BHHS Nevada Properties.",
  path: "/las-vegas-homes-for-sale",
  absoluteTitle: true,
});

export default function LasVegasHomesForSalePage() {
  return <HomePage />;
}
