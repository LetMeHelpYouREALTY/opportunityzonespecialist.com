import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

function EqualHousingIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 3L2 12h3v9h6v-5h2v5h6v-9h3L12 3zm0 2.5l7 6.3V20h-4v-5H9v5H5v-8.2l7-6.3z" />
      <rect x="8" y="13" width="8" height="1.5" />
      <rect x="8" y="15.5" width="8" height="1.5" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <div className="w-full border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-primary">
                <Image
                  src={site.agentPhotoSrc}
                  alt={site.agentPhotoAlt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Ready to Make Your Move?
                </p>
                <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Talk to {site.shortName} Today
                </h2>
                <p className="mt-2 max-w-md text-pretty text-sm text-muted-foreground">
                  Whether you&apos;re buying, selling, or exploring Opportunity
                  Zone options in Las Vegas, a quick call is the best first
                  step.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 sm:items-end">
              <a
                href={site.phone.href}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Phone className="h-5 w-5" aria-hidden />
                {site.phone.display}
              </a>
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Or schedule on Calendly
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-background">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-foreground">
                {site.shortName} · {site.brokerage}
              </p>
              <p className="text-xs text-muted-foreground">
                © {year} {site.shortName} · NV Lic. #{site.license} ·{" "}
                {site.city}, {site.state}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <EqualHousingIcon className="h-8 w-8 shrink-0" />
              <span className="max-w-[220px] text-left leading-snug">
                Equal Housing Opportunity. We are pledged to the letter and
                spirit of U.S. policy for the achievement of equal housing
                opportunity.
              </span>
            </div>
          </div>

          <div className="my-4 h-px w-full bg-border" />

          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            Market statistics on this page are aggregate figures compiled from
            public market-research sources and are believed accurate as of their
            stated date, but are not guaranteed and should be independently
            verified. For current, live MLS listings, contact {site.shortName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
