<script lang="ts">  
	import OrderSelection from "../../components/OrderSelection.svelte";
import Receipt from "../../components/Receipt.svelte";
	import SelectionPanel from "../../components/SelectionPanel.svelte";

</script>

<div class="flex flex-col gap-6">
	<SelectionPanel></SelectionPanel>

	<div class="flex flex-wrap gap-4">
		<Receipt></Receipt>
		<OrderSelection></OrderSelection>
	</div>
</div>