<script lang="ts">
	import { items, order, list, addOrderItem } from '$lib/store';
	import { Button, Label, Input, Select } from 'svelte-5-ui-lib';
</script>

<table class="block">
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
