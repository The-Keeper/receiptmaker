<script lang="ts">
    import { settings } from "$lib/store";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
{ JSON.stringify($settings) }

<button on:click={ () => settings.reset() }>reset settings</button>