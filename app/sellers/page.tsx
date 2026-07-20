import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyWidget } from "@/components/calendly/CalendlyWidget";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { sellerFaqs } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Sell Your Las Vegas Home | Listing Services",
  description: `List with ${site.shortName} at ${site.brokerage}. Pricing strategy and MLS exposure. Call ${site.phone.display}.`,
  path: "/sellers",
});

export default function SellersPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(sellerFaqs)} />
      <section className="border-b border-border bg-card/40 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Sell with Berkshire Hathaway HomeServices
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Pricing, preparation, and marketing built around how buyers search
            in the Las Vegas Valley.
          </p>
          <Link
            href="/home-valuation"
            className="mt-8 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Request a home valuation
          </Link>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
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
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-card/40 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Schedule a listing consult
          </h2>
          <p className="mt-3 text-muted-foreground">
            Book time with {site.shortName} on Calendly — or{" "}
            <Link href="/home-valuation" className="text-primary underline">
              request a home valuation
            </Link>
            .
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <CalendlyWidget url={site.calendlyUrl} />
          </div>
        </div>
      </section>

      <FaqAccordion faqs={sellerFaqs} title="Seller FAQ" />
      <CtaBand />
    </>
  );
}
