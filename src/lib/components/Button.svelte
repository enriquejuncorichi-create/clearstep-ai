<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'primary' | 'outline' | 'outline-light' | 'slate' | 'ghost';

  let {
    variant = 'primary',
    href,
    children,
    class: className = '',
    type,
    ...rest
  }: {
    variant?: Variant;
    href?: string;
    children: Snippet;
    class?: string;
    type?: 'button' | 'submit' | 'reset';
    [key: string]: unknown;
  } = $props();

  const base =
    'inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-base transition-all duration-200 cursor-pointer active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-mid focus-visible:ring-offset-2 focus-visible:outline-none';

  const variants: Record<Variant, string> = {
    primary: 'bg-brand-deep text-white hover:bg-brand-mid hover:-translate-y-0.5 hover:shadow-md',
    outline: 'border-2 border-brand-slate text-brand-slate hover:bg-brand-slate hover:text-white',
    'outline-light': 'border-2 border-white/70 text-white hover:bg-white/10 hover:border-white',
    slate: 'bg-brand-slate text-white hover:opacity-90 hover:-translate-y-0.5 hover:shadow-md',
    ghost: 'text-brand-deep hover:text-brand-mid underline underline-offset-4 decoration-brand-mid/30 hover:decoration-brand-mid',
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
