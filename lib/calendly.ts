import { site } from "@/lib/site";

/** Calendly event per page intent (scheduling_url values from the Calendly API). */
export const CALENDLY_EVENTS = {
  showing: site.calendlyUrl,
  seller: "https://calendly.com/drjanduffy/listing-consultation",
  buyer: "https://calendly.com/drjanduffy/buyer-consultation-30-min",
} as const;

export type CalendlyEvent = keyof typeof CALENDLY_EVENTS;

/**
 * Calendly URL with embed options and UTM tags. utm_source is the bare domain
 * so the Calendly → FUB Worker can map the booking to this site.
 */
export function calendlyUrl(
  event: CalendlyEvent,
  medium: string,
  campaign: string,
): string {
  const u = new URL(CALENDLY_EVENTS[event]);
  u.searchParams.set("hide_gdpr_banner", "1");
  u.searchParams.set("utm_source", site.domain);
  u.searchParams.set("utm_medium", medium);
  u.searchParams.set("utm_campaign", campaign);
  return u.toString();
}
