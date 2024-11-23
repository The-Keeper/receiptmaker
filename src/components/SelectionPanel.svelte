<script lang="ts">
	import { addOrderItem, items } from '$lib/store';
</script>

<div class="w-full items-grid gap-2">
	{#each $items as item, index}
	<button onclick={ () => addOrderItem(item) } type="button" class="p-inline-2 p-block-3 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
		{ item.title }</button>
	{/each}
</div>

<style>
	.items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}
</style>