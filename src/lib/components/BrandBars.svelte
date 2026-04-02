<script lang="ts">
  type Size = 'sm' | 'md' | 'lg' | 'xl';
  type Variant = 'light' | 'dark' | 'white';

  let { size = 'md', animate = false, variant = 'light' }: {
    size?: Size;
    animate?: boolean;
    variant?: Variant;
  } = $props();

  const config: Record<Size, { w: number; gap: number; rx: number; unit: number }> = {
    sm: { w: 12, gap: 4, rx: 2, unit: 3 },
    md: { w: 16, gap: 6, rx: 3, unit: 4 },
    lg: { w: 24, gap: 9, rx: 5, unit: 6 },
    xl: { w: 48, gap: 18, rx: 10, unit: 12 },
  };

  const colours: Record<Variant, [string, string, string]> = {
    light: ['#B5D4F4', '#378ADD', '#185FA5'],
    dark: ['#85B7EB', '#378ADD', '#FFFFFF'],
    white: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
  };

  let { w, gap, rx, unit } = $derived(config[size]);
  let heights = $derived([6 * unit, 9 * unit, 13 * unit]);
  let fills = $derived(colours[variant]);
  let totalWidth = $derived(3 * w + 2 * gap);
  let totalHeight = $derived(heights[2]);
</script>

<svg
  width={totalWidth}
  height={totalHeight}
  viewBox="0 0 {totalWidth} {totalHeight}"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Clearstep AI"
>
  {#each [0, 1, 2] as i}
    <rect
      x={i * (w + gap)}
      y={totalHeight - heights[i]}
      width={w}
      height={heights[i]}
      {rx}
      fill={fills[i]}
      class={animate ? 'bar' : ''}
      style={animate ? `animation-delay: ${i * 150}ms` : ''}
    />
  {/each}
</svg>

<style>
  .bar {
    animation: grow-bar 800ms ease-out both;
    transform-origin: bottom;
  }

  @keyframes grow-bar {
    from {
      transform: scaleY(0);
      opacity: 0;
    }
    to {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .bar {
      animation: none;
    }
  }
</style>
