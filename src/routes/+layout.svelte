<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let isHome = $derived(page.url.pathname === '/');
</script>

{#if !isHome}
	<ScrollProgress />
{/if}

<Nav transparent={isHome} />

<main>
	{@render children()}
</main>

<Footer />
