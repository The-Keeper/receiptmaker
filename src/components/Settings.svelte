<script lang="ts">
	import { settings, items } from '$lib/store';
</script>

<h3>Настройки</h3>

<div>
	{#each $items as item}
	<div>
		<input bind:value={item.title} />
		<input bind:value={item.price} />
	</div>
	{/each}
</div>
