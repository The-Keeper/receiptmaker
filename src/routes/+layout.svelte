<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	let { children } = $props();

	import { Button, Sidebar, SidebarButton, SidebarGroup, SidebarItem, SidebarCta, uiHelpers } from 'svelte-5-ui-lib';

	import { DarkMode } from 'flowbite-svelte';
	let activeUrl = $derived($page.url.pathname);
	import { ReceiptSolid, CloseOutline, StoreSolid, UserSettingsSolid, ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';

	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
  
	const sidebarUi = uiHelpers();
	let isSidebarOpen = $state(false);
	$effect(() => {
		isSidebarOpen = sidebarUi.isOpen;
	});

	import { items } from '$lib/store';

 </script>
  
  <header class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
	<SidebarButton onclick={ sidebarUi.toggle } class="mb-2" />
</header>

  <div class="overflow-hidden lg:flex">
  <Sidebar isOpen={isSidebarOpen} closeSidebar={sidebarUi.close}  activeClass="p-2" nonActiveClass="p-2">
	  <SidebarGroup>
		<SidebarItem label="Чеки" href="/receipts" active={ activeUrl === '/receipts' }>
			{#snippet iconSlot()}
				<ReceiptSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			{/snippet}
		  </SidebarItem>
		<SidebarItem label="Склад" {spanClass}  href="/store" active={activeUrl === '/store'}>
			{#snippet iconSlot()}
			<StoreSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			{/snippet}
			{#snippet subtext()}
			<span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> { $items.length } </span>
			{/snippet}
		</SidebarItem>
		<SidebarItem label="Настройки" href="/settings" active={activeUrl === '/settings'}>
			{#snippet iconSlot()}
			  <UserSettingsSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			  {/snippet}
			</SidebarItem>
		<div>
			<div class="flex justify-center">
				<DarkMode />
			</div>
		</div>
	  </SidebarGroup>
  </Sidebar>

  	<main class="h-full w-full overflow-y-auto lg:ml-64 pt-[70px]">
		{@render children()}
	</main>
</div>
