import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import rss from "@astrojs/rss";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://opportunityzonespecialist.com/', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true, // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), lit(), icon()], // Add renderers to the config
  output: 'static', // Static site generation for better Vercel performance
  build: {
    inlineStylesheets: 'auto', // Optimize CSS loading
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'astro': ['astro'],
            'components': ['@components/odyssey-theme'],
          },
        },
      },
    },
  },
});