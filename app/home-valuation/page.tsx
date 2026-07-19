import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Valuation | Las Vegas CMA",
  description: `Get a comparative market analysis from ${site.shortName}. Call ${site.phone.display} for a Las Vegas home valuation.`,
};

export default function HomeValuationPage() {
  return (
    <>
      <section className="bg-brand-navy px-4 py-14 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl md:text-5xl">
            What is your Las Vegas home worth?
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Request a CMA based on recent comps, active competition, and
            property condition — not a generic online estimate.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-xl px-4 md:px-6">
          <form
            className="space-y-4 border border-brand-sand bg-brand-mist/40 p-6"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <h2 className="font-display text-2xl text-brand-navy">
              Valuation request
            </h2>
            <label className="block text-sm">
              <span className="font-medium text-brand-navy">Full name</span>
              <input
                name="name"
                required
                className="mt-1 w-full border border-brand-sand bg-white px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-brand-navy">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full border border-brand-sand bg-white px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-brand-navy">Property address</span>
              <input
                name="address"
                required
                className="mt-1 w-full border border-brand-sand bg-white px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-brand-navy">Phone</span>
              <input
                type="tel"
                name="phone"
                className="mt-1 w-full border border-brand-sand bg-white px-3 py-2"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-sm bg-brand-gold px-4 py-3 text-sm font-semibold text-brand-navy"
            >
              Email valuation request
            </button>
            <p className="text-xs text-brand-ink/60">
              Or call/text{" "}
              <a href={site.phone.href} className="underline">
                {site.phone.display}
              </a>{" "}
              for a same-day consult.
            </p>
          </form>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
