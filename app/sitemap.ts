import type { MetadataRoute } from "next";
import { neighborhoods } from "@/components/sections/NeighborhoodGrid";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/las-vegas-homes-for-sale",
    "/cities/las-vegas-nevada",
    "/listings",
    "/about",
    "/contact",
    "/buyers",
    "/sellers",
    "/home-valuation",
    "/faq",
    "/neighborhoods",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: path === "" || path === "/listings" ? ("daily" as const) : ("weekly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...neighborhoods.map((n) => ({
      url: `${base}/neighborhoods/${n.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
