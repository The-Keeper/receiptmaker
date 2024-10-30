<script lang="ts">
    import { items, settings } from "$lib/store";
	import Receipt from "../components/Receipt.svelte";

    let orders = $state(new Map());

    orders.set("Товар 1", { qty: 5 })

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
{ JSON.stringify($items) }

<div>
    <button on:click={ () => settings.reset() }>reset settings</button>
    <button on:click={ () => items.reset() }>reset items</button>
</div>

<Receipt { orders }></Receipt>