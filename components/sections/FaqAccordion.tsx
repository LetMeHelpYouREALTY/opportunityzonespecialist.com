import type { FaqItem } from "@/lib/faqs";

type FaqAccordionProps = {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
};

export function FaqAccordion({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
}: FaqAccordionProps) {
  return (
    <section className="bg-brand-mist py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="font-display text-3xl text-brand-navy md:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-brand-ink/70">{subtitle}</p>
        ) : null}
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-brand-sand bg-white px-4 py-3"
            >
              <summary className="cursor-pointer list-none font-medium text-brand-navy marker:content-none">
                <span className="flex items-center justify-between gap-3">
                  {faq.question}
                  <span className="text-brand-gold transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/75">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
