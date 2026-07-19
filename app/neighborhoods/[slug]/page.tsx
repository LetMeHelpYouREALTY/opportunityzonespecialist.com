import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    priceHint:
      "Entry points often start near the mid-$600Ks depending on village and condition.",
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
    priceHint:
      "Many resale homes trade from the mid-$400Ks upward; luxury pockets run much higher.",
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
    description: `Homes for sale in ${n.name}. Work with ${site.shortName}. Call ${site.phone.display}.`,
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
      <section className="border-b border-border bg-card/40 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Neighborhood guide
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {n.name} homes for sale
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{copy.intro}</p>
          <div className="mt-8 max-w-xl">
            <RealScoutSimpleSearch />
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            What buyers ask about {n.name}
          </h2>
          <p className="mt-3 text-muted-foreground">{copy.priceHint}</p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {copy.highlights.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RealScoutOfficeListings
        title={`Current ${n.name}-area listings`}
        subtitle="Widget shows Valley inventory; refine in RealScout for street-level filters."
      />

      <CtaBand
        headline={`Tour ${n.name} with ${site.shortName}`}
        subheadline={`Call ${site.phone.display} to schedule showings.`}
      />
    </>
  );
}
