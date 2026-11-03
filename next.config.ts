import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src https://widgetbe.com https://*.widgetbe.com 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://calendly.com https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline' https://em.realscout.com https://www.realscout.com https://assets.calendly.com",
  "img-src https://widgetbe.com https://*.widgetbe.com 'self' data: blob: https: http:",
  "font-src 'self' data: https://assets.calendly.com",
  "connect-src https://widgetbe.com https://*.widgetbe.com 'self' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com https://api.openai.com https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://res.cloudinary.com",
  "frame-src https://widgetbe.com https://*.widgetbe.com 'self' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com https://www.google.com https://maps.google.com https://*.google.com https://www.google.com/maps https://opportunityzones.com https://*.opportunityzones.com https://cloud.cartovista.com",
  "worker-src 'self' blob:",
].join("; ");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/las-vegas-opportunity-zones",
        destination: "/cities/las-vegas-nevada",
        permanent: true,
      },
      // Legacy Astro-site URLs (pre-July 2026 rebuild) -> current equivalent pages
      { source: "/company/about", destination: "/about", permanent: true },
      { source: "/company/contact", destination: "/contact", permanent: true },
      { source: "/tax-benefits", destination: "/cities/las-vegas-nevada", permanent: true },
      { source: "/qualified-opportunity-funds", destination: "/cities/las-vegas-nevada", permanent: true },
      { source: "/investment-consulting", destination: "/cities/las-vegas-nevada", permanent: true },
      { source: "/blog/posts/oz-tax-benefits-guide", destination: "/cities/las-vegas-nevada", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.findahomeinlasvegas.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              'camera=(), microphone=(), geolocation=(self "https://opportunityzones.com")',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
