<script lang="ts">
	import { page } from '$app/state';
	import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '$lib/config';

	interface Props {
		title: string;
		description: string;
		canonical?: string;
		ogImage?: string;
		ogType?: string;
		noindex?: boolean;
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	const {
		title,
		description,
		canonical,
		ogImage,
		ogType = 'website',
		noindex = false,
		jsonLd
	}: Props = $props();

	const canonicalPath = $derived(canonical ?? page.url.pathname);
	const resolvedOgImage = $derived(ogImage ?? DEFAULT_OG_IMAGE);

	const jsonLdItems = $derived(
		jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={SITE_URL + canonicalPath} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={SITE_URL + canonicalPath} />
	<meta property="og:image" content={SITE_URL + resolvedOgImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:type" content={ogType} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:locale" content="en_GB" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={SITE_URL + resolvedOgImage} />

	<!-- Robots -->
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	<!-- Structured Data -->
	{#each jsonLdItems as item}
		{@html `<script type="application/ld+json">${JSON.stringify(item)}</script>`}
	{/each}
</svelte:head>
