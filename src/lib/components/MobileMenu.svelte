<script lang="ts">
  let { open = $bindable(false) }: { open?: boolean } = $props();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/how-we-work', label: 'How We Work' },
    { href: '/contact', label: 'Contact' },
  ];

  function close() {
    open = false;
  }
</script>

{#if open}
  <div
    class="fixed inset-0 z-50 bg-brand-deep flex flex-col items-center justify-center"
    role="dialog"
    aria-modal="true"
    aria-label="Navigation menu"
  >
    <button
      onclick={close}
      class="absolute top-6 right-6 text-white text-3xl cursor-pointer"
      aria-label="Close menu"
    >
      &times;
    </button>

    <nav class="flex flex-col items-center gap-8">
      {#each links as { href, label }}
        <a
          {href}
          class="text-white text-2xl font-medium hover:text-brand-pale transition-colors"
          onclick={close}
        >
          {label}
        </a>
      {/each}
    </nav>

    <a
      href="/contact"
      class="mt-12 inline-flex items-center px-8 py-4 bg-brand-slate text-white rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
      onclick={close}
    >
      Book a Call
    </a>
  </div>
{/if}
