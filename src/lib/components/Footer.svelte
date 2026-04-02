<script lang="ts">
  import BrandBars from './BrandBars.svelte';
  import { footerNav } from '$lib/data/navigation';
  import { Mail, MapPin } from 'lucide-svelte';

  const year = new Date().getFullYear();
</script>

<footer>
  <div class="flex h-[3px]">
    <div class="flex-1 bg-brand-pale"></div>
    <div class="flex-1 bg-brand-mid"></div>
    <div class="flex-1 bg-brand-deep"></div>
  </div>

  <div class="bg-brand-warm-50">
    <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-3 mb-4">
          <BrandBars size="sm" />
          <span class="text-xl font-medium text-brand-deep">
            clearstep <span class="text-brand-mid">ai</span>
          </span>
        </div>
        <p class="text-sm font-medium text-brand-text-muted">
          We build it. We teach it. You own it.
        </p>
      </div>

      <!-- Services -->
      <div>
        <h3 class="text-sm font-bold text-brand-deep tracking-wider uppercase mb-4">
          Services
        </h3>
        <nav class="flex flex-col gap-3">
          {#each footerNav.services as { href, label }}
            <a href={href} class="text-sm text-brand-text-muted hover:text-brand-deep hover:underline underline-offset-4 decoration-brand-mid/30 transition-colors">
              {label}
            </a>
          {/each}
        </nav>
      </div>

      <!-- Company -->
      <div>
        <h3 class="text-sm font-bold text-brand-deep tracking-wider uppercase mb-4">
          Company
        </h3>
        <nav class="flex flex-col gap-3">
          {#each footerNav.company as { href, label }}
            <a href={href} class="text-sm text-brand-text-muted hover:text-brand-deep hover:underline underline-offset-4 decoration-brand-mid/30 transition-colors">
              {label}
            </a>
          {/each}
        </nav>
      </div>

      <!-- Get in Touch -->
      <div>
        <h3 class="text-sm font-bold text-brand-deep tracking-wider uppercase mb-4">
          Get in Touch
        </h3>
        <div class="flex flex-col gap-3 text-sm text-brand-text-muted">
          <a href="mailto:hello@clearstep.ai" class="flex items-center gap-2 hover:text-brand-deep transition-colors">
            <Mail size={16} strokeWidth={1.5} class="shrink-0" aria-hidden="true" />
            hello@clearstep.ai
          </a>
          <p class="flex items-center gap-2">
            <MapPin size={16} strokeWidth={1.5} class="shrink-0" aria-hidden="true" />
            Based on the south coast, UK
          </p>
        </div>
      </div>
    </div>

    <div class="border-t border-brand-warm-200">
      <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p class="text-xs text-brand-text-muted">
          &copy; {year} Clearstep AI. All rights reserved.
        </p>
        <nav class="flex items-center gap-4">
          {#each footerNav.legal as { href, label }}
            <a href={href} class="text-xs text-brand-text-muted hover:text-brand-deep transition-colors">
              {label}
            </a>
          {/each}
        </nav>
      </div>
    </div>
  </div>
</footer>
