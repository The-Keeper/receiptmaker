<script lang="ts">
	import { items, order, addOrderItem } from '$lib/store';

	let list = $derived([...$order].map((o) => {
		let data = $items.find(i => i.id == o.item_id)
		return { ...o, ...data, sum: ( data?.price || 0 ) * o.qty }
	}))

</script>

<div>
	{#each $items as item, index}
		<button onclick={ () => addOrderItem(item) }>{ item.title }</button>
	{/each}
</div>

<div>
	{#each list as orderItem, index}
	<div>
		<div>{ orderItem.item_id }</div>
		<input bind:value={$order[index].qty} />
	</div>
	{/each}
</div>
