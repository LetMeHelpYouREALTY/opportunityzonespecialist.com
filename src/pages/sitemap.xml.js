export async function GET() {
	const baseUrl = 'https://boyle-duffy-oz.com';
	
	// Define all pages with their priorities and change frequencies
	const pages = [
		// Main pages
		{ url: '', priority: '1.0', changefreq: 'weekly' },
		{ url: '/california-oz', priority: '0.9', changefreq: 'weekly' },
		{ url: '/nevada-oz', priority: '0.9', changefreq: 'weekly' },
		{ url: '/cross-state-strategies', priority: '0.9', changefreq: 'weekly' },
		{ url: '/current-opportunities', priority: '0.8', changefreq: 'daily' },
		{ url: '/team', priority: '0.8', changefreq: 'monthly' },
		{ url: '/contact', priority: '0.8', changefreq: 'monthly' },
		
		// Cross-state strategy pages
		{ url: '/cross-state-strategies/california-nevada-benefits', priority: '0.8', changefreq: 'weekly' },
		{ url: '/cross-state-strategies/tax-savings-calculator', priority: '0.8', changefreq: 'weekly' },
		{ url: '/cross-state-strategies/state-comparison', priority: '0.7', changefreq: 'monthly' },
		{ url: '/cross-state-strategies/timeline-requirements', priority: '0.7', changefreq: 'monthly' },
		{ url: '/cross-state-strategies/success-stories', priority: '0.8', changefreq: 'weekly' },
		
		// Team pages
		{ url: '/team/meet-the-team', priority: '0.7', changefreq: 'monthly' },
		{ url: '/team/kelly-boyle', priority: '0.8', changefreq: 'monthly' },
		{ url: '/team/eugene-boyle', priority: '0.8', changefreq: 'monthly' },
		{ url: '/team/dr-jan-duffy', priority: '0.8', changefreq: 'monthly' },
		{ url: '/team/client-success-stories', priority: '0.7', changefreq: 'weekly' },
		
		// Kelly Boyle territory pages
		{ url: '/kelly-boyle/northern-california', priority: '0.8', changefreq: 'weekly' },
		{ url: '/kelly-boyle/bay-area-oz-properties', priority: '0.7', changefreq: 'daily' },
		
		// Eugene Boyle territory pages
		{ url: '/eugene-boyle/southern-california', priority: '0.8', changefreq: 'weekly' },
		{ url: '/eugene-boyle/los-angeles-metro-oz', priority: '0.7', changefreq: 'daily' },
		
		// Dr. Jan Duffy territory pages
		{ url: '/dr-jan-duffy/las-vegas-oz-properties', priority: '0.8', changefreq: 'daily' },
		{ url: '/dr-jan-duffy/henderson-development', priority: '0.7', changefreq: 'daily' },
		{ url: '/dr-jan-duffy/summerlin-oz-opportunities', priority: '0.7', changefreq: 'daily' },
		{ url: '/dr-jan-duffy/reno-tahoe-oz-markets', priority: '0.7', changefreq: 'weekly' },
		
		// Market reports and analysis
		{ url: '/california-oz/market-reports', priority: '0.7', changefreq: 'weekly' },
		{ url: '/nevada-oz/tax-advantage-calculator', priority: '0.7', changefreq: 'monthly' },
		
		// Current opportunities
		{ url: '/current-opportunities/featured-properties', priority: '0.7', changefreq: 'daily' },
		{ url: '/current-opportunities/development-pipeline', priority: '0.6', changefreq: 'weekly' },
		{ url: '/current-opportunities/commercial-properties', priority: '0.6', changefreq: 'daily' },
		{ url: '/current-opportunities/residential-communities', priority: '0.6', changefreq: 'daily' },
		{ url: '/current-opportunities/investment-partnerships', priority: '0.6', changefreq: 'weekly' },
		
		// Legal and compliance
		{ url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
		{ url: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
	];
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
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
