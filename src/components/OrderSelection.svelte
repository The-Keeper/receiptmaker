<script lang="ts">
	import { list, order } from '$lib/store';
	import { Button, Input } from 'svelte-5-ui-lib';
	import { CloseCircleSolid } from 'flowbite-svelte-icons';
	import { A } from '@mobily/ts-belt';
</script>

<div>
	<Button color="alternative" onclick={() => ($order = [])} pill={true}>Очистить заказ</Button>

	<table class="block">
		<thead>
			<tr>
				<th class="p-2">Наименование</th>
				<th class="min-w-[44px] p-2 text-center">шт.</th>
			</tr>
		</thead>
		<tbody>
			{#each $list as rec, index}
				<tr>
					<td class="p-2">{rec.title}</td>
					<td class="min-w-[44px] text-center"
						><Input type="number" bind:value={$order[index].qty} /></td
					>
					<td
						><Button onclick={() => $order = A.removeAt($order, index)} pill={true} class="p-1" color="red"
							><CloseCircleSolid /></Button
						></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
