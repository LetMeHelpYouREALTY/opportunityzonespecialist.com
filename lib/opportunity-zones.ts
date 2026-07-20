/**
 * Las Vegas Opportunity Zone page content cloned from
 * https://opportunityzones.com/cities/las-vegas-nevada/ (reviewed 2026-07-20).
 * Verify against IRS Notice 2018-48 / CDFI Fund before relying on tract lists.
 */

export type OzTract = {
  county: "Clark";
  censusTract: string;
  type: "Non-Rural";
};

export type OzMarketplaceListing = {
  category: string;
  region: string;
  title: string;
  href: string;
  minInvestment: string;
};

export const ozSource = {
  title: "Opportunity Zones in Las Vegas, NV",
  url: "https://opportunityzones.com/cities/las-vegas-nevada/",
  reviewed: "2026-07-20",
  mapUrl: "https://opportunityzones.com/map/",
  /** Official embed used on OpportunityZones.com city/map pages */
  mapEmbedUrl:
    "https://opportunityzones.com/map-app/opportunity-zones-map.html?embed=1&panel=1",
  marketplaceUrl: "https://opportunityzones.com/marketplace/",
  oz2AnalysisUrl:
    "https://opportunityzones.com/2026/01/new-census-data-defines-opportunity-zone-2-0-eligible-tracts/",
  irsNotice2018_48: "https://www.irs.gov/pub/irs-drop/n-18-48.pdf",
} as const;

export const ozJumpLinks = [
  { label: "How to invest", href: "#how" },
  { label: "Las Vegas OZ map", href: "#map" },
  { label: "Current OZs (2018)", href: "#oz1" },
  { label: "Future OZ 2.0 designations", href: "#oz2" },
] as const;

export const ozGuideLinks = [
  {
    label: "The Beginner's Guide to Opportunity Zones",
    href: "https://opportunityzones.com/guide/",
  },
  {
    label: "What Is a Qualified Opportunity Fund?",
    href: "https://opportunityzones.com/faq/what-is-a-qualified-opportunity-zone-fund/",
  },
  {
    label: "The Two Ways to Invest in Opportunity Zones",
    href: "https://opportunityzones.com/guide/ways-to-invest/",
  },
] as const;

export const ozOfficialResources = [
  {
    label: "Nevada Opportunity Zones (Dept. of Business & Industry)",
    href: "https://www.business.nv.gov/business-resource-hub/access-to-capital/opportunity-zones/",
  },
  {
    label: "CDFI Fund Opportunity Zone Resources",
    href: "https://www.cdfifund.gov/opportunity-zones",
  },
  {
    label: "IRS Opportunity Zones",
    href: "https://www.irs.gov/credits-deductions/businesses/opportunity-zones",
  },
  {
    label: "IRS Notice 2018-48 (designation list)",
    href: "https://www.irs.gov/pub/irs-drop/n-18-48.pdf",
  },
  {
    label: "Interactive Opportunity Zones map",
    href: "https://opportunityzones.com/map/",
  },
] as const;

/** Third-party marketplace listings shown on the source page (external; not endorsements). */
export const nevadaMarketplaceListings: OzMarketplaceListing[] = [
  {
    category: "Multifamily",
    region: "Nevada",
    title: "University of Nevada Reno Student Housing OZ Project",
    href: "https://opportunityzones.com/marketplace/university-of-nevada-reno-student-housing-oz-project/",
    minInvestment: "$5,000,000",
  },
  {
    category: "Hospitality & Hotel",
    region: "Nevada",
    title: "Integris DLV Opportunity Zone Fund",
    href: "https://opportunityzones.com/marketplace/integris-dlv-opportunity-zone-fund/",
    minInvestment: "$100,000",
  },
  {
    category: "Industrial",
    region: "Arizona",
    title: "GTIS Qualified Opportunity Zone Fund II",
    href: "https://opportunityzones.com/marketplace/gtis-qualified-opportunity-zone-fund-ii/",
    minInvestment: "$100,000",
  },
  {
    category: "Multifamily",
    region: "Arizona",
    title: "Origin Opportunity Zone Fund III",
    href: "https://opportunityzones.com/marketplace/origin-opportunity-zone-fund-iii/",
    minInvestment: "$50,000",
  },
  {
    category: "Self-Storage",
    region: "Nevada",
    title: "Las Vegas Self-Storage QOZ Project by YourSpace America",
    href: "https://opportunityzones.com/marketplace/las-vegas-self-storage-qoz-project/",
    minInvestment: "$25,000",
  },
];

export const lasVegasOzStats = {
  designatedOzCount: 22,
  designationRound: "2018 (OZ 1.0)",
  oz1Through: "December 31, 2028",
  nevadaOz2EligibleTracts: 195,
  nevadaOz2NominationCap: 49,
  oz2Effective: "January 1, 2027",
  acsDataRelease: "January 29, 2026",
  acsPeriod: "2020–2024",
} as const;

/** Clark County census tracts designated in 2018 under IRS Notice 2018-48 (2010 tract boundaries). */
export const lasVegasOzTracts: OzTract[] = [
  { county: "Clark", censusTract: "32003000103", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000105", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000106", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000201", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000203", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000301", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000401", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000402", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000403", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000510", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000520", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000521", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000522", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000523", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000600", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000700", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003000800", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003001100", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003001300", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003002201", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003002905", type: "Non-Rural" },
  { county: "Clark", censusTract: "32003003006", type: "Non-Rural" },
];

export const opportunityZoneFaqs = [
  {
    question: "How many Opportunity Zones are in Las Vegas?",
    answer:
      "The City of Las Vegas has 22 Qualified Opportunity Zones under the original 2018 (OZ 1.0) designation round. Those zones remain in effect through December 31, 2028.",
  },
  {
    question: "What is Opportunity Zones 2.0 for Nevada?",
    answer:
      "Under the Opportunity Zones 2.0 framework, the State of Nevada will nominate a new round of Opportunity Zones in 2026. Nevada has 195 eligible tracts and may nominate up to 49. New designations take effect January 1, 2027.",
  },
  {
    question: "Where are Las Vegas Opportunity Zones concentrated?",
    answer:
      "Las Vegas' 22 Opportunity Zones are concentrated in and around the urban core, including Downtown Las Vegas (the Fremont East, Arts, and Medical Districts), West Las Vegas, the University District near UNLV, and East Las Vegas.",
  },
  {
    question: "How do investors use Opportunity Zones?",
    answer:
      "To qualify for the Opportunity Zone tax incentive, investors must reinvest eligible capital gains into a Qualified Opportunity Fund (QOF). The QOF must then deploy capital into qualified Opportunity Zone property or businesses located within designated census tracts. This is not tax advice—confirm structure and timing with your CPA and counsel.",
  },
] as const;
