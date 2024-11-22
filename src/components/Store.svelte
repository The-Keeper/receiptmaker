<script lang="ts">
	import { items } from '$lib/store';
	import { Button, Input } from 'svelte-5-ui-lib';
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
				<Button onclick={() => $items = A.swapAt($items, index, index-1)} disabled={index == 0} pill={true} class="p-1" color="alternative"><ArrowLeftOutline class="w-4 h-4" /></Button>
				<Button onclick={() => $items = A.removeAt($items, index) } pill={true} class="p-1" color="red"><CloseCircleSolid /></Button>
				<Button onclick={() => $items = A.swapAt($items, index, index+1)} disabled={index == $items.length - 1} pill={true} class="p-1" color="alternative"><ArrowRightOutline  class="w-4 h-4" /></Button>
			</div>
			<div>
				<Input bind:value={item.title} />
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
