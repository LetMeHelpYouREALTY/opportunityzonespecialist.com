import type { Metadata } from "next";
import Link from "next/link";
import { RealScoutOfficeListings } from "@/components/realscout/RealScoutOfficeListings";
import { ContentLayout } from "@/components/realty/ContentLayout";
import { RealtyHero } from "@/components/realty/RealtyHero";
import { RealtyStatsBar } from "@/components/realty/RealtyStatsBar";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { homesForSaleFaqs } from "@/lib/faqs";
import { faqPageSchema, realEstateAgentSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Homes for Sale in Las Vegas, NV | Current Listings & Market Data",
  description:
    "Browse homes for sale in Las Vegas, NV with up-to-date market data on price, inventory, and days on market. Work with Dr. Jan Duffy for every submarket — including Opportunity Zone guidance.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema(site.url)} />
      <JsonLd data={faqPageSchema(homesForSaleFaqs)} />

      <RealtyHero
        headline="Homes for Sale in Las Vegas, NV"
        subhead="A local, licensed guide to buying in the Las Vegas Valley — with current market data across every submarket, from Summerlin to Henderson to North Las Vegas."
        imageSrc="/realty/heroes/hero-homes-for-sale.jpg"
        imageAlt="Modern Las Vegas single-family home at golden hour with desert mountains in the background"
      />

      <RealScoutOfficeListings
        title="Current Homes for Sale in Las Vegas"
        listingStatus="For Sale"
        propertyTypes=",SFR,MF,TC"
        sortOrder="NEWEST"
      />

      <RealtyStatsBar
        stats={[
          {
            value: "$486K–$490K",
            label: "Median Price (SFH)",
            note: "Valley-wide, mid-2026",
          },
          {
            value: "~8,600–8,900",
            label: "Active Listings",
            note: "Single-family, Clark County",
          },
          {
            value: "47–51 days",
            label: "Median Days on Market",
            note: "GLVAR, Apr. 2026",
          },
          {
            value: "~3.8 months",
            label: "Months of Supply",
            note: "Single-family homes",
          },
        ]}
      />

      <ContentLayout>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          A Buyer&apos;s Market Is Emerging in Las Vegas
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Inventory has rebounded across the Las Vegas Valley while prices have
          stayed roughly flat year-over-year. Active single-family listings in
          Clark County are running around 8,600–8,900, with another 3,000 or so
          attached homes (condos and townhomes) on the market — pushing
          months-of-supply past the 3-month threshold that typically marks a
          shift away from a strict seller&apos;s market.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The clearest signal is days on market: the median climbed to roughly
          47–51 days as of April 2026, up about 14.6% year-over-year. Buyers now
          have real room to negotiate on price, closing costs, and repairs —
          something that was largely absent during the 2021–2022 rush.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Submarket Snapshot
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Summerlin</strong> commands a
          premium of roughly $150,000–$250,000 over the valley median, driven by
          its master-planned amenities and proximity to Red Rock Canyon.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Henderson</strong> trades around
          $50,000 above the valley median, with strong demand across its
          master-planned communities and consistent appreciation.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">North Las Vegas</strong> is the
          relative value leader, with median prices in the roughly
          $385,000–$438,000 range and a high concentration of newer
          construction.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">
            Downtown / Southeast Las Vegas
          </strong>{" "}
          (including the 89110 area) trades at a discount to the valley median,
          near $387,000, and can be a strong entry point for buyers prioritizing
          affordability and commute time.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Explore by Area and Service
        </h3>
        <ul
          className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground"
          role="list"
        >
          <li>
            <Link
              href="/neighborhoods/summerlin"
              className="text-primary hover:underline"
            >
              Summerlin homes for sale
            </Link>
          </li>
          <li>
            <Link
              href="/neighborhoods/henderson"
              className="text-primary hover:underline"
            >
              Henderson homes for sale
            </Link>
          </li>
          <li>
            <Link href="/listings" className="text-primary hover:underline">
              Full MLS search
            </Link>
          </li>
          <li>
            <Link
              href="/cities/las-vegas-nevada"
              className="text-primary hover:underline"
            >
              Opportunity Zones in Las Vegas, NV (22 designated tracts)
            </Link>
          </li>
          <li>
            <Link href="/buyers" className="text-primary hover:underline">
              Buyer representation
            </Link>
          </li>
          <li>
            <Link
              href="/home-valuation"
              className="text-primary hover:underline"
            >
              Home valuation / CMA
            </Link>
          </li>
        </ul>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Data as of mid-2026, compiled from Las Vegas REALTORS® (GLVAR) MLS
          summaries and third-party market research; figures change monthly and
          should be independently verified. Contact {site.shortName} for a
          current comparative market analysis and live listing search.
        </p>
      </ContentLayout>

      <FaqAccordion
        title="Buying in Las Vegas: Frequently Asked Questions"
        faqs={homesForSaleFaqs}
      />
    </>
  );
}
