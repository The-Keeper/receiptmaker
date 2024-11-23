<script lang="ts">
	import OrderSelection from '../../components/OrderSelection.svelte';
	import Receipt from '../../components/Receipt.svelte';
	import SelectionPanel from '../../components/SelectionPanel.svelte';

	import { PrinterSolid } from 'flowbite-svelte-icons';

	function Print() {
		window.print()
	}

</script>

<div class="flex flex-col gap-6">
	<SelectionPanel></SelectionPanel>

	<div class="flex flex-wrap gap-4">

		<div class="flex flex-col gap-4 items-center">
		<Receipt></Receipt>

		<button onclick = { Print } type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
			<PrinterSolid class="me-2 h-4 w-4" /> Напечатать
		</button>


		</div>
		<OrderSelection></OrderSelection>
	</div>
</div>