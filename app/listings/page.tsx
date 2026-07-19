import type { Metadata } from "next";
import { RealScoutOfficeListings } from "@/components/realscout/RealScoutOfficeListings";
import { RealScoutSimpleSearch } from "@/components/realscout/RealScoutSimpleSearch";
import { RealtyHero } from "@/components/realty/RealtyHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Las Vegas MLS Homes for Sale | Property Search",
  description: `Browse Las Vegas and Henderson homes for sale with live MLS listings. ${site.shortName}, ${site.brokerage}. Call ${site.phone.display}.`,
};

export default function ListingsPage() {
  return (
    <>
      <RealtyHero
        headline="Las Vegas MLS homes for sale"
        subhead="Search live inventory across Las Vegas, Henderson, and Summerlin. Filter by price, property type, and status with RealScout."
        imageSrc="/realty/heroes/hero-homes-for-sale.png"
        imageAlt="Las Vegas valley homes for sale"
        primaryCtaLabel="Jump to listings"
        primaryCtaHref="#listings"
      />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Quick search
          </p>
          <div className="max-w-xl">
            <RealScoutSimpleSearch />
          </div>
        </div>
      </section>

      <RealScoutOfficeListings
        title="Featured and recent listings"
        subtitle="Showing for-sale homes — refine filters in the widget or open the full RealScout portal."
      />

      <RealScoutOfficeListings
        title="Broader price band"
        subtitle="Expanded inventory from $300K to $1.5M."
        priceMin="300000"
        priceMax="1500000"
      />
    </>
  );
}
