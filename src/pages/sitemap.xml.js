import rss from '@astrojs/rss';

export async function GET(context) {
  // Define all your important pages manually to ensure they're included
  const staticPages = [
    {
      url: '/',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: '/investment-consulting',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      url: '/property-analysis',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      url: '/tax-benefits',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      url: '/qualified-opportunity-funds',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      url: '/resources/guides',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/market-updates',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: '/blog',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: '/about',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: '/contact',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/faq',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: '/privacy-policy',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      url: '/terms-of-service',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3,
    },
  ];

  // Get blog posts dynamically
  const blogPosts = import.meta.glob('./blog/posts/*.mdx', { eager: true });
  
  const blogPages = Object.entries(blogPosts).map(([path, post]) => ({
    url: path.replace('./blog/posts/', '/blog/posts/').replace('.mdx', '/'),
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.6,
  }));

  // Combine all pages
  const allPages = [...staticPages, ...blogPages];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${context.site}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
