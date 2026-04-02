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

<div class="text-center">
  {#if icon}
    {@const Icon = icon}
    <div class="w-12 h-12 rounded-full bg-brand-wash flex items-center justify-center mx-auto mb-3">
      <Icon size={22} class="text-brand-deep" />
    </div>
  {/if}
  <h3 class="text-lg font-semibold text-brand-deep mb-1">{title}</h3>
  <p class="text-sm text-brand-text-muted leading-relaxed">{description}</p>
</div>
