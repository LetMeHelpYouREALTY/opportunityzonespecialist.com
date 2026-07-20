import type { Metadata } from "next";
import { CalendlyWidget } from "@/components/calendly/CalendlyWidget";
import { RealScoutSimpleSearch } from "@/components/realscout/RealScoutSimpleSearch";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buyerFaqs } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Buy a Home in Las Vegas | Buyer Representation",
  description: `Buyer representation in Las Vegas with ${site.shortName}. Live MLS search and Opportunity Zone guidance. Call ${site.phone.display}.`,
  path: "/buyers",
});

export default function BuyersPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(buyerFaqs)} />
      <section className="border-b border-border bg-card/40 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Buy with {site.shortName}
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From first offer to closing — inventory, negotiations, and
            neighborhoods, including Opportunity Zone options.
          </p>
          <div className="mt-8 max-w-xl">
            <RealScoutSimpleSearch />
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
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
              <li
                key={item.step}
                className="rounded-lg border border-border bg-card p-5"
              >
                <p className="text-xs font-semibold tracking-widest text-primary">
                  {item.step}
                </p>
                <h3 className="mt-2 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-card/40 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Schedule a buyer consult or showing
          </h2>
          <p className="mt-3 text-muted-foreground">
            Book time with {site.shortName} on Calendly — or call{" "}
            {site.phone.display}.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <CalendlyWidget url={site.calendlyUrl} />
          </div>
        </div>
      </section>

      <FaqAccordion faqs={buyerFaqs} title="Buyer FAQ" />
      <CtaBand />
    </>
  );
}
