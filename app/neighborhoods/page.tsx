import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/sections/CtaBand";
import { neighborhoods } from "@/components/sections/NeighborhoodGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Las Vegas Neighborhoods | Homes by Area",
  description: `Explore Las Vegas and Henderson neighborhoods with ${site.shortName}. Summerlin, Henderson, Green Valley, and more.`,
};

export default function NeighborhoodsPage() {
  return (
    <>
      <section className="bg-brand-navy px-4 py-14 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl md:text-5xl">
            Las Vegas neighborhoods
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Localized guides for Southern Nevada communities — starting with
            Summerlin and Henderson deep dives.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 md:px-6">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/neighborhoods/${n.slug}`}
              className="border border-brand-sand p-5 transition hover:border-brand-gold"
            >
              <h2 className="font-display text-xl text-brand-navy">{n.name}</h2>
              <p className="mt-2 text-sm text-brand-ink/65">{n.from}</p>
              <p className="mt-4 text-sm font-semibold text-brand-accent">
                View guide →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
