import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Valuation | Las Vegas CMA",
  description: `Get a comparative market analysis from ${site.shortName}. Call ${site.phone.display}.`,
};

export default function HomeValuationPage() {
  return (
    <>
      <section className="border-b border-border bg-card/40 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What is your Las Vegas home worth?
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Request a CMA based on recent comps, active competition, and
            property condition — not a generic online estimate.
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <form
            className="space-y-4 rounded-lg border border-border bg-card p-6"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <h2 className="text-xl font-semibold text-foreground">
              Valuation request
            </h2>
            {[
              { name: "name", label: "Full name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              {
                name: "address",
                label: "Property address",
                type: "text",
                required: true,
              },
              { name: "phone", label: "Phone", type: "tel", required: false },
            ].map((field) => (
              <label key={field.name} className="block text-sm">
                <span className="font-medium text-foreground">{field.label}</span>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                />
              </label>
            ))}
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Email valuation request
            </button>
            <p className="text-xs text-muted-foreground">
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
