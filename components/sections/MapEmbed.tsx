import { getOfficeMapEmbedUrl, getGoogleMapsApiKey, site } from "@/lib/site";

type MapEmbedProps = {
  title?: string;
  className?: string;
};

export function MapEmbed({
  title = "Office location",
  className = "",
}: MapEmbedProps) {
  const embedUrl = getOfficeMapEmbedUrl();
  const hasKey = Boolean(getGoogleMapsApiKey());
  const canEmbed =
    Boolean(embedUrl) &&
    (embedUrl.includes("NEXT_PUBLIC") === false) &&
    (!embedUrl.includes("embed/v1/place") || hasKey);

  if (!canEmbed) {
    return (
      <div
        className={`flex min-h-[280px] items-center justify-center border border-brand-sand bg-brand-mist p-6 text-center text-sm text-brand-ink/70 ${className}`}
      >
        <div>
          <p className="font-medium text-brand-navy">{title}</p>
          <p className="mt-2">
            {site.address.streetAddress}
            <br />
            {site.address.addressLocality}, {site.address.addressRegion}{" "}
            {site.address.postalCode}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion} ${site.address.postalCode}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-brand-accent underline"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <iframe
      title={title}
      src={embedUrl}
      className={`min-h-[320px] w-full border-0 ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
