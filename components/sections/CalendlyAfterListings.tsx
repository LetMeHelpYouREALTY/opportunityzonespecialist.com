import { CalendlyPopupLink } from "@/components/calendly/CalendlyPopupLink";
import { calendlyUrl } from "@/lib/calendly";

type CalendlyAfterListingsProps = {
  campaign: string;
};

/** Compact booking strip placed directly after the RealScout listings widget. */
export function CalendlyAfterListings({ campaign }: CalendlyAfterListingsProps) {
  return (
    <section className="w-full border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
        <p className="text-base text-foreground">
          See a home you like? Pick a showing time with Dr. Jan Duffy.
        </p>
        <CalendlyPopupLink
          url={calendlyUrl("showing", "popup", campaign)}
          className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Schedule a showing
        </CalendlyPopupLink>
      </div>
    </section>
  );
}
