<script lang="ts">
  import { Mail } from 'lucide-svelte';

  let { url = '' }: { url?: string } = $props();
</script>

<div class="space-y-6">
  <div>
    <h3 class="text-xl font-semibold text-brand-deep mb-2">Prefer to talk it through?</h3>
    <p class="text-brand-text-muted text-sm leading-relaxed">
      Book a 30-minute discovery call. No pitch, no pressure — just a conversation about where AI could help.
    </p>
  </div>

  {#if url}
    <iframe
      src={url}
      title="Book a discovery call"
      class="w-full border-0 rounded-lg min-h-[400px] md:min-h-[600px]"
      loading="lazy"
    ></iframe>
  {:else}
    <div class="bg-brand-wash rounded-xl p-8 text-center border border-brand-warm-200">
      <p class="text-brand-deep/50 font-medium text-sm">Booking calendar coming soon</p>
      <p class="text-brand-text-muted text-sm mt-2">In the meantime, drop us an email and we'll arrange a time.</p>
    </div>
  {/if}

  <div class="pt-4 border-t border-brand-warm-200 space-y-3">
    <p class="text-sm text-brand-text-muted flex items-center gap-2">
      <Mail size={16} strokeWidth={1.5} class="text-brand-mid shrink-0" />
      <a href="mailto:hello@clearstep.ai" class="text-brand-mid hover:text-brand-deep transition-colors">hello@clearstep.ai</a>
    </p>
    <p class="text-sm text-brand-text-muted flex items-center gap-2">
      <Mail size={16} strokeWidth={1.5} class="text-brand-mid shrink-0" aria-hidden="true" />
      <a href="mailto:hello@clearstep.ai" class="text-brand-mid hover:text-brand-deep transition-colors">hello@clearstep.ai</a>
    </p>
  </div>
</div>
