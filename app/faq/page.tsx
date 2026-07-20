import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buyerFaqs, homesForSaleFaqs, sellerFaqs } from "@/lib/faqs";
import { opportunityZoneFaqs } from "@/lib/opportunity-zones";
import { faqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const allFaqs = [
  ...homesForSaleFaqs,
  ...buyerFaqs,
  ...sellerFaqs,
  ...opportunityZoneFaqs,
];

export const metadata: Metadata = buildPageMetadata({
  title: "Real Estate FAQ | Las Vegas & Opportunity Zones",
  description: `Answers about buying, selling, and investing with ${site.shortName}. Call ${site.phone.display}.`,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(allFaqs)} />
      <section className="border-b border-border bg-card/40 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Straight answers from {site.shortName} on Las Vegas real estate and
            Opportunity Zone investing.
          </p>
        </div>
      </section>
      <FaqAccordion faqs={allFaqs} title="All FAQs" />
      <CtaBand />
    </>
  );
}
