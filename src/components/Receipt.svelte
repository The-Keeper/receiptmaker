<script lang="ts">
	import { settings, items } from '$lib/store';


	let { orders }: { orders: Map<string, { qty: number }> } = $props();

	let list = $derived([...orders].map(([name, order]) => {
		let data = $items.find( item => item.title == name )
		return { ...order, ...data, sum: ( data?.price || 0 ) * order.qty }
	}))

</script>

<div class="w-80 rounded bg-gray-50 px-6 pt-8 shadow-lg">
	<img
		src=""
		alt=""
		class="mx-auto w-16 py-4"
	/>
	<div class="flex flex-col items-center justify-center gap-2">
		<h4 class="font-semibold">{ $settings.name }</h4>
		<p class="text-xs">{ $settings.address }</p>
	</div>
	<div class="flex flex-col gap-3 border-b py-6 text-xs">
		<p class="flex justify-between">
			<span class="text-gray-400">Дата:</span>
			<span>{ new Date().toLocaleDateString() } { new Date().toLocaleTimeString() }</span>
		</p>
		<!-- 
		<p class="flex justify-between">
			<span class="text-gray-400">Номер чека:</span>
			<span>#номер</span>
		</p>
		<p class="flex justify-between">
			<span class="text-gray-400">Кассир:</span>
			<span>Имя</span>
		</p> 
		-->
	</div>
	<div class="flex flex-col gap-3 pb-6 pt-2 text-xs">
		<table class="w-full text-left">
			<thead>
				<tr class="flex">
					<th class="w-full py-2">Ед.</th>
					<th class="min-w-[44px] py-2">шт.</th>
					<th class="min-w-[44px] py-2">Сумма</th>
				</tr>
			</thead>
			<tbody>
                {#each list as order, index}
                    <tr class="flex">
                        <td class="flex-1 py-1">{ order.title }</td>
                        <td class="min-w-[44px]">{ order.qty }</td>
                        <td class="min-w-[44px]">{ order.sum }</td>
                    </tr>
                {/each}
			</tbody>
		</table>
		<div class=" border border-b border-dashed"></div>
		<div class="flex flex-col items-center justify-center gap-2 py-4">
			<p class="flex gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					><path
						fill="#000"
						d="M11.05 14.95L9.2 16.8c-.39.39-1.01.39-1.41.01-.11-.11-.22-.21-.33-.32a28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.1.1.21.2.31.3.4.39.41 1.03.01 1.43zM21.97 18.33a2.54 2.54 0 01-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"
					></path></svg
				> { $settings.phone }
			</p>
		</div>
	</div>
</div>
