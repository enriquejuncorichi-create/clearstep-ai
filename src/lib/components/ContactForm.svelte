<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from './Button.svelte';

	let { form }: { form: any } = $props();

	const companySizes = ['1–10', '11–50', '51–200', '200+'];
</script>

{#if form?.success}
	<div class="text-center py-12">
		<div class="text-4xl mb-4">&#10003;</div>
		<h3 class="text-2xl font-bold text-brand-deep mb-2">Message sent</h3>
		<p class="text-gray-600">We'll be in touch within one working day.</p>
		<p class="text-sm font-medium text-brand-deep/65 mt-4">We build it. We teach it. You own it.</p>
	</div>
{:else}
	<form method="POST" use:enhance class="space-y-5">
		<div>
			<label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
			<input
				id="name"
				name="name"
				type="text"
				value={form?.values?.name ?? ''}
				class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent"
			/>
			{#if form?.errors?.name}<p class="text-red-500 text-xs mt-1">{form.errors.name}</p>{/if}
		</div>

		<div>
			<label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
			<input
				id="email"
				name="email"
				type="email"
				value={form?.values?.email ?? ''}
				class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent"
			/>
			{#if form?.errors?.email}<p class="text-red-500 text-xs mt-1">{form.errors.email}</p>{/if}
		</div>

		<div>
			<label for="company" class="block text-sm font-medium text-gray-700 mb-1">Company</label>
			<input
				id="company"
				name="company"
				type="text"
				value={form?.values?.company ?? ''}
				class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent"
			/>
		</div>

		<div>
			<label for="companySize" class="block text-sm font-medium text-gray-700 mb-1"
				>Company size</label
			>
			<select
				id="companySize"
				name="companySize"
				class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent bg-white"
			>
				<option value="">Select...</option>
				{#each companySizes as size}
					<option value={size} selected={form?.values?.companySize === size}>{size} employees</option
					>
				{/each}
			</select>
		</div>

		<div>
			<label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
			<textarea
				id="message"
				name="message"
				rows="5"
				class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent resize-none"
			>{form?.values?.message ?? ''}</textarea>
			{#if form?.errors?.message}<p class="text-red-500 text-xs mt-1">{form.errors.message}</p>{/if}
		</div>

		<Button variant="primary" type="submit">Send Message</Button>
	</form>
{/if}
