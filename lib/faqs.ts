export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: FaqItem[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We specialize in Las Vegas and Henderson, Nevada, including Summerlin, Green Valley, and surrounding communities. Services cover residential, luxury, investment, and Opportunity Zone properties throughout Southern Nevada.",
  },
  {
    question: "How long does the home buying process take?",
    answer:
      "Most financed purchases in the Las Vegas Valley close in about 30 to 45 days after an accepted offer. Cash purchases can close faster. Timelines depend on inspections, appraisal, and lender requirements.",
  },
  {
    question: "Do you help with home valuations?",
    answer:
      "Yes. Dr. Jan Duffy provides comparative market analyses for sellers and investors, including Opportunity Zone property reviews. Call or text (702) 222-1964 for a valuation consult.",
  },
  {
    question: "What makes you different from other real estate agents?",
    answer:
      "You get Berkshire Hathaway HomeServices backing plus specialized Opportunity Zone and investment guidance from an agent with decades of Las Vegas market experience and $127M+ in closed transactions.",
  },
  {
    question: "Can you help with investment properties?",
    answer:
      "Yes. We help investors evaluate rentals, luxury holdings, and Opportunity Zone-eligible properties with clear numbers on price, cash flow potential, and tax-deferral timelines.",
  },
  {
    question: "What are your fees?",
    answer:
      "Buyer representation is typically covered by seller-paid compensation when available; seller listing fees are discussed up front in writing before you sign. Ask for a clear fee breakdown on your first call.",
  },
];

export const buyerFaqs: FaqItem[] = [
  {
    question: "Can I search MLS listings on this site?",
    answer:
      "Yes. Use the RealScout search on the homepage or Listings page for live MLS inventory across Las Vegas, Henderson, and Summerlin.",
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
