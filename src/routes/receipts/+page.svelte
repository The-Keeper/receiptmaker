<script lang="ts">
	import { Button } from 'svelte-5-ui-lib';
	import OrderSelection from '../../components/OrderSelection.svelte';
	import Receipt from '../../components/Receipt.svelte';
	import SelectionPanel from '../../components/SelectionPanel.svelte';

	function Print() {
		window.print()
	}

</script>

<div class="flex flex-col gap-6">
	<SelectionPanel></SelectionPanel>

	<div class="flex flex-wrap gap-4">
		<Receipt></Receipt>
		<OrderSelection></OrderSelection>
	</div>

	<Button onclick = { Print }>Напечатать</Button>
</div>
