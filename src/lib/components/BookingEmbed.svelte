<script lang="ts">
  let { url = '' }: { url?: string } = $props();
</script>

<div class="space-y-6">
  <div>
    <h3 class="text-xl font-bold text-brand-deep mb-2">Prefer to talk it through?</h3>
    <p class="text-gray-600 text-sm leading-relaxed">
      Book a 30-minute discovery call. No pitch, no pressure — just a conversation about where AI could help.
    </p>
  </div>

  {#if url}
    <iframe
      src={url}
      title="Book a discovery call"
      class="w-full border-0 rounded-lg"
      style="min-height: 600px;"
      loading="lazy"
    ></iframe>
  {:else}
    <div class="bg-brand-wash rounded-xl p-8 text-center">
      <p class="text-brand-deep/50 font-medium text-sm">Booking calendar coming soon</p>
      <p class="text-gray-600 text-sm mt-2">In the meantime, drop us an email and we'll arrange a time.</p>
    </div>
  {/if}

  <div class="pt-4 border-t border-gray-100 space-y-2">
    <p class="text-sm text-gray-600">
      <strong class="text-gray-700">Email:</strong>
      <a href="mailto:hello@clearstep.ai" class="text-brand-mid hover:text-brand-deep transition-colors">hello@clearstep.ai</a>
    </p>
    <p class="text-sm text-gray-600">
      <strong class="text-gray-700">Phone:</strong> +44 (0) XXXX XXX XXX
    </p>
  </div>
</div>
