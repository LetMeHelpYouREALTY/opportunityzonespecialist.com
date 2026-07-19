import Image from "next/image";
import Link from "next/link";
import { MlsDisclaimer } from "@/components/realscout/MlsDisclaimer";
import { RealScoutOfficeListings } from "@/components/realscout/RealScoutOfficeListings";
import { RealScoutSimpleSearch } from "@/components/realscout/RealScoutSimpleSearch";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { NeighborhoodGrid } from "@/components/sections/NeighborhoodGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeFaqs } from "@/lib/faqs";
import { faqPageSchema, realEstateAgentSchema } from "@/lib/schema";
import {
  FALLBACK_HERO_IMAGE,
  cloudinaryUrl,
  site,
} from "@/lib/site";

const marketStats = [
  { label: "Median Home Price", value: "$450K", note: "+4.2% YoY" },
  { label: "Avg Days on Market", value: "28", note: "Valley-wide" },
  { label: "Active Listings", value: "4,850", note: "MLS snapshot" },
  { label: "Months Inventory", value: "2.1", note: "Seller-leaning" },
];

const reviews = [
  {
    name: "Tom Sanders",
    area: "Las Vegas, NV",
    quote:
      "Dr. Duffy made our home buying experience seamless. Her knowledge of the Las Vegas market guided us through every step with professionalism and care.",
  },
  {
    name: "Vitor Palmer",
    area: "Henderson, NV",
    quote:
      "We couldn't be happier with our new home. The process was smooth, and Dr. Duffy's negotiation skills saved us thousands.",
  },
  {
    name: "Emily Rodriguez",
    area: "Summerlin, NV",
    quote:
      "As first-time homebuyers, we were nervous. Dr. Duffy explained every step and helped us find the right home in our budget.",
  },
];

export default function HomePage() {
  const heroImage =
    cloudinaryUrl("hero-las-vegas", { width: 1920, height: 1080 }) ||
    FALLBACK_HERO_IMAGE;

  return (
    <>
      <JsonLd data={realEstateAgentSchema(site.url)} />
      <JsonLd data={faqPageSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden text-white">
        <Image
          src={heroImage}
          alt="Las Vegas Valley residential architecture and desert mountain backdrop"
          fill
          priority
          className="animate-ken-burns object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/75 to-brand-ink/45" />
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-20 md:px-6">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            {site.brokerage}
          </p>
          <h1 className="animate-fade-up mt-4 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            {site.brand}
          </h1>
          <p className="animate-fade-up-delay mt-5 max-w-xl text-lg text-white/85 md:text-xl">
            Find your next Las Vegas or Henderson home — with Opportunity Zone
            investment insight from {site.shortName}.
          </p>
          <div className="animate-fade-up-delay mt-8 max-w-xl">
            <RealScoutSimpleSearch />
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
            <span>
              <strong className="text-white">500+</strong> properties sold
            </span>
            <span>
              <strong className="text-white">Since 2008</strong> serving Las Vegas
            </span>
            <span>
              <strong className="text-white">4.9★</strong> average rating
            </span>
          </div>
        </div>
      </section>

      {/* Why BHHS */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-3xl text-brand-navy md:text-4xl">
            Why Berkshire Hathaway HomeServices
          </h2>
          <p className="mt-4 max-w-3xl text-brand-ink/75">
            When you work with a Berkshire Hathaway HomeServices agent, you are
            backed by a name synonymous with trust, ethical standards, and
            financial strength — plus specialized Opportunity Zone guidance on
            this site.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Trusted brand",
                body: "Backed by Berkshire Hathaway Inc. — unmatched financial stability.",
              },
              {
                title: "Global network",
                body: "50,000+ agents worldwide for referrals and relocations.",
              },
              {
                title: "Market expertise",
                body: "Serving Las Vegas since 2008, $127M+ in closed transactions.",
              },
              {
                title: "OZ + full service",
                body: "Buying, selling, luxury, investment, and Opportunity Zone strategy.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-brand-gold pl-4">
                <h3 className="font-semibold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-ink/70">{item.body}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-12 border border-brand-sand bg-brand-mist/60 p-6 md:p-8">
            <p className="font-display text-xl text-brand-navy md:text-2xl">
              &ldquo;When clients ask why they should choose a Berkshire Hathaway
              HomeServices agent, I tell them: you&apos;re not just getting me —
              you&apos;re getting a global network of 50,000 agents, world-class
              marketing, and a brand that&apos;s synonymous with trust.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-brand-ink/65">
              — {site.shortName}, BHHS Nevada Properties
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Market */}
      <section className="bg-brand-ink py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">
                Las Vegas real estate market
              </h2>
              <p className="mt-2 text-white/70">
                Snapshot figures for planning — always verify with a live CMA.
              </p>
            </div>
            <Link
              href="/listings"
              className="text-sm font-semibold text-brand-gold hover:underline"
            >
              View live listings →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketStats.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/15 bg-white/5 p-5"
              >
                <p className="text-3xl font-semibold text-brand-gold">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium">{stat.label}</p>
                <p className="text-xs text-white/55">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured listings */}
      <section className="bg-brand-mist py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl text-brand-navy md:text-4xl">
                Featured properties
              </h2>
              <p className="mt-3 text-brand-ink/70">
                Discover homes in Las Vegas and Henderson — powered by RealScout.
              </p>
            </div>
            <a
              href={site.realscoutPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-accent hover:underline"
            >
              View all properties →
            </a>
          </div>
          <RealScoutOfficeListings />
          <MlsDisclaimer />
        </div>
      </section>

      <NeighborhoodGrid />

      {/* Reviews */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl text-brand-navy md:text-4xl">
                What clients say
              </h2>
              <p className="mt-2 text-brand-ink/70">
                {site.rating.value}★ average · {site.rating.count}+ reviews
              </p>
            </div>
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-accent hover:underline"
            >
              Read more reviews on Google →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="border border-brand-sand bg-brand-mist/40 p-6"
              >
                <blockquote className="text-sm leading-relaxed text-brand-ink/80">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-brand-navy">
                  {review.name}
                  <span className="block font-normal text-brand-ink/55">
                    {review.area}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={homeFaqs}
        subtitle="Common questions about buying, selling, and investing with Dr. Jan."
      />

      <CtaBand />
    </>
  );
}
