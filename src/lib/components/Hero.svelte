<script lang="ts">
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';

  let {
    variant = 'static',
    videoSrc,
    posterSrc,
    title,
    subtitle,
    size = 'short',
    accentPosition = 'center',
    children,
  }: {
    variant?: 'video' | 'static';
    videoSrc?: string;
    posterSrc?: string;
    title?: string;
    subtitle?: string;
    size?: 'full' | 'short';
    accentPosition?: 'left' | 'right' | 'center';
    children?: Snippet;
  } = $props();

  let heroElement = $state<HTMLElement | undefined>(undefined);
  let videoElement = $state<HTMLVideoElement | undefined>(undefined);

  let isClient = $state(false);
  let prefersReducedMotion = $state(false);
  let videoReady = $state(false);
  let videoFailed = $state(false);
  let heroInView = $state(true);

  const hasVideoBackground = $derived(variant === 'video' && Boolean(videoSrc));
  const showPoster = $derived(hasVideoBackground && Boolean(posterSrc));
  const showVideo = $derived(
    isClient && hasVideoBackground && !prefersReducedMotion && !videoFailed
  );

  const accentGradientStyle = $derived.by(() => {
    const positions = {
      left: { first: '20% 60%', second: '60% 20%' },
      right: { first: '80% 40%', second: '40% 70%' },
      center: { first: '30% 50%', second: '70% 30%' },
    } as const;
    const pos = positions[accentPosition ?? 'center'];
    return `radial-gradient(ellipse at ${pos.first}, rgba(55,138,221,0.15) 0%, transparent 60%), radial-gradient(ellipse at ${pos.second}, rgba(181,212,244,0.08) 0%, transparent 50%)`;
  });

  function syncPlayback() {
    if (!videoElement || !showVideo) return;

    if (!heroInView || document.hidden) {
      videoElement.pause();
      return;
    }

    void videoElement.play().catch(() => {
      videoFailed = true;
      videoReady = false;
    });
  }

  let loopFading = $state(false);

  function handleVideoReady() {
    videoReady = true;
    syncPlayback();

    // Seamless loop: cross-fade near the end of the video to mask the cut
    if (videoElement) {
      videoElement.addEventListener('timeupdate', () => {
        if (!videoElement) return;
        const timeLeft = videoElement.duration - videoElement.currentTime;
        loopFading = timeLeft < 0.8 && timeLeft > 0;
      });
    }
  }

  function handleVideoError() {
    videoFailed = true;
    videoReady = false;
  }

  onMount(() => {
    isClient = true;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = (matches: boolean) => {
      prefersReducedMotion = matches;

      if (matches && videoElement) {
        videoElement.pause();
      }
    };

    updateMotionPreference(motionQuery.matches);

    const handleMotionChange = (event: MediaQueryListEvent) => {
      updateMotionPreference(event.matches);
      syncPlayback();
    };

    const handleVisibilityChange = () => {
      syncPlayback();
    };

    motionQuery.addEventListener('change', handleMotionChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let observer: IntersectionObserver | undefined;

    if (heroElement && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          heroInView = entry?.isIntersecting ?? true;
          syncPlayback();
        },
        { threshold: 0.2 }
      );

      observer.observe(heroElement);
    }

    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  });

  $effect(() => {
    syncPlayback();
  });
</script>

<section
  bind:this={heroElement}
  class="relative flex items-center justify-center overflow-hidden {size === 'full'
    ? 'min-h-screen'
    : 'min-h-[50vh]'}"
>
  {#if hasVideoBackground}
    {#if showPoster}
      <img
        src={posterSrc}
        alt=""
        aria-hidden="true"
        class="absolute inset-0 h-full w-full object-cover pointer-events-none"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />
    {:else}
      <div class="absolute inset-0 bg-brand-deep"></div>
    {/if}

    {#if showVideo}
      <video
        bind:this={videoElement}
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster={posterSrc}
        aria-hidden="true"
        tabindex="-1"
        disablepictureinpicture
        disableremoteplayback
        class="absolute inset-0 h-full w-full object-cover pointer-events-none transition-opacity ease-out {videoReady
          ? loopFading ? 'opacity-0 duration-700' : 'opacity-100 duration-700'
          : 'opacity-0 duration-700'}"
        onloadeddata={handleVideoReady}
        onerror={handleVideoError}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    {/if}

    <div class="absolute inset-0 pointer-events-none bg-gradient-to-b from-brand-navy/82 via-brand-navy/38 to-brand-navy/78"></div>
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(circle at center, rgba(133, 183, 235, 0.14) 0%, rgba(26, 26, 46, 0.44) 76%);"
    ></div>
  {:else}
    <div class="absolute inset-0 bg-brand-navy"></div>
    <div class="absolute inset-0" style="background: {accentGradientStyle}"></div>
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 32px 32px;"></div>
  {/if}

  <div class="relative z-10 text-center px-6 pt-24 pb-12 max-w-4xl mx-auto drop-shadow-[0_12px_30px_rgba(8,18,36,0.4)]">
    {#if title}
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-4">
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

  {#if hasVideoBackground && size === 'full'}
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none"
      aria-hidden="true"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" opacity="0.6">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  {/if}
</section>
