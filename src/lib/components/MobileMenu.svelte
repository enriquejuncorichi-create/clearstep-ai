<script lang="ts">
  import { fly } from 'svelte/transition';
  import { mainNav, isNavGroup } from '$lib/data/navigation';

  let { open = $bindable(false) }: { open?: boolean } = $props();

  let expandedGroup = $state<string | null>(null);

  function close() {
    open = false;
    expandedGroup = null;
  }

  function toggleGroup(label: string) {
    expandedGroup = expandedGroup === label ? null : label;
  }

  /** Trap focus inside the menu when it is open */
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      close();
    }
  }

  // Lock body scroll when menu is open
  $effect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  });
</script>

{#if open}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
    role="presentation"
    onclick={close}
    transition:fly={{ duration: 200 }}
  ></div>

  <!-- Slide-in panel -->
  <div
    class="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-brand-deep flex flex-col"
    role="dialog"
    aria-modal="true"
    aria-label="Navigation menu"
    tabindex="-1"
    onkeydown={handleKeydown}
    transition:fly={{ x: 300, duration: 300 }}
  >
    <!-- Close button -->
    <div class="flex justify-end p-6">
      <button
        onclick={close}
        class="text-white text-3xl cursor-pointer hover:text-brand-pale transition-colors"
        aria-label="Close menu"
      >
        &times;
      </button>
    </div>

    <!-- Navigation links -->
    <nav class="flex-1 overflow-y-auto px-8">
      <ul class="flex flex-col gap-2">
        {#each mainNav as item (isNavGroup(item) ? item.label : item.href)}
          <li>
            {#if isNavGroup(item)}
              <!-- Accordion group -->
              <button
                onclick={() => toggleGroup(item.label)}
                class="flex w-full items-center justify-between py-3 text-white text-2xl font-medium cursor-pointer hover:text-brand-pale transition-colors"
                aria-expanded={expandedGroup === item.label}
              >
                {item.label}

                <!-- Chevron -->
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition-transform duration-200 {expandedGroup === item.label
                    ? 'rotate-90'
                    : ''}"
                  aria-hidden="true"
                >
                  <polyline points="7 5 13 10 7 15" />
                </svg>
              </button>

              <!-- Accordion children -->
              {#if expandedGroup === item.label}
                <ul
                  class="accordion-children flex flex-col gap-1 pb-3 pl-4 border-l-2 border-brand-mid/40 ml-2"
                >
                  {#each item.children as child (child.href)}
                    <li>
                      <a
                        href={child.href}
                        class="block py-2 text-lg text-white/80 hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep"
                        onclick={close}
                      >
                        {child.label}
                      </a>
                    </li>
                  {/each}
                </ul>
              {/if}
            {:else}
              <!-- Plain link -->
              <a
                href={item.href}
                class="block py-3 text-white text-2xl font-medium hover:text-brand-pale transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep"
                onclick={close}
              >
                {item.label}
              </a>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>

    <!-- Footer area -->
    <div class="px-8 pb-8 pt-4">
      <!-- Contact details -->
      <p class="text-sm text-white/60 mb-6">
        <a href="mailto:hello@clearstep.ai" class="hover:text-white transition-colors">
          hello@clearstep.ai
        </a>
      </p>

      <!-- CTA -->
      <a
        href="/contact"
        class="flex items-center justify-center w-full px-8 py-4 bg-brand-slate text-white rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
        onclick={close}
      >
        Book a Call
      </a>
    </div>
  </div>
{/if}

<style>
  .accordion-children {
    animation: accordion-open 250ms ease-out;
  }

  @keyframes accordion-open {
    from {
      opacity: 0;
      max-height: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      max-height: 500px;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .accordion-children {
      animation: none;
    }
  }
</style>
