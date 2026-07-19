export type FaqItem = {
  question: string;
  answer: string;
};

export const homesForSaleFaqs: FaqItem[] = [
  {
    question: "What is the median home price in Las Vegas right now?",
    answer:
      "As of mid-2026, the Las Vegas valley median sale price for single-family homes is roughly $486,000–$490,000. Prices vary by submarket — North Las Vegas trends lower, while Summerlin commands a premium over the valley median. Ask for a current comparative market analysis for your target area.",
  },
  {
    question: "How much housing inventory is available in Las Vegas?",
    answer:
      "Active single-family listings across Clark County were running roughly 8,600–8,900 in mid-2026, plus around 3,000 attached homes, putting months-of-supply near 3.8 months for single-family — past the 3-month mark that typically signals a shift toward buyers.",
  },
  {
    question: "How long do homes stay on the market in Las Vegas?",
    answer:
      "Median days on market climbed to roughly 47–51 days as of April 2026 per Las Vegas REALTORS® (GLVAR) data, up about 14.6% year-over-year — buyers have more time and leverage to negotiate than during 2021–2022.",
  },
  {
    question: "Which Las Vegas neighborhoods should I consider?",
    answer:
      "It depends on your budget and priorities. Summerlin and Henderson carry a price premium for master-planned amenities. North Las Vegas offers relative value. Downtown and southeast Las Vegas can be an entry point. A local agent can match neighborhoods to your budget and commute — without regard to protected characteristics under the Fair Housing Act.",
  },
  {
    question: "Can you help with Opportunity Zone investment properties?",
    answer:
      "Yes. In addition to residential search, Dr. Jan Duffy helps investors evaluate Opportunity Zone-eligible properties with clear numbers on price, timelines, and tax-deferral considerations. Call (702) 222-1964.",
  },
];

export const homeFaqs = homesForSaleFaqs;

export const buyerFaqs: FaqItem[] = [
  {
    question: "Can I search MLS listings on this site?",
    answer:
      "Yes. Use the RealScout inventory on the homepage or Listings page for live MLS inventory across Las Vegas, Henderson, and Summerlin.",
  },
  {
    question: "Do you work with relocating buyers?",
    answer:
      "Yes. Relocating buyers get virtual tours, neighborhood walkthroughs by video, and coordination with lenders familiar with out-of-state purchases.",
  },
];

export const sellerFaqs: FaqItem[] = [
  {
    question: "How do you price my home?",
    answer:
      "Pricing starts with recent comparable sales, active competition, days on market, and condition. You receive a written CMA before listing.",
  },
  {
    question: "What marketing do sellers receive?",
    answer:
      "Sellers get MLS exposure, RealScout syndication, professional photography coordination, and Berkshire Hathaway HomeServices marketing tools.",
  },
];
