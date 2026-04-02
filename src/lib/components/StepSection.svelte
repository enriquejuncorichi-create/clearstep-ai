<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  let { step, accentColour, title, children }: {
    step: number;
    accentColour: string;
    title: string;
    children: import('svelte').Snippet;
  } = $props();

  const barHeights = [78, 117, 169];
  const barColours = ['#B5D4F4', '#378ADD', '#185FA5'];
</script>

<section class="py-20 border-l-4" style="border-color: {accentColour}">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-3 flex justify-center" use:reveal>
        <svg width="180" height={barHeights[2] + 10} viewBox="0 0 180 {barHeights[2] + 10}" xmlns="http://www.w3.org/2000/svg">
          {#each { length: step + 1 } as _, i}
            <rect
              x={i * 62}
              y={barHeights[2] - barHeights[i]}
              width="46"
              height={barHeights[i]}
              rx="6"
              fill={barColours[i]}
              class="bar-grow"
              style="animation-delay: {i * 200}ms"
            />
          {/each}
        </svg>
      </div>
      <div class="lg:col-span-9" use:reveal={{ delay: 300 }}>
        <p class="text-sm font-semibold tracking-wider uppercase mb-2" style="color: {accentColour}">
          Step {step + 1}
        </p>
        <h2 class="text-3xl font-bold text-brand-deep mb-6">{title}</h2>
        <div class="space-y-4 text-gray-600 leading-relaxed">
          {@render children()}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .bar-grow {
    animation: grow-bar 800ms ease-out both;
    transform-origin: bottom;
  }

  @keyframes grow-bar {
    from { transform: scaleY(0); opacity: 0; }
    to { transform: scaleY(1); opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    .bar-grow { animation: none; }
  }
</style>
