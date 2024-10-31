<script lang="ts">
	import { items, order } from '$lib/store';

	
</script>

<div>
	{#each $items as item, index}
		<button on:click={ () => {
		
			// let qty = $order.get(index)?.qty || 0 + 1;
			// $order.set(index, { qty })

		} }>{ item.title }</button>
	{/each}
</div>

<div>
	{#each $order as orderItem}
	<div>
		<div>{ $items[orderItem.index].title }</div>
		<input bind:value={orderItem.qty} />
	</div>
	{/each}
</div>
