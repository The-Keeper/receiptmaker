<script lang="ts">
	import { Button } from 'svelte-5-ui-lib';
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

		<Button onclick = { Print }><PrinterSolid class="me-2 h-4 w-4" /> Напечатать</Button>

		</div>
		<OrderSelection></OrderSelection>
	</div>
</div>