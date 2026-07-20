import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * robots.txt for Google Search Console / crawlers.
 * Sitemap URL must match the property you verify in GSC (www preferred).
 */
export default function robots(): MetadataRoute.Robots {
  const sitemap = `${site.url}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap,
    host: site.url.replace(/^https?:\/\//, ""),
  };
}
