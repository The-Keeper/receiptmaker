<script lang="ts">
	import { list, order } from '$lib/store';
	import { CloseCircleSolid } from 'flowbite-svelte-icons';
	import { A } from '@mobily/ts-belt';
</script>

<div>
	<button color="alternative" onclick={() => ($order = [])}>Очистить заказ</button>

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
						><input type="number" bind:value={$order[index].qty} /></td
					>
					<td
						><button onclick={() => $order = A.removeAt($order, index)} class="p-1" color="red"
							><CloseCircleSolid /></button
						></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
