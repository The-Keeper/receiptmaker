<script lang="ts">  
    import { items, settings, order } from "$lib/store";
    
    import Settings from "../components/Settings.svelte";
	import OrderSelection from "../components/OrderSelection.svelte";
	import Receipt from "../components/Receipt.svelte";

</script>

{ JSON.stringify($items) }
{ JSON.stringify($order) }
<button on:click={ () => $order = [{index: 1, qty: 5} ] }>set item</button>

<Settings></Settings>

<div>
    <button on:click={ () => settings.reset() }>reset settings</button>
    <button on:click={ () => items.reset() }>reset items</button>
    <button on:click={ () => order.reset() }>reset order</button>

</div>

<Receipt></Receipt>
<OrderSelection></OrderSelection>
