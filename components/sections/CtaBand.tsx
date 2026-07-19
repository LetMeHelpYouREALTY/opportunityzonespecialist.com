import Link from "next/link";
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
    <section className="bg-brand-accent py-14 text-white md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">{headline}</h2>
          <p className="mt-3 text-white/85">{subheadline}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.phone.href}
            className="rounded-sm bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-sand"
          >
            Call {site.phone.display}
          </a>
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Schedule on Calendly
          </a>
          <Link
            href="/contact"
            className="rounded-sm border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
