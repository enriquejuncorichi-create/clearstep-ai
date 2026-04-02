import { SITE_URL } from './config';

/**
 * Organization JSON-LD schema for Clearstep AI.
 */
export function organizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Clearstep AI',
		url: SITE_URL,
		logo: `${SITE_URL}/favicon.svg`,
		email: 'hello@clearstep.ai',
		description:
			'Bespoke AI solutions for UK SMEs. We build it. We teach it. You own it.',
		areaServed: {
			'@type': 'Country',
			name: 'United Kingdom'
		},
		sameAs: []
	};
}

/**
 * ProfessionalService JSON-LD schema (subtype of LocalBusiness).
 */
export function professionalServiceSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: 'Clearstep AI',
		url: SITE_URL,
		email: 'hello@clearstep.ai',
		description:
			'Bespoke AI solutions for UK SMEs. We build it. We teach it. You own it.',
		areaServed: {
			'@type': 'Country',
			name: 'United Kingdom'
		},
		priceRange: '$$'
	};
}

/**
 * BreadcrumbList JSON-LD schema from an ordered list of page items.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}

/**
 * Array of Service JSON-LD schemas, each linked to the Clearstep AI organisation.
 */
export function serviceSchema(
	services: { name: string; description: string }[]
) {
	return services.map((service) => ({
		'@context': 'https://schema.org',
		'@type': 'Service',
		serviceType: service.name,
		description: service.description,
		provider: {
			'@type': 'Organization',
			name: 'Clearstep AI'
		},
		areaServed: {
			'@type': 'Country',
			name: 'United Kingdom'
		}
	}));
}

/**
 * FAQPage JSON-LD schema from question/answer pairs.
 */
export function faqSchema(faqs: { question: string; answer: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	};
}
