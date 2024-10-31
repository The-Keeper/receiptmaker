<script lang="ts">
	import { settings, items } from '$lib/store';
	import { Input, NumberInput } from 'flowbite-svelte';
</script>

<h3>Настройки</h3>

<div>
	{#each $items as item}
	<div>
		<Input bind:value={item.title} />
		<div>
			<NumberInput bind:value={item.price} />
		</div>
	</div>
	{/each}
</div>
