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
			<div class="flex justify-between">
				<button onclick={() => { $items = A.swapAt($items, index, index-1)}} disabled={index == 0} class="p-1" color="alternative"><ArrowLeftOutline class="w-4 h-4" /></button>
				<button onclick={() => { $items = A.removeAt($items, index) }} class="p-1 text-red"><CloseCircleSolid class="w-4 h-4" /></button>
				<button onclick={() => { $items = A.swapAt($items, index, index+1)}} disabled={index == $items.length - 1} class="p-1" color="alternative"><ArrowRightOutline  class="w-4 h-4" /></button>
			</div>
			<div>
				<input aria-describedby="name" class="input" placeholder="название товара" bind:value={item.title} />
				<input type="number" aria-describedby="price" class="input" placeholder="цена" required bind:value={item.price} />

			</div>
		</div>
	{/each}
	<button type="button" onclick={addItem} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Добавить</button>

</div>

<style>
	.items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}
</style>
