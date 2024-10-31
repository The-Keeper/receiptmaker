<script lang="ts">
	import { settings, items } from '$lib/store';
	import { Input } from 'svelte-5-ui-lib';
</script>

<h3>Настройки</h3>

<div>
	{#each $items as item}
	<div>
		<Input bind:value={item.title} />
		<div>
			<Input type="number" bind:value={item.price} />
		</div>
	</div>
	{/each}
</div>
