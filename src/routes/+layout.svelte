<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	let { children } = $props();

	import { Sidebar, SidebarGroup, SidebarItem, SidebarCta } from 'svelte-5-ui-lib';

	import { DarkMode } from 'flowbite-svelte';
	let activeUrl = $derived($page.url.pathname);
	import { ReceiptSolid, CloseOutline, StoreSolid, UserSettingsSolid, ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';

	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
  </script>
  
  <div class="relative">

  <Sidebar activeClass="p-2" nonActiveClass="p-2">
	  <SidebarGroup>
		<SidebarItem label="Receipts" href="/receipts" active={ activeUrl === '/receipts' }>
			{#snippet iconSlot()}
				<ReceiptSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			{/snippet}
			<svelte:fragment slot="icon">
			</svelte:fragment>
		  </SidebarItem>
		<SidebarItem label="Store" {spanClass}  href="/store" active={activeUrl === '/store'}>
			{#snippet iconSlot()}
			<StoreSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			{/snippet}
			{#snippet subtext()}
			<span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
			{/snippet}
		</SidebarItem>
		<SidebarItem label="Settings" href="/settings" active={activeUrl === '/settings'}>
			{#snippet iconSlot()}
			  <UserSettingsSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			  {/snippet}
			</SidebarItem>
		<SidebarCta label="Beta">
			<div class="bg-red-700 w-full h-full"></div>
		</SidebarCta>
		<SidebarCta label="Mode">
			<DarkMode />
		</SidebarCta>
	  </SidebarGroup>
  </Sidebar>

	<main class="lg:ml-72 w-full mx-auto">
		{@render children()}
	</main>
</div>
