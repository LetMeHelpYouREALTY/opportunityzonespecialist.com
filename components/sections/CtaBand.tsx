import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

type CtaBandProps = {
  headline?: string;
  subheadline?: string;
};

export function CtaBand({
  headline = "Ready to buy, sell, or invest in Las Vegas?",
  subheadline = "Dr. Jan Duffy helps with residential, luxury, and Opportunity Zone opportunities across Southern Nevada.",
}: CtaBandProps) {
  return (
    <section className="w-full border-y border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {headline}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{subheadline}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.phone.href}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone.display}
          </a>
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Schedule on Calendly
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
