<script lang="ts">
	import { settings, items } from '$lib/store';
</script>

<div>
	{#each $items as item}
	<div>
		<input bind:value={item.title} />
		<input bind:value={item.price} />
	</div>
	{/each}
</div>
