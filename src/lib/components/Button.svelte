<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

  type Variant = 'primary' | 'outline' | 'slate' | 'ghost';

  let {
    variant = 'primary',
    href,
    children,
    class: className = '',
    ...rest
  }: {
    variant?: Variant;
    href?: string;
    children: Snippet;
    class?: string;
  } & (HTMLButtonAttributes | HTMLAnchorAttributes) = $props();

  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 cursor-pointer';

  const variants: Record<Variant, string> = {
    primary: 'bg-brand-deep text-white hover:bg-brand-mid',
    outline: 'border-2 border-brand-slate text-brand-slate hover:bg-brand-slate hover:text-white',
    slate: 'bg-brand-slate text-white hover:opacity-90',
    ghost: 'text-brand-deep hover:text-brand-mid underline underline-offset-4',
  };
</script>

{#if href}
  <a {href} class="{base} {variants[variant]} {className}" {...rest}>
    {@render children()}
  </a>
{:else}
  <button class="{base} {variants[variant]} {className}" {...rest}>
    {@render children()}
  </button>
{/if}
