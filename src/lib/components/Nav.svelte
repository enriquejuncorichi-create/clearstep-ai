<script lang="ts">
  import { page } from '$app/state';
  import BrandBars from './BrandBars.svelte';
  import MobileMenu from './MobileMenu.svelte';

  let { transparent = false }: { transparent?: boolean } = $props();

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/how-we-work', label: 'How We Work' },
    { href: '/contact', label: 'Contact' },
  ];

  $effect(() => {
    function handleScroll() {
      scrolled = window.scrollY > 50;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  let showSolid = $derived(!transparent || scrolled);
</script>

<header
  class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 {showSolid
    ? 'bg-white shadow-sm'
    : 'bg-transparent'}"
>
  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
    <a href="/" class="flex items-center gap-3">
      <BrandBars size="sm" variant={showSolid ? 'light' : 'dark'} />
      <span
        class="text-xl font-medium {showSolid ? 'text-brand-deep' : 'text-white'}"
      >
        clearstep <span class="text-brand-mid">ai</span>
      </span>
    </a>

    <nav class="hidden lg:flex items-center gap-8">
      {#each links as { href, label }}
        <a
          {href}
          class="text-sm font-medium transition-colors {showSolid
            ? 'text-gray-600 hover:text-brand-deep'
            : 'text-white/80 hover:text-white'} {page.url.pathname === href
            ? showSolid
              ? '!text-brand-deep'
              : '!text-white'
            : ''}"
        >
          {label}
        </a>
      {/each}
    </nav>

    <a
      href="/contact"
      class="hidden lg:inline-flex items-center px-5 py-2.5 bg-brand-slate text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
    >
      Book a Call
    </a>

    <button
      class="lg:hidden cursor-pointer"
      onclick={() => (mobileOpen = true)}
      aria-label="Open menu"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={showSolid ? '#185FA5' : 'white'}
        stroke-width="2"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  </div>
</header>

<MobileMenu bind:open={mobileOpen} />
