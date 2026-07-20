"use client";

import { ExternalLink } from "lucide-react";
import { ozSource } from "@/lib/opportunity-zones";

/** Official OpportunityZones.com national map embed (same tool used on city pages). */
export const OZ_MAP_EMBED_SRC =
  "https://opportunityzones.com/map-app/opportunity-zones-map.html?embed=1&panel=1";

type OpportunityZonesMapProps = {
  className?: string;
  /** Optional override; defaults to official embed with panel open */
  src?: string;
};

/**
 * Embeds the OpportunityZones.com interactive OZ map.
 * Attribution required by OpportunityZones.com embed terms.
 */
export function OpportunityZonesMap({
  className = "",
  src = OZ_MAP_EMBED_SRC,
}: OpportunityZonesMapProps) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-xl border border-border bg-card/40">
        <iframe
          id="ozmap"
          title="Las Vegas Opportunity Zones Map — OpportunityZones.com"
          src={src}
          className="h-[min(82vh,720px)] w-full border-0"
          loading="lazy"
          allow="geolocation; fullscreen"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Tip: use the map search to jump to{" "}
        <span className="text-foreground">Las Vegas, NV</span> for local tracts.
        Layer panel toggles 2018 Opportunity Zones and OZ 2.0-eligible tracts.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        <a
          href={ozSource.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
        >
          Opportunity Zones Map
          <ExternalLink className="h-3 w-3" aria-hidden />
        </a>{" "}
        created by{" "}
        <a
          href="https://opportunityzones.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          OpportunityZones.com
        </a>
        .
      </p>
    </div>
  );
}
