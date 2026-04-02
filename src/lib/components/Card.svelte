<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'elevated' | 'outlined' | 'filled' | 'dark';
  type Padding = 'compact' | 'default' | 'spacious';

  let {
    variant = 'elevated',
    padding = 'default',
    hover = true,
    class: className = '',
    children,
  }: {
    variant?: Variant;
    padding?: Padding;
    hover?: boolean;
    class?: string;
    children: Snippet;
  } = $props();

  const variantStyles: Record<Variant, string> = {
    elevated: 'bg-brand-warm-50 rounded-2xl shadow-[var(--shadow-card)]',
    outlined: 'bg-transparent border border-brand-warm-200 rounded-xl',
    filled: 'bg-brand-wash rounded-xl',
    dark: 'bg-brand-navy text-white rounded-2xl',
  };

  const paddingStyles: Record<Padding, string> = {
    compact: 'p-5',
    default: 'p-8',
    spacious: 'p-10',
  };

  const hoverDefault = 'hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300';
  const hoverDark = 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300';

  let computedClasses = $derived(
    [
      variantStyles[variant],
      paddingStyles[padding],
      hover ? (variant === 'dark' ? hoverDark : hoverDefault) : '',
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<div class="{computedClasses} {className}">
  {@render children()}
</div>
