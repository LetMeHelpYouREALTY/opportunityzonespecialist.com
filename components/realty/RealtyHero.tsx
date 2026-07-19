import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

type RealtyHeroProps = {
  eyebrow?: string;
  headline: string;
  subhead: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
};

export function RealtyHero({
  eyebrow = `${site.city}, ${site.state} — ${site.region}`,
  headline,
  subhead,
  primaryCtaLabel = "View Current Listings",
  primaryCtaHref = "#listings",
  imageSrc,
  imageAlt,
}: RealtyHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden bg-background"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
          <MapPin className="h-3 w-3 text-primary" aria-hidden />
          {eyebrow}
        </div>

        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {headline}
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
          {subhead}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={primaryCtaHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {primaryCtaLabel}
          </a>
          <a
            href={site.phone.href}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
