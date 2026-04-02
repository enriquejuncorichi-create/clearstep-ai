<script lang="ts">
	let progress = $state(0);
	let visible = $state(false);

	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			visible = false;
			return;
		}

		function update() {
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			// Only show on pages tall enough to warrant a progress bar
			if (scrollHeight < window.innerHeight * 0.5) {
				visible = false;
				return;
			}
			visible = true;
			progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
		}

		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update, { passive: true });
		update();

		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	});
</script>

{#if visible}
	<div
		class="pointer-events-none fixed top-0 right-0 left-0 z-50 h-0.5 bg-brand-slate"
		style="transform: scaleX({progress}); transform-origin: left;"
		role="progressbar"
		aria-valuenow={Math.round(progress * 100)}
		aria-valuemin={0}
		aria-valuemax={100}
		aria-label="Page scroll progress"
	></div>
{/if}
