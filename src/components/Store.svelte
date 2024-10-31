<script lang="ts">
	import { settings, items } from '$lib/store';
	import { Button, Input } from 'svelte-5-ui-lib';

	function addItem() {
		let newItems = $items;
		newItems.push({ id: new Date().toISOString(), title: `Товар ${$items.length}`, price: 0 });
		$items = newItems;
	}
</script>

<h3>Настройки</h3>

<div class="items-grid gap-2">
	{#each $items as item}
		<div class="block">
			<Input bind:value={item.title} />
			<div>
				<Input type="number" bind:value={item.price} />
			</div>
		</div>
	{/each}
	<Button onclick={addItem}>Добавить</Button>
</div>

<style>
	.items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}
</style>
