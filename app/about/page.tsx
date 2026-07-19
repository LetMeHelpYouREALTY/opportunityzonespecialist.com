import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { formatFullAddress, getDirectionsUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About ${site.shortName} | Las Vegas REALTOR®`,
  description: `Meet ${site.shortName}, ${site.brokerage}. License ${site.license}. Call ${site.phone.display}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card/40 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About {site.shortName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Direct answers, real numbers, and Berkshire Hathaway HomeServices
            support for buyers, sellers, and Opportunity Zone investors across
            Southern Nevada.
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 sm:px-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Credentials that show up in the work
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>License {site.license}</li>
              <li>{site.brokerage}</li>
              <li>500+ transactions · serving Las Vegas since 2008</li>
              <li>$127M+ career closed volume</li>
              <li>Opportunity Zone and investment property guidance</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phone.href}
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Call {site.phone.display}
              </a>
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground"
              >
                Directions
              </a>
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground"
              >
                Google Reviews
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Office</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              {formatFullAddress()}
              <br />
              Mon–Fri 9am–6pm · Sat 10am–4pm · Sun by appointment
            </p>
            <MapEmbed title={`${site.shortName} office map`} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
