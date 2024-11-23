<script lang="ts">
	import { addOrderItem, items } from '$lib/store';
</script>

<div class="w-full items-grid gap-2">
	{#each $items as item, index}
		<button onclick={ () => addOrderItem(item) }>{ item.title }</button>
	{/each}
</div>

<style>
	.items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}
</style>