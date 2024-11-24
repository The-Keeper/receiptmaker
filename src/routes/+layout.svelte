<script lang="ts">
	import '../app.css';
	import "@unocss/reset/tailwind.css";
	import "virtual:uno.css";

	const { children } = $props();

	import { base } from '$app/paths';
	import { page, navigating } from '$app/stores';

	const activeUrl = $state($page.url.pathname);

 </script>

 {#if $navigating}
 	<div class="h-full w-full bg-blue">
		
	</div>
 {:else}

<header class="p-3">
	<div class="flex justify-center gap-4">
		<a href={`${base}/receipts`}>Чеки</a>
		<a href={`${base}/store`}>Склад</a>
		<a href={`${base}/settings`}>Настройки</a>
	</div>
</header>


<main class="h-full w-full overflow-y-auto">
	{@render children()}
</main>
{/if}