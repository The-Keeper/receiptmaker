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

		<button onclick = { Print }><PrinterSolid class="me-2 h-4 w-4" /> Напечатать</button>

		</div>
		<OrderSelection></OrderSelection>
	</div>
</div>