<script lang="ts">
	import { list, order } from '$lib/store';
	import { CloseCircleSolid } from 'flowbite-svelte-icons';
	import { A } from '@mobily/ts-belt';
</script>

<div>
	<button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onclick={() => ($order = [])}>Очистить заказ</button>

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
						><input type="number" class="input" bind:value={$order[index].qty} /></td
					>
					<td
						><button onclick={() => { $order = A.removeAt($order, index) }} class="p-1" color="red"
							><CloseCircleSolid /></button
						></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
