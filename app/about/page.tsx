import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { formatFullAddress, getDirectionsUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About ${site.shortName} | Opportunity Zone & Las Vegas REALTOR®`,
  description: `Meet ${site.shortName}, ${site.brokerage}. License ${site.license}. Office at ${formatFullAddress()}. Call ${site.phone.display}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-navy px-4 py-14 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl md:text-5xl">
            About {site.shortName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Brooklyn-tough PhD realtor. Direct answers, real numbers, and
            Berkshire Hathaway HomeServices support for buyers, sellers, and
            Opportunity Zone investors across Southern Nevada.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="font-display text-3xl text-brand-navy">
              Credentials that show up in the work
            </h2>
            <ul className="mt-6 space-y-3 text-brand-ink/80">
              <li>License {site.license}</li>
              <li>{site.brokerage}</li>
              <li>500+ transactions · serving Las Vegas since 2008</li>
              <li>$127M+ career closed volume</li>
              <li>Opportunity Zone and investment property guidance</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phone.href}
                className="rounded-sm bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-navy"
              >
                Call {site.phone.display}
              </a>
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-brand-navy px-4 py-2 text-sm font-semibold text-brand-navy"
              >
                Directions
              </a>
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-brand-navy px-4 py-2 text-sm font-semibold text-brand-navy"
              >
                Google Reviews
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl text-brand-navy">
              Office
            </h2>
            <p className="mb-4 text-sm text-brand-ink/75">
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
