<script lang="ts">
	import { items, order, list, addOrderItem } from '$lib/store';
	import { Button, Label, Input, Select } from 'svelte-5-ui-lib';
</script>

<div class="flex gap-2">
	{#each $items as item, index}
		<Button onclick={ () => addOrderItem(item) }>{ item.title }</Button>
	{/each}
</div>

<div class="flex">
	{#each $list as orderItem, index}
	<div>
			{ orderItem.title }
			<Input type="number" bind:value={$order[index].qty} />
	</div>
	{/each}
</div>
