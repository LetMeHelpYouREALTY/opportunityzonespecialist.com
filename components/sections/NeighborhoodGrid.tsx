import Link from "next/link";

export const neighborhoods = [
  { name: "Summerlin", slug: "summerlin", from: "From $625K" },
  { name: "Henderson", slug: "henderson", from: "From $485K" },
  { name: "Green Valley", slug: "green-valley", from: "From $520K" },
  { name: "The Ridges", slug: "the-ridges", from: "From $2.5M" },
  { name: "Southern Highlands", slug: "southern-highlands", from: "From $750K" },
  { name: "North Las Vegas", slug: "north-las-vegas", from: "From $385K" },
  { name: "Skye Canyon", slug: "skye-canyon", from: "From $550K" },
  { name: "Centennial Hills", slug: "centennial-hills", from: "From $495K" },
  { name: "Inspirada", slug: "inspirada", from: "From $525K" },
  { name: "Mountain's Edge", slug: "mountains-edge", from: "From $475K" },
];

export function NeighborhoodGrid() {
  return (
    <section className="w-full border-b border-border bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Neighborhoods
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Las Vegas neighborhoods we serve
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Coverage across Southern Nevada — including Opportunity Zone
              corridors.
            </p>
          </div>
          <Link
            href="/neighborhoods"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View all neighborhoods →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/neighborhoods/${n.slug}`}
              className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <h3 className="font-semibold text-foreground">{n.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{n.from}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
