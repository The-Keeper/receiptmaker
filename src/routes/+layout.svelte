<script lang="ts">
	import '../app.css';
	import "@unocss/reset/tailwind.css";
	import "virtual:uno.css";

	const { children } = $props();

	import { base } from '$app/paths';
	import { ReceiptOutline, StoreOutline, UserSettingsOutline } from 'flowbite-svelte-icons';
	import NavItem from '../components/NavItem.svelte';

	import LL, { locale, setLocale } from '../i18n/i18n-svelte';

	const hello = $derived($LL.HI({name: 'wow'}).length);

 </script>

{#key $locale}
	<div class="relative flex justify-center gap-2 p-3 flex-wrap md:p-5 md:w-64 md:fixed md:flex-col">
		<NavItem href={`${base}/receipts`}><ReceiptOutline/> Чеки</NavItem>
		<NavItem href={`${base}/store`}><StoreOutline /> Склад</NavItem>
		<NavItem href={`${base}/settings`}><UserSettingsOutline /> Настройки</NavItem>
	
		<div>{ $locale }</div>
		<button onclick={() => setLocale('en')} >EN</button>

		<div>
			{ hello }
		</div>
	</div>


	<main class="md:ml-64 p-4">
		{@render children()}
	</main>

{/key}