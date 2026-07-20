import type { Metadata } from "next";
import { CalendlyWidget } from "@/components/calendly/CalendlyWidget";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Home Valuation | Las Vegas CMA",
  description: `Get a comparative market analysis from ${site.shortName}. Schedule on Calendly or call ${site.phone.display}.`,
  path: "/home-valuation",
});

export default function HomeValuationPage() {
  return (
    <>
      <section className="border-b border-border bg-card/40 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What is your Las Vegas home worth?
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Request a CMA based on recent comps, active competition, and
            property condition — not a generic online estimate. Book a consult
            with {site.shortName} below, or call{" "}
            <a href={site.phone.href} className="text-primary underline">
              {site.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Schedule your valuation consult
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pick a time on Calendly. We&apos;ll cover your property address,
            recent comps, and next steps for listing or refinancing.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <CalendlyWidget url={site.calendlyUrl} />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Prefer a call? Text or call{" "}
            <a href={site.phone.href} className="underline">
              {site.phone.display}
            </a>{" "}
            for a same-day consult.
          </p>
        </div>
      </section>

      <CtaBand
        headline="Ready for a written CMA?"
        subheadline={`Book above or call ${site.shortName} at ${site.phone.display}.`}
      />
    </>
  );
}
