<script lang="ts">
	import { items } from '$lib/store';
	import { A } from '@mobily/ts-belt';

	import { ArrowLeftOutline, ArrowRightOutline, CloseCircleSolid } from 'flowbite-svelte-icons'

	function addItem() {
		const newItems = $items;
		newItems.push({ id: new Date().toISOString(), title: `Товар ${$items.length}`, price: 0 });
		$items = newItems;
	}

</script>

<div class="items-grid gap-2">
	{#each $items as item, index}
		<div class="block">
			<div>
				<button onclick={() => $items = A.swapAt($items, index, index-1)} disabled={index == 0} class="p-1" color="alternative"><ArrowLeftOutline class="w-4 h-4" /></button>
				<button onclick={() => $items = A.removeAt($items, index) } class="p-1" color="red"><CloseCircleSolid /></button>
				<button onclick={() => $items = A.swapAt($items, index, index+1)} disabled={index == $items.length - 1} class="p-1" color="alternative"><ArrowRightOutline  class="w-4 h-4" /></button>
			</div>
			<div>
				<input bind:value={item.title} />
				<input type="number" bind:value={item.price} />
			</div>
		</div>
	{/each}
	<button onclick={addItem}>Добавить</button>
</div>

<style>
	.items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}
</style>
