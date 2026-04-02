<script lang="ts">
  import { page } from '$app/state';
  import Button from '$lib/components/Button.svelte';
</script>

<section class="min-h-[60vh] flex items-center justify-center bg-brand-warm-50">
  <div class="max-w-lg mx-auto px-6 text-center">
    <p class="text-6xl font-display font-bold text-brand-slate mb-4">{page.status}</p>
    <h1 class="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-deep mb-4">
      {page.status === 404 ? 'Page not found' : 'Something went wrong'}
    </h1>
    <p class="text-brand-text-muted leading-relaxed mb-8">
      {page.status === 404
        ? "The page you're looking for doesn't exist or has been moved."
        : page.error?.message ?? 'An unexpected error occurred.'}
    </p>
    <Button href="/" variant="slate">Back to Home</Button>
  </div>
</section>
