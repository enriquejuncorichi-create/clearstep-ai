<script lang="ts">
  import Button from './Button.svelte';

  type BackgroundVariant = 'light' | 'dark' | 'wash';

  let {
    heading,
    description,
    primaryHref,
    primaryLabel,
    primaryVariant = 'slate',
    secondaryHref,
    secondaryLabel,
    variant = 'light',
  }: {
    heading: string;
    description?: string;
    primaryHref: string;
    primaryLabel: string;
    primaryVariant?: 'primary' | 'slate';
    secondaryHref?: string;
    secondaryLabel?: string;
    variant?: BackgroundVariant;
  } = $props();

  const bgStyles: Record<BackgroundVariant, string> = {
    light: 'bg-brand-warm-50',
    dark: 'bg-brand-navy',
    wash: 'bg-brand-wash',
  };

  let isDark = $derived(variant === 'dark');
</script>

<section class="relative py-24 overflow-hidden {bgStyles[variant]}">
  {#if isDark}
    <!-- Layered radial gradients matching Hero static variant -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse at 30% 20%, rgba(55,138,221,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(181,212,244,0.08) 0%, transparent 50%);"
    ></div>
  {/if}
  <div class="relative max-w-3xl mx-auto px-6 text-center">
    <h2 class="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 {isDark ? 'text-white' : 'text-brand-deep'}">
      {heading}
    </h2>
    {#if description}
      <p class="text-lg mb-8 {isDark ? 'text-white/70' : 'text-brand-text-muted'}">
        {description}
      </p>
    {/if}
    <div class="flex flex-wrap justify-center gap-4">
      <Button variant={primaryVariant} href={primaryHref}>
        {primaryLabel}
      </Button>
      {#if secondaryHref && secondaryLabel}
        <Button variant="ghost" href={secondaryHref}>
          {secondaryLabel}
        </Button>
      {/if}
    </div>
  </div>
</section>
