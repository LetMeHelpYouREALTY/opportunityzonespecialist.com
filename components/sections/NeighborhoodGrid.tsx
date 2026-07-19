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
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl text-brand-navy md:text-4xl">
              Las Vegas neighborhoods we serve
            </h2>
            <p className="mt-3 max-w-2xl text-brand-ink/70">
              Berkshire Hathaway HomeServices Nevada Properties coverage across
              Southern Nevada — including Opportunity Zone corridors.
            </p>
          </div>
          <Link
            href="/neighborhoods"
            className="text-sm font-semibold text-brand-accent hover:underline"
          >
            View all neighborhoods →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/neighborhoods/${n.slug}`}
              className="border border-brand-sand bg-brand-mist/50 p-4 transition hover:border-brand-gold hover:bg-white"
            >
              <h3 className="font-semibold text-brand-navy">{n.name}</h3>
              <p className="mt-1 text-sm text-brand-ink/65">{n.from}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
