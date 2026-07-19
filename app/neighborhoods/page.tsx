import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/sections/CtaBand";
import { neighborhoods } from "@/components/sections/NeighborhoodGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Las Vegas Neighborhoods | Homes by Area",
  description: `Explore Las Vegas and Henderson neighborhoods with ${site.shortName}.`,
};

export default function NeighborhoodsPage() {
  return (
    <>
      <section className="border-b border-border bg-card/40 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Las Vegas neighborhoods
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Localized guides for Southern Nevada communities.
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-6">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/neighborhoods/${n.slug}`}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <h2 className="text-xl font-semibold text-foreground">{n.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{n.from}</p>
              <p className="mt-4 text-sm font-semibold text-primary">
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
