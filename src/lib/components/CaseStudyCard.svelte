<script lang="ts">
	let {
		slug,
		title,
		client,
		sector,
		results,
		duration,
	}: {
		slug: string;
		title: string;
		client: string;
		sector: string;
		results: { metric: string; value: string; description: string }[];
		duration: string;
	} = $props();

	const displayResults = $derived(results.slice(0, 3));
</script>

<a
	href="/case-studies/{slug}"
	class="block rounded-2xl bg-brand-warm-50 p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
>
	<p class="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-mid">{sector}</p>
	<h3 class="mb-2 font-sans text-xl font-semibold text-brand-deep">{title}</h3>
	<p class="mb-4 text-sm text-brand-text-muted">{client} &middot; {duration}</p>

	{#if displayResults.length > 0}
		<div class="flex gap-6">
			{#each displayResults as result (result.metric)}
				<div>
					<p class="font-display text-lg font-bold text-brand-slate">{result.value}</p>
					<p class="text-xs text-brand-text-muted">{result.metric}</p>
				</div>
			{/each}
		</div>
	{/if}

	<p class="mt-4 text-sm font-medium text-brand-mid">
		Read case study <span aria-hidden="true">&rarr;</span>
	</p>
</a>
