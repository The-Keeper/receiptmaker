<script lang="ts">
	import '../app.css';
	import "@unocss/reset/tailwind.css";
	import "virtual:uno.css";

	const { children } = $props();

	import { Darkmode, Sidebar, SidebarButton, SidebarGroup, SidebarItem } from 'svelte-5-ui-lib';
	import { ReceiptSolid, StoreSolid, UserSettingsSolid } from 'flowbite-svelte-icons';
    import { uiHelpers } from 'svelte-5-ui-lib';

	const spanClass = 'flex-1 ms-3 whitespace-nowrap';
  
	const SIDEBAR_BREAKPOINT = "md"
	const SIDEBAR_BREAKPOINT_SZ = 768;

	let innerWidth = $state(0);

	const sidebarUi = uiHelpers();
	let isSidebarOpen = $state(false);
	$effect(() => {
		isSidebarOpen = sidebarUi.isOpen || innerWidth >= SIDEBAR_BREAKPOINT_SZ;
	});

	import { items } from '$lib/store';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const activeUrl = $state($page.url.pathname);

 </script>
  
<header class="md:hidden">
	<SidebarButton onclick={sidebarUi.toggle} class="mb-2" />
</header>

<svelte:window bind:innerWidth={innerWidth} />

<div class="relative">
	<Sidebar breakpoint={SIDEBAR_BREAKPOINT} backdrop={false} isOpen={isSidebarOpen} closeSidebar={sidebarUi.close} activeClass="p-2" nonActiveClass="p-2">
		<SidebarGroup>
		<SidebarItem label="Чеки"  href={`${base}/receipts`}>
			{#snippet iconSlot()}
				<ReceiptSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			{/snippet}
		  </SidebarItem>
		<SidebarItem label="Склад" {spanClass} href={`${base}/store`}>
			{#snippet iconSlot()}
			<StoreSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			{/snippet}
			{#snippet subtext()}
			<span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> { $items.length } </span>
			{/snippet}
		</SidebarItem>
		<SidebarItem label="Настройки"  href={`${base}/settings`}>
			{#snippet iconSlot()}
			  <UserSettingsSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			  {/snippet}
			</SidebarItem>
		<div>
			<div class="flex justify-center">
				<Darkmode />
			</div>
		</div>
	  </SidebarGroup>
  </Sidebar>
   <!-- according to SIDEBAR_BREAKPOINT: ml-64 -->
	<main class="h-full w-full overflow-y-auto md:ms-64 pt-[70px]">
		{@render children()}
	</main>

</div>