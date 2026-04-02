<script lang="ts">
  import type { NavLink } from '$lib/data/navigation';

  let {
    label,
    children,
    showSolid,
    active = false,
  }: {
    label: string;
    children: NavLink[];
    showSolid: boolean;
    /** Whether this group's route is currently active */
    active?: boolean;
  } = $props();

  let isOpen = $state(false);
  let triggerEl = $state<HTMLButtonElement | null>(null);

  // Timeouts don't need reactivity -- plain variables suffice
  let hoverTimeout: ReturnType<typeof setTimeout> | null = null;
  let closeTimeout: ReturnType<typeof setTimeout> | null = null;

  function openDropdown() {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    hoverTimeout = setTimeout(() => {
      isOpen = true;
    }, 150);
  }

  function closeDropdown() {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    }
    closeTimeout = setTimeout(() => {
      isOpen = false;
    }, 300);
  }

  function toggle() {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    }
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    isOpen = !isOpen;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isOpen) {
      isOpen = false;
      triggerEl?.focus();
    }
  }

  /** Keep panel open while the mouse is inside trigger or panel */
  function cancelClose() {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div
  class="relative"
  onmouseenter={openDropdown}
  onmouseleave={closeDropdown}
  role="presentation"
>
  <!-- Trigger button -->
  <button
    bind:this={triggerEl}
    onclick={toggle}
    aria-expanded={isOpen}
    aria-haspopup="true"
    class="group relative flex items-center gap-1 text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mid focus-visible:ring-offset-2 rounded-sm {showSolid
      ? 'text-brand-text hover:text-brand-deep'
      : 'text-white/80 hover:text-white'} {active
      ? showSolid
        ? '!text-brand-deep'
        : '!text-white'
      : ''}"
  >
    {label}

    <!-- Chevron -->
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="transition-transform duration-300 {isOpen ? 'rotate-180' : ''}"
      aria-hidden="true"
    >
      <polyline points="3 5 6 8 9 5" />
    </svg>

    <!-- Animated underline -->
    <span
      class="pointer-events-none absolute -bottom-1 left-0 h-0.5 bg-brand-mid transition-all duration-300 {active
        ? 'w-full'
        : 'w-0 group-hover:w-full'}"
    ></span>
  </button>

  <!-- Invisible bridge to prevent mouse-gap closure -->
  {#if isOpen}
    <div class="absolute top-full left-0 h-3 w-full" aria-hidden="true"></div>
  {/if}

  <!-- Dropdown panel -->
  {#if isOpen}
    <div
      onmouseenter={cancelClose}
      onmouseleave={closeDropdown}
      role="menu"
      tabindex="-1"
      class="dropdown-panel absolute top-[calc(100%+0.75rem)] left-0 bg-white rounded-xl shadow-lg border border-brand-warm-200 p-2 min-w-[280px]"
    >
      {#each children as child (child.href)}
        <a
          href={child.href}
          role="menuitem"
          class="block px-4 py-3 rounded-lg hover:bg-brand-wash transition-colors"
          onclick={() => (isOpen = false)}
        >
          <span class="text-sm font-medium text-brand-text">{child.label}</span>
          {#if child.description}
            <span class="block text-xs text-brand-text-muted mt-0.5">{child.description}</span>
          {/if}
        </a>
      {/each}

      <!-- Divider + View All link -->
      <div class="border-t border-brand-warm-200 mt-2 pt-2">
        <a
          href="/services"
          role="menuitem"
          class="block px-4 py-3 rounded-lg hover:bg-brand-wash transition-colors text-sm font-medium text-brand-deep"
          onclick={() => (isOpen = false)}
        >
          View All Services &rarr;
        </a>
      </div>
    </div>
  {/if}
</div>

<style>
  .dropdown-panel {
    animation: dropdown-enter 200ms ease-out;
  }

  @keyframes dropdown-enter {
    from {
      opacity: 0;
      translate: 0 -8px;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dropdown-panel {
      animation: none;
    }
  }
</style>
