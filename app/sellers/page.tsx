import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { sellerFaqs } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sell Your Las Vegas Home | Listing Services",
  description: `List with ${site.shortName} at ${site.brokerage}. Pricing strategy, MLS exposure, and marketing. Call ${site.phone.display}.`,
};

export default function SellersPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(sellerFaqs)} />
      <section className="bg-brand-navy px-4 py-14 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl md:text-5xl">
            Sell with Berkshire Hathaway HomeServices
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Pricing, preparation, and marketing built around how buyers actually
            search in the Las Vegas Valley.
          </p>
          <Link
            href="/home-valuation"
            className="mt-8 inline-block rounded-sm bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-navy"
          >
            Request a home valuation
          </Link>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-3xl text-brand-navy">
            Seller checklist
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Written CMA with active and sold comps",
              "MLS + RealScout syndication",
              "Photography and showing coordination",
              "Offer review with net-sheet clarity",
              "Opportunity Zone timing discussion for investors",
              "Relocation and lease-back options when needed",
            ].map((item) => (
              <li
                key={item}
                className="border-l-2 border-brand-gold bg-brand-mist/50 px-4 py-3 text-sm text-brand-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion faqs={sellerFaqs} title="Seller FAQ" />
      <CtaBand />
    </>
  );
}
