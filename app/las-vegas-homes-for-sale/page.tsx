import type { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: {
    absolute: "Homes for Sale in Las Vegas, NV | Current Listings & Market Data",
  },
  description:
    "Browse homes for sale in Las Vegas, NV with up-to-date market data. Live MLS inventory with Dr. Jan Duffy, BHHS Nevada Properties.",
  alternates: { canonical: "/las-vegas-homes-for-sale" },
};

export default function LasVegasHomesForSalePage() {
  return <HomePage />;
}
