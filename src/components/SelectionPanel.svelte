<script lang="ts">
	import { addOrderItem, items } from '$lib/store';
	import { Button } from 'svelte-5-ui-lib';
</script>

<div class="w-full items-grid gap-2">
	{#each $items as item, index}
		<Button onclick={ () => addOrderItem(item) }>{ item.title }</Button>
	{/each}
</div>

<style>
	.items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}
</style>