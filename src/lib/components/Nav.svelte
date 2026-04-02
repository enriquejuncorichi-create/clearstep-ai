<script lang="ts">
  import { page } from '$app/state';
  import BrandBars from './BrandBars.svelte';
  import MobileMenu from './MobileMenu.svelte';
  import NavDropdown from './NavDropdown.svelte';
  import { mainNav, isNavGroup } from '$lib/data/navigation';

  let { transparent = false }: { transparent?: boolean } = $props();

  let scrolled = $state(false);
  let mobileOpen = $state(false);
  let currentPath = $derived(page.url.pathname);

  $effect(() => {
    function handleScroll() {
      scrolled = window.scrollY > 50;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  let showSolid = $derived(!transparent || scrolled);

  /** Check whether a path is active — exact match or starts-with for sections */
  function isActive(href: string): boolean {
    if (href === '/') return currentPath === '/';
    return currentPath === href || currentPath.startsWith(href + '/');
  }

  /** For NavGroup items (e.g. Services), check if any child route is active */
  function isGroupActive(children: { href: string }[]): boolean {
    return children.some((child) => currentPath.startsWith(child.href));
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 {showSolid
    ? 'bg-white/70 backdrop-blur-xl shadow-sm border-b border-black/5'
    : 'bg-transparent'}"
>
  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
    <!-- Logo lockup -->
    <a href="/" class="flex items-center gap-3">
      <BrandBars size="sm" variant={showSolid ? 'light' : 'dark'} />
      <span class="text-xl font-medium {showSolid ? 'text-brand-deep' : 'text-white'}">
        clearstep <span class="text-brand-mid">ai</span>
      </span>
    </a>

    <!-- Desktop navigation -->
    <nav class="hidden lg:flex items-center gap-8">
      {#each mainNav as item (isNavGroup(item) ? item.label : item.href)}
        {#if isNavGroup(item)}
          <NavDropdown
            label={item.label}
            children={item.children}
            {showSolid}
            active={isGroupActive(item.children)}
          />
        {:else}
          <a
            href={item.href}
            class="group relative text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mid focus-visible:ring-offset-2 rounded-sm {showSolid
              ? 'text-brand-text hover:text-brand-deep'
              : 'text-white/80 hover:text-white'} {isActive(item.href)
              ? showSolid
                ? '!text-brand-deep'
                : '!text-white'
              : ''}"
          >
            {item.label}
            <!-- Animated underline -->
            <span
              class="pointer-events-none absolute -bottom-1 left-0 h-0.5 bg-brand-mid transition-all duration-300 {isActive(item.href)
                ? 'w-full'
                : 'w-0 group-hover:w-full'}"
            ></span>
          </a>
        {/if}
      {/each}
    </nav>

    <!-- CTA -->
    <a
      href="/contact"
      class="hidden lg:inline-flex items-center px-6 py-2.5 bg-brand-slate text-white text-sm font-medium rounded-full hover:-translate-y-0.5 hover:shadow-md hover:opacity-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mid focus-visible:ring-offset-2"
    >
      Book a Call
    </a>

    <!-- Mobile hamburger -->
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
