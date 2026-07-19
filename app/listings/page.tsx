import type { Metadata } from "next";
import { MlsDisclaimer } from "@/components/realscout/MlsDisclaimer";
import { RealScoutOfficeListings } from "@/components/realscout/RealScoutOfficeListings";
import { RealScoutSimpleSearch } from "@/components/realscout/RealScoutSimpleSearch";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Las Vegas Homes for Sale | MLS Property Search",
  description: `Browse Las Vegas and Henderson homes for sale with live MLS listings. ${site.shortName}, ${site.brokerage}. Call ${site.phone.display}.`,
};

export default function ListingsPage() {
  return (
    <>
      <section className="bg-brand-navy px-4 py-14 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl md:text-5xl">
            Las Vegas MLS homes for sale
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Search live inventory across Las Vegas, Henderson, and Summerlin.
            Filter by price, property type, and status with RealScout.
          </p>
          <div className="mt-8 max-w-xl">
            <RealScoutSimpleSearch />
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl text-brand-navy md:text-3xl">
            Featured and recent listings
          </h2>
          <p className="mt-2 text-brand-ink/70">
            Showing for-sale homes typically between $500K and $800K — adjust
            filters in the widget or open the full portal.
          </p>
          <div className="mt-8">
            <RealScoutOfficeListings />
          </div>
          <div className="mt-10">
            <h3 className="font-semibold text-brand-navy">Broader price band</h3>
            <div className="mt-4">
              <RealScoutOfficeListings priceMin="300000" priceMax="1500000" />
            </div>
          </div>
          <MlsDisclaimer />
          <p className="mt-6 text-sm text-brand-ink/65">
            Prefer the full portal?{" "}
            <a
              href={site.realscoutPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-accent underline"
            >
              Open RealScout for {site.shortName}
            </a>
            .
          </p>
        </div>
      </section>

      <CtaBand
        headline="Want private showings this week?"
        subheadline={`Call or text ${site.shortName} at ${site.phone.display} — I answer my own phone.`}
      />
    </>
  );
}
