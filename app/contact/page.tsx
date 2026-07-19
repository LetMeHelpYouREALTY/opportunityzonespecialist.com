import type { Metadata } from "next";
import { CalendlyWidget } from "@/components/calendly/CalendlyWidget";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { formatFullAddress, getDirectionsUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Dr. Jan Duffy | Las Vegas Real Estate",
  description: `Contact ${site.shortName} at ${site.brokerage}. Call ${site.phone.display}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-card/40 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Reach {site.shortName} directly. No phone tree — call or text{" "}
            {site.phone.display}.
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 sm:px-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground">NAP</h2>
            <dl className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div>
                <dt className="font-semibold text-foreground">Business</dt>
                <dd>{site.name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Address</dt>
                <dd>{formatFullAddress()}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Phone</dt>
                <dd>
                  <a href={site.phone.href} className="text-primary underline">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Email</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-primary underline"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Hours</dt>
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
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Call
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
                View Google Reviews
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Map & open houses
            </h2>
            <MapEmbed title="Office and open houses map" />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Schedule a showing or consult
          </h2>
          <p className="mt-3 text-muted-foreground">
            Book time with {site.shortName} on Calendly — or call{" "}
            {site.phone.display}.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <CalendlyWidget url={site.calendlyUrl} />
          </div>
        </div>
      </section>

      <CtaBand headline="Prefer to talk now?" />
    </>
  );
}
