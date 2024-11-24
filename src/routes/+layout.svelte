<script lang="ts">
	import '../app.css';
	import "@unocss/reset/tailwind.css";
	import "virtual:uno.css";

	const { children } = $props();

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { ReceiptOutline, StoreOutline, UserSettingsOutline } from 'flowbite-svelte-icons';

	const activeUrl = $derived($page.url.pathname);

 </script>

{#snippet navitem(href: string)}
	<a class="flex gap-1" {href}>
		{@render children()}
	</a>
{/snippet}

  
	<div class="relative flex justify-center gap-2 p-3 flex-wrap md:p-5 md:w-64 md:fixed md:flex-col">
		<a class="flex p-2 rounded-2 {activeUrl===`${base}/receipts` ? "bg-gray-700" : ""}" href={`${base}/receipts`}><ReceiptOutline/> Чеки</a>
		<a class="flex p-2 rounded-2 {activeUrl===`${base}/store` ? "bg-gray-700" : ""}" href={`${base}/store`}><StoreOutline /> Склад</a>
		<a class="flex p-2 rounded-2 {activeUrl===`${base}/settings` ? "bg-gray-700" : ""}" href={`${base}/settings`}><UserSettingsOutline /> Настройки</a>
	</div>


	<main class="md:ml-64 p-4">
		{@render children()}
	</main>
