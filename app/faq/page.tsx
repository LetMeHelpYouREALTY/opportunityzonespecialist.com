import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buyerFaqs, homeFaqs, sellerFaqs } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const allFaqs = [...homeFaqs, ...buyerFaqs, ...sellerFaqs];

export const metadata: Metadata = {
  title: "Real Estate FAQ | Las Vegas & Opportunity Zones",
  description: `Answers about buying, selling, and investing with ${site.shortName}. Call ${site.phone.display}.`,
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(allFaqs)} />
      <section className="bg-brand-navy px-4 py-14 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl md:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
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
