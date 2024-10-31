<script lang="ts">
	import { items, order, list, addOrderItem } from '$lib/store';
</script>

<div>
	{#each $items as item, index}
		<button onclick={ () => addOrderItem(item) }>{ item.title }</button>
	{/each}
</div>

<div>
	{#each $list as orderItem, index}
	<div>
		<div>{ orderItem.item_id }</div>
		<input bind:value={$order[index].qty} />
	</div>
	{/each}
</div>
