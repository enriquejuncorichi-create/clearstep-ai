<script lang="ts">
  import Card from './Card.svelte';
  import { Check } from 'lucide-svelte';

  let {
    title,
    description,
    deliverables,
    href,
    accent = 'bg-brand-slate',
  }: {
    title: string;
    description: string;
    deliverables: string[];
    href?: string;
    accent?: string;
  } = $props();
</script>

<Card variant="elevated" padding="default" hover={true} class="group relative overflow-hidden">
  <!-- Gradient accent bar pinned to top of card -->
  <div
    class="absolute top-0 left-0 right-0 h-[3px] {accent}"
    style="mask-image: linear-gradient(to right, black, transparent); -webkit-mask-image: linear-gradient(to right, black, transparent);"
  ></div>

  <h3 class="text-xl font-sans font-semibold text-brand-deep mb-3">{title}</h3>
  <p class="text-brand-text-muted leading-relaxed mb-4">{description}</p>

  <ul class="space-y-2">
    {#each deliverables as item (item)}
      <li class="flex items-start gap-2 text-sm text-brand-text">
        <Check size={16} strokeWidth={2} class="text-brand-mid mt-0.5 shrink-0" />
        {item}
      </li>
    {/each}
  </ul>

  {#if href}
    <a
      {href}
      class="inline-flex items-center gap-1 text-sm font-medium text-brand-deep hover:text-brand-mid group-hover:underline underline-offset-4 decoration-brand-mid/30 transition-colors duration-300 mt-6"
    >
      Learn more &rarr;
    </a>
  {/if}
</Card>
