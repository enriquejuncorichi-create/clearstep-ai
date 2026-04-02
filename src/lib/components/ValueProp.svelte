<script lang="ts">
  let { title, description }: { title: string; description: string } = $props();
</script>

<div class="text-center">
  <h3 class="text-lg font-bold text-brand-deep mb-2">{title}</h3>
  <p class="text-sm text-gray-600 leading-relaxed">{description}</p>
</div>
