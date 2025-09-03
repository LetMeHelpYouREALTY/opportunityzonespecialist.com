export async function GET(context) {
  const site = context.site || 'https://opportunityzonespecialist.com';
  
  // Get all pages dynamically using Astro's built-in method
  const allPages = import.meta.glob('./**/*.{astro,mdx}', { eager: true });
  
  const urls = Object.keys(allPages)
    .filter(path => {
      // Filter out unwanted pages
      return !path.includes('404') && 
             !path.includes('admin') && 
             !path.includes('theme/') &&
             !path.includes('sitemap') &&
             !path.includes('rss');
    })
    .map(path => {
      // Convert file path to URL
      let url = path
        .replace('./', '/')
        .replace('/index.astro', '/')
        .replace('/index.mdx', '/')
        .replace('.astro', '/')
        .replace('.mdx', '/');
      
      // Ensure URL starts with /
      if (!url.startsWith('/')) {
        url = '/' + url;
      }
      
      // Remove trailing slash for root
      if (url === '/index/') {
        url = '/';
      }
      
      return {
        url: url,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: url === '/' ? 1.0 : 0.8,
      };
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(page => `  <url>
    <loc>${site}${page.url}</loc>
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
