<script lang="ts">
	import '../app.css';
	import "@unocss/reset/tailwind.css";
	import "virtual:uno.css";

	import * as t from "$t18s/messages";

	import { locale, setLocale, locales } from "$t18s";
    import { browser } from "$app/environment";

	$effect(() => { if (browser) { 
		document.documentElement.lang = $locale 
		}
	})

	const { children } = $props();

	import { base } from '$app/paths';
	import { ReceiptOutline, StoreOutline, UserSettingsOutline } from 'flowbite-svelte-icons';
	import NavItem from '../components/NavItem.svelte';

</script>


{#key $locale}

<div class="relative flex justify-center gap-2 p-3 flex-wrap md:p-5 md:w-64 md:fixed md:flex-col">
	<NavItem href={`${base}/receipts`}><ReceiptOutline/> {t.receipts()}</NavItem>
	<NavItem href={`${base}/store`}><StoreOutline /> {t.store()}</NavItem>
	<NavItem href={`${base}/settings`}><UserSettingsOutline /> {t.settings()}</NavItem>

	<div>
		{#each locales as l}
			<button onclick={() => setLocale(l)}>{l}</button>
		{/each}
	</div>

	<div>current locale: {$locale}</div>
	<h1>{ t.test() }</h1>

</div>


<main class="md:ml-64 p-4">
	{@render children()}
</main>

{/key}
