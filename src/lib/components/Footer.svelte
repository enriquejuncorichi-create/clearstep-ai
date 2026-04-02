<script lang="ts">
  import BrandBars from './BrandBars.svelte';

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/how-we-work', label: 'How We Work' },
    { href: '/contact', label: 'Contact' },
  ];

  const year = new Date().getFullYear();
</script>

<footer>
  <div class="flex h-1.5">
    <div class="flex-1 bg-brand-pale"></div>
    <div class="flex-1 bg-brand-mid"></div>
    <div class="flex-1 bg-brand-deep"></div>
  </div>

  <div class="bg-brand-wash">
    <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <BrandBars size="sm" />
          <span class="text-xl font-medium text-brand-deep">
            clearstep <span class="text-brand-mid">ai</span>
          </span>
        </div>
        <p class="text-sm font-medium text-brand-deep/65">
          We build it. We teach it. You own it.
        </p>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-brand-deep tracking-wider uppercase mb-4">
          Quick Links
        </h3>
        <nav class="flex flex-col gap-3">
          {#each quickLinks as { href, label }}
            <a href={href} class="text-sm text-gray-600 hover:text-brand-deep transition-colors">
              {label}
            </a>
          {/each}
        </nav>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-brand-deep tracking-wider uppercase mb-4">
          Get in Touch
        </h3>
        <div class="flex flex-col gap-3 text-sm text-gray-600">
          <a href="mailto:hello@clearstep.ai" class="hover:text-brand-deep transition-colors">
            hello@clearstep.ai
          </a>
          <p>Based on the south coast, UK</p>
        </div>
      </div>
    </div>

    <div class="border-t border-brand-pale/50">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <p class="text-xs text-gray-400 text-center">
          &copy; {year} Clearstep AI. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
