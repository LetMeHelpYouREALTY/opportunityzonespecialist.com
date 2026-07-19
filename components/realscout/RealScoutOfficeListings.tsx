import { getRealscoutAgentId } from "@/lib/site";

type RealScoutOfficeListingsProps = {
  className?: string;
  priceMin?: string;
  priceMax?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
};

export function RealScoutOfficeListings({
  className = "",
  priceMin = "500000",
  priceMax = "800000",
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
  propertyTypes = ",SFR,MF,TC",
}: RealScoutOfficeListingsProps) {
  const agentId = getRealscoutAgentId();

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<realscout-office-listings 
          agent-encoded-id="${agentId}" 
          sort-order="${sortOrder}" 
          listing-status="${listingStatus}" 
          property-types="${propertyTypes}" 
          price-min="${priceMin}" 
          price-max="${priceMax}"
        ></realscout-office-listings>`,
      }}
    />
  );
}
