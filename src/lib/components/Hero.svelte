<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    variant = 'static',
    videoSrc,
    posterSrc,
    title,
    subtitle,
    size = 'short',
    children,
  }: {
    variant?: 'video' | 'static';
    videoSrc?: string;
    posterSrc?: string;
    title?: string;
    subtitle?: string;
    size?: 'full' | 'short';
    children?: Snippet;
  } = $props();
</script>

<section
  class="relative flex items-center justify-center overflow-hidden {size === 'full'
    ? 'min-h-screen'
    : 'min-h-[45vh]'}"
>
  {#if variant === 'video' && videoSrc}
    <video
      autoplay
      muted
      loop
      playsinline
      poster={posterSrc}
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-brand-navy/25"></div>
  {:else}
    <div class="absolute inset-0 bg-brand-deep"></div>
  {/if}

  <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
    {#if title}
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        {title}
      </h1>
    {/if}
    {#if subtitle}
      <p class="text-lg md:text-xl text-brand-mid font-medium">
        {subtitle}
      </p>
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </div>

  {#if variant === 'video' && size === 'full'}
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" opacity="0.6">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  {/if}
</section>
