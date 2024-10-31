<script lang="ts">  
    import { items, settings, order } from "$lib/store";
    
    import Settings from "../components/Settings.svelte";
	import OrderSelection from "../components/OrderSelection.svelte";
	import Receipt from "../components/Receipt.svelte";

</script>

{ JSON.stringify($items) }
{ JSON.stringify($order) }

<Settings></Settings>

<div>
    <button on:click={ () => settings.reset() }>reset settings</button>
    <button on:click={ () => items.reset() }>reset items</button>
    <button on:click={ () => order.set([]) }>reset order</button>

</div>

<Receipt></Receipt>
<OrderSelection></OrderSelection>
