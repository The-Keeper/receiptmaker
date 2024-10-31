<script lang="ts">
	import { items, order, list, addOrderItem } from '$lib/store';
	import { Button, Label, Input, Select } from 'svelte-5-ui-lib';
</script>

<div class="w-full items-grid">
	{#each $items as item, index}
		<Button onclick={ () => addOrderItem(item) }>{ item.title }</Button>
	{/each}
</div>


<table class="w-full text-left">
	<thead>
		<tr>
			<th class="py-2">Наименование</th>
			<th class="min-w-[44px] py-2 text-center">шт.</th>
		</tr>
	</thead>
	<tbody>
		{#each $list as rec, index}
			<tr>
				<td class="py-1">{ rec.title }</td>
				<td class="min-w-[44px] text-center"><Input type="number" bind:value={$order[index].qty} /></td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}
</style>