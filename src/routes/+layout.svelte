<script lang="ts">
	import '../app.css';
	import "@unocss/reset/tailwind.css";
	import "virtual:uno.css";

	const { children } = $props();

	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const activeUrl = $state($page.url.pathname);

 </script>
  
<header class="color-red">
	<div class="flex">
		<a href={`${base}/receipts`}>Чеки</a>
		<a href={`${base}/store`}>Склад</a>
		<a href={`${base}/settings`}>Настройки</a>
	</div>
</header>


	<main class="h-full w-full overflow-y-auto">
		{@render children()}
	</main>
