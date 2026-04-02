<script lang="ts">
	let {
		question,
		answer,
		open = false,
	}: {
		question: string;
		answer: string;
		open?: boolean;
	} = $props();

	let isOpen = $state(false);

	// Sync initial value from prop
	$effect(() => {
		if (open) isOpen = true;
	});
</script>

<details class="group border-b border-brand-warm-200" bind:open={isOpen}>
	<summary class="flex cursor-pointer list-none items-center justify-between py-5">
		<h3 class="pr-4 text-base font-semibold text-brand-deep">{question}</h3>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 shrink-0 text-brand-text-muted transition-transform duration-300 group-open:rotate-180"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="6 9 12 15 18 9" />
		</svg>
	</summary>
	<div class="pb-5 leading-relaxed text-brand-text-muted">
		<p>{answer}</p>
	</div>
</details>

<style>
	summary::-webkit-details-marker {
		display: none;
	}

	summary {
		list-style: none;
	}
</style>
