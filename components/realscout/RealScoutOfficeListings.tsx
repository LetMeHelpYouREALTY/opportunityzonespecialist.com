import { getRealscoutAgentId } from "@/lib/site";

type RealScoutOfficeListingsProps = {
  title?: string;
  subtitle?: string;
  priceMin?: string;
  priceMax?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  className?: string;
};

export function RealScoutOfficeListings({
  title = "Current Homes for Sale in Las Vegas",
  subtitle = "Live MLS inventory from Berkshire Hathaway HomeServices Nevada Properties — updated throughout the day.",
  priceMin,
  priceMax,
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
  propertyTypes = ",SFR,MF,TC",
  className = "",
}: RealScoutOfficeListingsProps) {
  const agentId = getRealscoutAgentId();
  const attrs = [
    `agent-encoded-id="${agentId}"`,
    `sort-order="${sortOrder}"`,
    `listing-status="${listingStatus}"`,
    `property-types="${propertyTypes}"`,
  ];
  if (priceMin) attrs.push(`price-min="${priceMin}"`);
  if (priceMax) attrs.push(`price-max="${priceMax}"`);

  return (
    <section
      id="listings"
      aria-labelledby="office-listings-heading"
      className={`w-full border-b border-border bg-background ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Live MLS Inventory
          </p>
          <h2
            id="office-listings-heading"
            className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div
          className="realscout-office-listings-host min-h-[320px] w-full"
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings ${attrs.join(" ")}></realscout-office-listings>`,
          }}
        />

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Listing information is provided by RealScout and the Las Vegas
          REALTORS® MLS and is believed accurate but not guaranteed. All
          information should be independently verified. Equal Housing
          Opportunity.
        </p>
      </div>
    </section>
  );
}
