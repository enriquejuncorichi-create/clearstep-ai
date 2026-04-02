import { SITE_URL } from '$lib/config';

export interface Crumb {
	label: string;
	href?: string; // last item has no href (current page)
}

/** Build breadcrumb trail from pathname */
export function buildCrumbs(pathname: string, labels?: Record<string, string>): Crumb[] {
	const defaultLabels: Record<string, string> = {
		about: 'About',
		services: 'Services',
		'bespoke-ai': 'Bespoke AI Solutions',
		'systems-integration': 'Systems Integration',
		'team-training': 'Team Training & Handover',
		'ongoing-support': 'Ongoing Support',
		'how-we-work': 'How We Work',
		contact: 'Contact',
		'case-studies': 'Case Studies',
		faq: 'FAQ',
	};

	const allLabels = { ...defaultLabels, ...labels };
	const segments = pathname.split('/').filter(Boolean);
	const crumbs: Crumb[] = [{ label: 'Home', href: '/' }];

	let path = '';
	for (let i = 0; i < segments.length; i++) {
		path += '/' + segments[i];
		const label = allLabels[segments[i]] || segments[i];
		const isLast = i === segments.length - 1;
		crumbs.push(isLast ? { label } : { label, href: path });
	}

	return crumbs;
}

/** Convert crumbs to schema.org BreadcrumbList items */
export function crumbsToSchemaItems(crumbs: Crumb[]): { name: string; url: string }[] {
	return crumbs
		.filter((c) => c.href)
		.map((c) => ({ name: c.label, url: SITE_URL + (c.href ?? '') }));
}
