import { SITE_URL } from '$lib/config';

const pages = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/about', priority: '0.8', changefreq: 'monthly' },
	{ path: '/services', priority: '0.9', changefreq: 'monthly' },
	{ path: '/services/bespoke-ai', priority: '0.7', changefreq: 'monthly' },
	{ path: '/services/systems-integration', priority: '0.7', changefreq: 'monthly' },
	{ path: '/services/team-training', priority: '0.7', changefreq: 'monthly' },
	{ path: '/services/ongoing-support', priority: '0.7', changefreq: 'monthly' },
	{ path: '/how-we-work', priority: '0.8', changefreq: 'monthly' },
	{ path: '/faq', priority: '0.6', changefreq: 'monthly' },
	{ path: '/contact', priority: '0.7', changefreq: 'monthly' }
];

export const prerender = true;

export async function GET() {
	const today = new Date().toISOString().split('T')[0];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${SITE_URL}${page.path === '/' ? '' : page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
