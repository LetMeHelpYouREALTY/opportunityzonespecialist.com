import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  lasVegasOzStats,
  lasVegasOzTracts,
  opportunityZoneFaqs,
  ozOfficialResources,
  ozSource,
} from "@/lib/opportunity-zones";
import { faqPageSchema } from "@/lib/schema";
import { formatFullAddress, getDirectionsUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Las Vegas Opportunity Zones | 22 Designated Census Tracts",
  description: `Las Vegas has ${lasVegasOzStats.designatedOzCount} Qualified Opportunity Zones (OZ 1.0 through ${lasVegasOzStats.oz1Through}). Nevada OZ 2.0: ${lasVegasOzStats.nevadaOz2EligibleTracts} eligible tracts, nomination cap ${lasVegasOzStats.nevadaOz2NominationCap}. Guidance from ${site.shortName}. Call ${site.phone.display}.`,
  alternates: {
    canonical: "/las-vegas-opportunity-zones",
  },
  openGraph: {
    title: "Opportunity Zones in Las Vegas, NV",
    description: `${lasVegasOzStats.designatedOzCount} designated OZs through ${lasVegasOzStats.oz1Through}. Work with ${site.shortName} at ${site.brokerage}.`,
    url: "/las-vegas-opportunity-zones",
  },
};

export default function LasVegasOpportunityZonesPage() {
  const faqs = [...opportunityZoneFaqs];

  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />

      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,oklch(0.35_0.06_55/0.35),transparent_55%),radial-gradient(ellipse_at_90%_40%,oklch(0.28_0.04_65/0.4),transparent_50%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-primary">
            {site.brand}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Opportunity Zones in Las Vegas, NV
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {lasVegasOzStats.designatedOzCount} Qualified Opportunity Zones under
            the {lasVegasOzStats.designationRound} round—still in effect through{" "}
            {lasVegasOzStats.oz1Through}. {site.shortName} helps investors and
            buyers evaluate OZ-area property with clear numbers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.phone.href}
              className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Call {site.phone.display}
            </a>
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Schedule a consult
            </a>
            <Link
              href="/listings"
              className="rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Browse MLS listings
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6">
          <Stat
            value={String(lasVegasOzStats.designatedOzCount)}
            label="Designated OZs (2018)"
          />
          <Stat
            value={String(lasVegasOzStats.nevadaOz2EligibleTracts)}
            label="Nevada OZ 2.0-eligible tracts"
          />
          <Stat
            value={String(lasVegasOzStats.nevadaOz2NominationCap)}
            label="Nevada 2.0 nomination cap"
          />
        </div>
      </section>

      <section className="border-b border-border py-14">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            What are Opportunity Zones?
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            Opportunity Zones are census tracts designated under federal tax law
            so taxpayers who reinvest eligible capital gains into Qualified
            Opportunity Funds (QOFs) that invest in Opportunity Zone property may
            qualify for federal tax benefits. Designation and benefits are
            statutory—structure and timing belong with your CPA and counsel.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card/20 py-14">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            How to invest in Opportunity Zones
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            To pursue the Opportunity Zone tax incentive, investors reinvest
            eligible capital gains into a Qualified Opportunity Fund. The QOF
            then deploys capital into qualified Opportunity Zone property or
            businesses inside designated census tracts.
          </p>
          <p className="max-w-3xl text-muted-foreground">
            Qualifying paths can include ground-up development, substantial
            rehabilitation of existing property, or operating businesses
            structured as Qualified Opportunity Zone Businesses (QOZBs)—when
            statutory and regulatory requirements are met.
          </p>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              Confirm the census tract is a designated Qualified Opportunity Zone
              for your hold period.
            </li>
            <li>
              Work with a QOF sponsor, CPA, and counsel on timing of the gain and
              the 180-day investment window.
            </li>
            <li>
              Underwrite the real estate or business on fundamentals—tax benefits
              do not replace market risk.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-border py-14">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Current Opportunity Zones in Las Vegas (designated 2018)
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            Las Vegas&apos;s {lasVegasOzStats.designatedOzCount} Opportunity
            Zones concentrate in and around the urban core:
          </p>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {lasVegasOzStats.concentrationAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <p className="max-w-3xl text-sm text-muted-foreground">
            The census tracts below were designated in 2018 under IRS Notice
            2018-48 and correspond to 2010 U.S. Census tract boundaries. These
            OZ 1.0 designations remain in effect through{" "}
            {lasVegasOzStats.oz1Through}.
          </p>

          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <caption className="sr-only">
                Las Vegas Qualified Opportunity Zone census tracts designated
                2018
              </caption>
              <thead className="bg-card/60 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    County
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Census Tract
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {lasVegasOzTracts.map((tract) => (
                  <tr key={tract.censusTract} className="hover:bg-card/40">
                    <td className="px-4 py-2.5 text-foreground">
                      {tract.county}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-foreground">
                      {tract.censusTract}
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">
                      {tract.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/20 py-14">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Future OZ 2.0 designations in Las Vegas &amp; Nevada
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            On {lasVegasOzStats.acsDataRelease}, the U.S. Census Bureau released
            five-year American Community Survey (ACS) estimates for the{" "}
            {lasVegasOzStats.acsPeriod} period. That data informs which census
            tracts are eligible for Opportunity Zone designation under OZ 2.0.
          </p>
          <p className="max-w-3xl text-muted-foreground">
            Across Nevada,{" "}
            <strong className="font-semibold text-foreground">
              {lasVegasOzStats.nevadaOz2EligibleTracts}
            </strong>{" "}
            census tracts meet statutory median-family-income and/or poverty-rate
            thresholds. Under the 25% statutory cap, Nevada may nominate up to{" "}
            <strong className="font-semibold text-foreground">
              {lasVegasOzStats.nevadaOz2NominationCap}
            </strong>{" "}
            of those tracts, with new designations taking effect on{" "}
            {lasVegasOzStats.oz2Effective}.
          </p>
          <p className="max-w-3xl text-sm text-muted-foreground">
            For interactive maps and tract-level detail, use the official CDFI
            Fund resources or the OpportunityZones.com Las Vegas page—we link
            those below rather than embedding a third-party map widget.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 sm:px-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Official resources &amp; source
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {ozOfficialResources.map((resource) => (
                <li key={resource.href}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Tract counts and narrative on this page are adapted from{" "}
              <a
                href={ozSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline-offset-2 hover:underline"
              >
                {ozSource.title}
              </a>{" "}
              (reviewed {ozSource.reviewed}). Always verify designations against
              IRS / CDFI Fund publications before making investment decisions.
              This page is educational and not tax, legal, or investment advice.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Work with a local agent
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              {site.shortName} · {site.brokerage}
              <br />
              License {site.license}
              <br />
              {formatFullAddress()}
              <br />
              Mon–Fri 9am–6pm · Sat 10am–4pm · Sun by appointment
            </p>
            <div className="mb-4 flex flex-wrap gap-3">
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
            <MapEmbed title={`${site.shortName} office map`} />
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} title="Opportunity Zone FAQs" />
      <CtaBand
        headline="Evaluating an Opportunity Zone property in Las Vegas?"
        subheadline={`Call ${site.shortName} at ${site.phone.display} for tract-aware search help and a clear next step—not tax advice.`}
      />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl font-bold tracking-tight text-primary">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
