/**
 * Las Vegas Opportunity Zone reference data adapted from
 * https://opportunityzones.com/cities/las-vegas-nevada/ (reviewed 2026-07-20).
 * Verify against IRS Notice 2018-48 / CDFI Fund before relying on tract lists.
 */

export type OzTract = {
  county: "Clark";
  censusTract: string;
  type: "Non-Rural";
};

export const ozSource = {
  title: "Opportunity Zones in Las Vegas, NV",
  url: "https://opportunityzones.com/cities/las-vegas-nevada/",
  reviewed: "2026-07-20",
} as const;

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
    label: "OpportunityZones.com Las Vegas map & tract detail",
    href: "https://opportunityzones.com/cities/las-vegas-nevada/",
  },
  {
    label: "IRS Opportunity Zones",
    href: "https://www.irs.gov/credits-deductions/businesses/opportunity-zones",
  },
] as const;

export const lasVegasOzStats = {
  designatedOzCount: 22,
  designationRound: "2018 (OZ 1.0)",
  oz1Through: "December 31, 2028",
  nevadaOz2EligibleTracts: 195,
  nevadaOz2NominationCap: 49,
  oz2Effective: "January 1, 2027",
  acsDataRelease: "January 29, 2026",
  acsPeriod: "2020–2024",
  concentrationAreas: [
    "Downtown Las Vegas (Fremont East, Arts District, and Medical District)",
    "West Las Vegas",
    "University District near UNLV",
    "East Las Vegas",
  ],
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
      "Under the OZ 2.0 framework, Nevada has 195 census tracts that meet statutory eligibility thresholds. The state may nominate up to 49 of those tracts. New designations take effect January 1, 2027.",
  },
  {
    question: "Where are Las Vegas Opportunity Zones concentrated?",
    answer:
      "Las Vegas’s 22 Opportunity Zones are concentrated in and around the urban core, including Downtown Las Vegas (Fremont East, Arts District, and Medical District), West Las Vegas, the University District near UNLV, and East Las Vegas.",
  },
  {
    question: "How do investors use Opportunity Zones?",
    answer:
      "Investors reinvest eligible capital gains into a Qualified Opportunity Fund (QOF). The QOF deploys capital into qualified Opportunity Zone property or businesses in designated census tracts. This is not tax advice—confirm structure and timing with your CPA and counsel.",
  },
] as const;
