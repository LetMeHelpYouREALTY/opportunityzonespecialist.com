import type { FaqItem } from "@/lib/faqs";

type FaqAccordionProps = {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
};

export function FaqAccordion({
  title = "Frequently Asked Questions",
  subtitle = "Common Questions",
  faqs,
}: FaqAccordionProps) {
  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full border-b border-border bg-card/40"
    >
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {subtitle}
          </p>
          <h2
            id="faq-heading"
            className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            {title}
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-border bg-card px-5"
            >
              <summary className="cursor-pointer list-none py-4 text-left text-sm font-medium leading-snug text-foreground marker:content-none hover:text-primary">
                <span className="flex items-center justify-between gap-3">
                  {faq.question}
                  <span className="text-primary transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
