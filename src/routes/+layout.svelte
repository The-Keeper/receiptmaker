<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	let { children } = $props();

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarCta } from 'flowbite-svelte';

	import { DarkMode } from 'flowbite-svelte';
	let activeUrl = $derived($page.url.pathname);
	import { ReceiptSolid, CloseOutline, StoreSolid, UserSettingsSolid, ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';

	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
  </script>
  
  <div class="flex px-4 mx-auto w-full">

  <Sidebar {activeUrl}>
	<SidebarWrapper>
	  <SidebarGroup>
		<SidebarItem label="Receipts" href="/receipts" active={ () => { return activeUrl === '/receipts' } }>
			<svelte:fragment slot="icon">
			  <ReceiptSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			</svelte:fragment>
		  </SidebarItem>
		<SidebarItem label="Store" {spanClass}  href="/store" active={activeUrl === '/store'}>
		  <svelte:fragment slot="icon">
			<StoreSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
		  </svelte:fragment>
		  <svelte:fragment slot="subtext">
			<span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
		  </svelte:fragment>
		</SidebarItem>
		<SidebarItem label="Settings" href="/settings" active={activeUrl === '/settings'}>
			<svelte:fragment slot="icon">
			  <UserSettingsSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			</svelte:fragment>
		  </SidebarItem>
		<SidebarCta label="Beta">
			<div class="bg-red-700 w-full h-full"></div>
		</SidebarCta>
		<SidebarCta label="Mode">
			<DarkMode />
		</SidebarCta>
	  </SidebarGroup>
	</SidebarWrapper>
  </Sidebar>

	<main class="lg:ml-72 w-full mx-auto">
		{@render children()}
	</main>
</div>
