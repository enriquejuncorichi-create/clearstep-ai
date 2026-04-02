<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  let { step, accentColour, title, children }: {
    step: number;
    accentColour: string;
    title: string;
    children: import('svelte').Snippet;
  } = $props();
</script>

<section class="py-20 border-l-4" style="border-color: {accentColour}">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-3 flex flex-col items-center" use:reveal>
        <!-- Numbered circle -->
        <div
          class="flex items-center justify-center rounded-full shrink-0"
          style="width: 80px; height: 80px; border: 2px solid {accentColour};"
        >
          <span
            class="font-display font-bold text-3xl"
            style="color: {accentColour};"
          >
            {step + 1}
          </span>
        </div>
        <!-- Vertical dashed connector to next step -->
        {#if step < 2}
          <div
            class="mt-2"
            style="height: 60px; border-left: 2px dashed {accentColour}; opacity: 0.3;"
          ></div>
        {/if}
      </div>
      <div class="lg:col-span-9" use:reveal={{ delay: 300 }}>
        <p class="text-sm font-semibold tracking-wider uppercase mb-2" style="color: {accentColour}">
          Step {step + 1}
        </p>
        <h2 class="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-deep mb-6">{title}</h2>
        <div class="space-y-4 text-brand-text-muted leading-relaxed">
          {@render children()}
        </div>
      </div>
    </div>
  </div>
</section>
