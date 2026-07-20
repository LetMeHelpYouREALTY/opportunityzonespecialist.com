import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  lasVegasOzStats,
  lasVegasOzTracts,
  nevadaMarketplaceListings,
  opportunityZoneFaqs,
  ozGuideLinks,
  ozJumpLinks,
  ozOfficialResources,
  ozSource,
} from "@/lib/opportunity-zones";
import { faqPageSchema } from "@/lib/schema";
import { formatFullAddress, getDirectionsUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Opportunity Zones in Las Vegas, NV",
  description: `The City of Las Vegas has ${lasVegasOzStats.designatedOzCount} Qualified Opportunity Zones under the original 2018 (OZ 1.0) designation round. These zones remain in effect through ${lasVegasOzStats.oz1Through}. Nevada OZ 2.0: ${lasVegasOzStats.nevadaOz2EligibleTracts} eligible tracts, nomination cap ${lasVegasOzStats.nevadaOz2NominationCap}. Local guidance from ${site.shortName}. Call ${site.phone.display}.`,
  alternates: {
    canonical: "/cities/las-vegas-nevada",
  },
  openGraph: {
    title: "Opportunity Zones in Las Vegas, NV",
    description: `${lasVegasOzStats.designatedOzCount} designated OZs through ${lasVegasOzStats.oz1Through}. Work with ${site.shortName} at ${site.brokerage}.`,
    url: "/cities/las-vegas-nevada",
  },
};

export default function LasVegasNevadaOzCityPage() {
  const faqs = [...opportunityZoneFaqs];

  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />

      {/* Hero — mirrors source city page intro */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,oklch(0.38_0.07_55/0.4),transparent_50%),linear-gradient(180deg,oklch(0.18_0.02_65)_0%,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Opportunity Zones · Nevada
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Opportunity Zones in Las Vegas, NV
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            The City of Las Vegas has{" "}
            {lasVegasOzStats.designatedOzCount} Qualified Opportunity Zones under
            the original {lasVegasOzStats.designationRound} designation round.
            These zones remain in effect through {lasVegasOzStats.oz1Through}.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Under the Opportunity Zones 2.0 framework, the State of Nevada will
            nominate a new round of Opportunity Zones in 2026, with those
            designations taking effect on {lasVegasOzStats.oz2Effective}.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
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

          <nav
            aria-label="Jump to sections"
            className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-sm"
          >
            <span className="text-muted-foreground">Jump to:</span>
            {ozJumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="mt-6 text-sm text-muted-foreground">
            Official resources:{" "}
            <a
              href={ozOfficialResources[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Nevada Opportunity Zones (Dept. of Business &amp; Industry)
            </a>
          </p>
        </div>
      </section>

      {/* What Are Opportunity Zones? */}
      <section className="border-b border-border py-14">
        <div className="mx-auto max-w-6xl space-y-4 px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            What Are Opportunity Zones?
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            <a
              href="https://opportunityzones.com/guide/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Opportunity Zones
            </a>{" "}
            are economically distressed communities designated at the
            census-tract level. U.S. taxpayers who reinvest eligible capital gains
            into Qualified Opportunity Funds that invest in Opportunity Zone
            property may qualify for several{" "}
            <a
              href="https://opportunityzones.com/guide/tax-savings/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              federal tax benefits
            </a>
            .
          </p>
        </div>
      </section>

      {/* How To Invest */}
      <section
        id="how"
        className="scroll-mt-24 border-b border-border bg-card/20 py-14"
      >
        <div className="mx-auto max-w-6xl space-y-5 px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            How To Invest in Opportunity Zones
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            To qualify for the Opportunity Zone tax incentive, investors must
            reinvest eligible capital gains into a Qualified Opportunity Fund
            (QOF). The QOF must then deploy capital into qualified Opportunity
            Zone property or businesses located within designated census tracts.
          </p>
          <p className="max-w-3xl text-muted-foreground">
            Qualifying investments may include ground-up real estate development,
            substantial rehabilitation of existing property, or operating
            businesses structured as Qualified Opportunity Zone Businesses
            (QOZBs), provided all statutory and regulatory requirements are
            satisfied.
          </p>
          <ul className="max-w-3xl space-y-2 text-sm">
            {ozGuideLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Map */}
      <section
        id="map"
        className="scroll-mt-24 border-b border-border py-14"
      >
        <div className="mx-auto max-w-6xl space-y-5 px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Las Vegas Opportunity Zones Map
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            The interactive map on OpportunityZones.com shows every designated
            Opportunity Zone in Las Vegas. Click any zone for tract-level detail,
            or use the layer panel to explore rural and surrounding tracts.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={ozSource.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Open interactive OZ map
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={ozSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              View source city page
            </a>
          </div>
        </div>
      </section>

      {/* Current OZs + tract table */}
      <section
        id="oz1"
        className="scroll-mt-24 border-b border-border bg-card/20 py-14"
      >
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Current Opportunity Zones in Las Vegas (Designated 2018)
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            Las Vegas&apos; {lasVegasOzStats.designatedOzCount} Opportunity Zones
            are concentrated in and around the urban core, including Downtown Las
            Vegas (the Fremont East, Arts, and Medical Districts), West Las
            Vegas, the University District near UNLV, and East Las Vegas.
          </p>
          <p className="max-w-3xl text-sm text-muted-foreground">
            The census tracts below were designated in 2018 under{" "}
            <a
              href={ozSource.irsNotice2018_48}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              IRS Notice 2018-48
            </a>{" "}
            and correspond to 2010 U.S. Census tract boundaries. These OZ 1.0
            designations remain in effect through {lasVegasOzStats.oz1Through}.
          </p>

          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <caption className="sr-only">
                Las Vegas Qualified Opportunity Zone census tracts designated
                2018
              </caption>
              <thead className="bg-card/80 text-xs uppercase tracking-wide text-muted-foreground">
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
                  <tr key={tract.censusTract} className="hover:bg-card/50">
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

      {/* OZ 2.0 */}
      <section
        id="oz2"
        className="scroll-mt-24 border-b border-border py-14"
      >
        <div className="mx-auto max-w-6xl space-y-5 px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Future OZ 2.0 Designations in Las Vegas
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            On {lasVegasOzStats.acsDataRelease}, the U.S. Census Bureau released
            its five-year American Community Survey (ACS) estimates for the{" "}
            {lasVegasOzStats.acsPeriod} period. These data determine which census
            tracts are eligible for Opportunity Zone designation under the OZ 2.0
            framework.
          </p>
          <p className="max-w-3xl text-muted-foreground">
            Across the State of Nevada,{" "}
            <strong className="font-semibold text-foreground">
              {lasVegasOzStats.nevadaOz2EligibleTracts}
            </strong>{" "}
            census tracts meet the statutory median-family-income and/or
            poverty-rate thresholds. Under the 25 percent statutory cap, Nevada
            may nominate up to{" "}
            <strong className="font-semibold text-foreground">
              {lasVegasOzStats.nevadaOz2NominationCap}
            </strong>{" "}
            of those tracts, with new designations taking effect on{" "}
            {lasVegasOzStats.oz2Effective}.
          </p>
          <p className="max-w-3xl text-sm text-muted-foreground">
            See the{" "}
            <a
              href={ozSource.oz2AnalysisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              analysis of the OZ 2.0-eligible tracts
            </a>{" "}
            for the full methodology, or explore the eligible tracts on the{" "}
            <a
              href={ozSource.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              interactive Opportunity Zones map
            </a>
            .
          </p>
        </div>
      </section>

      {/* Marketplace */}
      <section className="border-b border-border bg-card/20 py-14">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Investments in Nevada
            </h2>
            <a
              href={ozSource.marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Browse the full marketplace
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Listings below appear on OpportunityZones.com&apos;s marketplace and
            are shown for research only. They are not offers, solicitations, or
            endorsements by {site.shortName} or {site.brokerage}. Perform your
            own due diligence with licensed advisors.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nevadaMarketplaceListings.map((listing) => (
              <li key={listing.href}>
                <a
                  href={listing.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col border border-border bg-background/60 p-5 transition-colors hover:border-primary/40 hover:bg-card/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {listing.category} · {listing.region}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
                    {listing.title}
                  </h3>
                  <p className="mt-auto pt-4 text-sm text-muted-foreground">
                    Min {listing.minInvestment}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local agent + NAP */}
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
              Page content cloned from{" "}
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
              Local Opportunity Zone guidance
            </h2>
            <p className="mb-1 text-sm font-semibold text-foreground">
              {site.shortName} · {site.brokerage}
            </p>
            <p className="mb-4 text-sm text-muted-foreground">
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
              <Link
                href="/listings"
                className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground"
              >
                MLS listings
              </Link>
            </div>
            <MapEmbed title={`${site.shortName} office map`} />
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} title="Opportunity Zone FAQs" />
      <CtaBand
        headline="Evaluating Opportunity Zone property in Las Vegas?"
        subheadline={`Call ${site.shortName} at ${site.phone.display} for tract-aware search help—not tax advice.`}
      />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-border bg-card/40 px-4 py-5">
      <p className="text-4xl font-bold tracking-tight text-primary">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
