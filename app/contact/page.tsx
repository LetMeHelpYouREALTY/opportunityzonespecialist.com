import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapEmbed } from "@/components/sections/MapEmbed";
import {
  formatFullAddress,
  getDirectionsUrl,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Dr. Jan Duffy | Las Vegas Real Estate",
  description: `Contact ${site.shortName} at ${site.brokerage}. Call ${site.phone.display}. Office: ${formatFullAddress()}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy px-4 py-14 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl md:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Reach {site.shortName} directly. No phone tree — call or text{" "}
            {site.phone.display}.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="font-display text-2xl text-brand-navy">NAP</h2>
            <dl className="mt-6 space-y-4 text-sm text-brand-ink/85">
              <div>
                <dt className="font-semibold text-brand-navy">Business</dt>
                <dd>{site.name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Address</dt>
                <dd>{formatFullAddress()}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Phone</dt>
                <dd>
                  <a href={site.phone.href} className="text-brand-accent underline">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Email</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-brand-accent underline"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Hours</dt>
                <dd>
                  Mon–Fri 9:00am–6:00pm
                  <br />
                  Sat 10:00am–4:00pm
                  <br />
                  Sun by appointment
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phone.href}
                className="rounded-sm bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-navy"
              >
                Call
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
                View Google Reviews
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-brand-navy">
              Map & open houses
            </h2>
            <MapEmbed title="Office and open houses map" />
          </div>
        </div>
      </section>

      <CtaBand headline="Prefer to talk now?" />
    </>
  );
}
