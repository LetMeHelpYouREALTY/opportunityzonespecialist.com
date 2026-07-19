import type { Metadata } from "next";
import { RealScoutSimpleSearch } from "@/components/realscout/RealScoutSimpleSearch";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buyerFaqs } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Buy a Home in Las Vegas | Buyer Representation",
  description: `Buyer representation in Las Vegas, Henderson, and Summerlin with ${site.shortName}. Live MLS search and Opportunity Zone guidance. Call ${site.phone.display}.`,
};

export default function BuyersPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(buyerFaqs)} />
      <section className="bg-brand-navy px-4 py-14 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl md:text-5xl">
            Buy with {site.shortName}
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            From first offer to closing, get clear guidance on inventory,
            negotiations, and neighborhoods — including Opportunity Zone
            investment options.
          </p>
          <div className="mt-8 max-w-xl">
            <RealScoutSimpleSearch />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-3xl text-brand-navy">
            How buyer representation works
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Clarify criteria",
                body: "Budget, commute, HOA preferences, and whether you need OZ-eligible inventory.",
              },
              {
                step: "02",
                title: "Tour with data",
                body: "Compare comps, days on market, and listing history before you write.",
              },
              {
                step: "03",
                title: "Negotiate & close",
                body: "Inspection strategy, credits, and a closing timeline that fits your move.",
              },
            ].map((item) => (
              <li key={item.step} className="border border-brand-sand p-5">
                <p className="text-xs font-semibold tracking-widest text-brand-gold">
                  {item.step}
                </p>
                <h3 className="mt-2 font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-brand-ink/70">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqAccordion faqs={buyerFaqs} title="Buyer FAQ" />
      <CtaBand />
    </>
  );
}
