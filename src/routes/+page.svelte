<script lang="ts">
    import { items, settings } from "$lib/store";
    import Settings from "../components/Settings.svelte";
	import OrderSelection from "../components/OrderSelection.svelte";
	import Receipt from "../components/Receipt.svelte";

    let orders: Map<number, { qty: number }> = $state(new Map());

    orders.set(1, { qty: 5 })

</script>

{ JSON.stringify($items) }

<Settings></Settings>

<div>
    <button on:click={ () => settings.reset() }>reset settings</button>
    <button on:click={ () => items.reset() }>reset items</button>
</div>

<OrderSelection></OrderSelection>
<Receipt { orders }></Receipt>