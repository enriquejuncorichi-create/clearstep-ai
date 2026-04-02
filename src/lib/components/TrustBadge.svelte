<script lang="ts">
  /* eslint-disable @typescript-eslint/no-explicit-any */
  let {
    title,
    description,
    icon,
  }: {
    title: string;
    description: string;
    icon?: any;
  } = $props();
</script>

<div class="group bg-brand-warm-50 rounded-xl p-6 text-center shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
  {#if icon}
    {@const Icon = icon}
    <div class="w-14 h-14 rounded-full bg-brand-wash flex items-center justify-center mx-auto mb-4">
      <Icon size={24} class="text-brand-slate" />
    </div>
  {/if}
  <h3 class="text-lg font-bold text-brand-deep mb-1">{title}</h3>
  <p class="text-sm text-brand-text-muted leading-relaxed">{description}</p>
  <div class="h-0.5 w-10 bg-brand-slate rounded-full mx-auto mt-4 group-hover:w-full transition-all duration-500"></div>
</div>
