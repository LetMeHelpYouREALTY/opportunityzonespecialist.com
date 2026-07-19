import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MlsDisclaimer } from "@/components/realscout/MlsDisclaimer";
import { RealScoutOfficeListings } from "@/components/realscout/RealScoutOfficeListings";
import { RealScoutSimpleSearch } from "@/components/realscout/RealScoutSimpleSearch";
import { CtaBand } from "@/components/sections/CtaBand";
import { neighborhoods } from "@/components/sections/NeighborhoodGrid";
import { site } from "@/lib/site";

type NeighborhoodPageProps = {
  params: Promise<{ slug: string }>;
};

const deepCopy: Record<
  string,
  { intro: string; highlights: string[]; priceHint: string }
> = {
  summerlin: {
    intro:
      "Summerlin is a master-planned West Las Vegas community with village shopping, trail systems, and a wide range of detached homes and luxury properties.",
    highlights: [
      "Village retail and dining within short drives",
      "Golf and recreation amenities nearby",
      "Mix of resale and newer inventory",
      "Strong relocation demand from California buyers",
    ],
    priceHint: "Entry points often start near the mid-$600Ks depending on village and condition.",
  },
  henderson: {
    intro:
      "Henderson offers master-planned living southeast of the Strip with Green Valley, Anthem, Inspirada, and MacDonald Highlands among its best-known areas.",
    highlights: [
      "Master-planned communities with parks and trails",
      "Access to the 215 beltway",
      "Range from starter homes to luxury estates",
      "Popular for relocating professionals",
    ],
    priceHint: "Many resale homes trade from the mid-$400Ks upward; luxury pockets run much higher.",
  },
};

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: NeighborhoodPageProps): Promise<Metadata> {
  const { slug } = await params;
  const n = neighborhoods.find((item) => item.slug === slug);
  if (!n) return { title: "Neighborhood" };
  return {
    title: `${n.name} Homes for Sale | Las Vegas Real Estate`,
    description: `Homes for sale in ${n.name}. Work with ${site.shortName} at ${site.brokerage}. Call ${site.phone.display}.`,
  };
}

export default async function NeighborhoodDetailPage({
  params,
}: NeighborhoodPageProps) {
  const { slug } = await params;
  const n = neighborhoods.find((item) => item.slug === slug);
  if (!n) notFound();

  const copy = deepCopy[slug] || {
    intro: `${n.name} is part of the Las Vegas Valley market served by ${site.shortName}. Use the live search below for current MLS inventory.`,
    highlights: [
      "Live MLS search via RealScout",
      "Buyer and seller representation",
      "Investment and Opportunity Zone guidance available",
      `Call ${site.phone.display} for a neighborhood walkthrough`,
    ],
    priceHint: n.from,
  };

  return (
    <>
      <section className="bg-brand-navy px-4 py-14 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Neighborhood guide
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            {n.name} homes for sale
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">{copy.intro}</p>
          <div className="mt-8 max-w-xl">
            <RealScoutSimpleSearch />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-3xl text-brand-navy">
            What buyers ask about {n.name}
          </h2>
          <p className="mt-3 text-brand-ink/70">{copy.priceHint}</p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {copy.highlights.map((item) => (
              <li
                key={item}
                className="border border-brand-sand bg-brand-mist/40 px-4 py-3 text-sm text-brand-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-mist py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl text-brand-navy md:text-3xl">
            Current {n.name}-area listings
          </h2>
          <p className="mt-2 text-sm text-brand-ink/65">
            Widget shows Valley inventory in a common price band; refine in
            RealScout for street-level filters.
          </p>
          <div className="mt-8">
            <RealScoutOfficeListings />
          </div>
          <MlsDisclaimer />
        </div>
      </section>

      <CtaBand
        headline={`Tour ${n.name} with ${site.shortName}`}
        subheadline={`Call ${site.phone.display} to schedule showings.`}
      />
    </>
  );
}
