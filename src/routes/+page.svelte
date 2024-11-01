<script lang="ts">  
    import { items, order, settings } from "$lib/store";
    
    import OrderSelection from "../components/OrderSelection.svelte";
    import Settings from "../components/Settings.svelte";

</script>

{ JSON.stringify($items) }
{ JSON.stringify($order) }

<Settings></Settings>

<div>
    <button on:click={ () => settings.reset() }>reset settings</button>
    <button on:click={ () => items.reset() }>reset items</button>
    <button on:click={ () => order.set([]) }>reset order</button>

</div>

<OrderSelection></OrderSelection>
