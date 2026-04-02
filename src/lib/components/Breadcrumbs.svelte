<script lang="ts">
	import type { Crumb } from '$lib/utils/breadcrumbs';

	let { crumbs }: { crumbs: Crumb[] } = $props();
</script>

<nav aria-label="Breadcrumb" class="mx-auto max-w-7xl px-6 py-4">
	<ol class="flex items-center gap-2 text-sm text-brand-text-muted">
		{#each crumbs as crumb, i (crumb.label)}
			{#if i > 0}
				<li aria-hidden="true" class="text-brand-text-muted/40">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-3.5 w-3.5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</li>
			{/if}
			<li>
				{#if crumb.href}
					<a href={crumb.href} class="transition-colors hover:text-brand-deep">{crumb.label}</a>
				{:else}
					<span class="font-medium text-brand-text">{crumb.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
