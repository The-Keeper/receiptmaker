<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	let { children } = $props();

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarCta } from 'flowbite-svelte';

	import { DarkMode } from 'flowbite-svelte';
	let activeUrl = $derived($page.url.pathname);
	import { StoreSolid, UserSettingsSolid, ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';

	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
  </script>
  

  <Sidebar {activeUrl}>
	<SidebarWrapper>
	  <SidebarGroup>
		<SidebarItem label="Settings">
		  <svelte:fragment slot="icon">
			<UserSettingsSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
		  </svelte:fragment>
		</SidebarItem>
		<SidebarItem label="Store" {spanClass}>
		  <svelte:fragment slot="icon">
			<StoreSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
		  </svelte:fragment>
		  <svelte:fragment slot="subtext">
			<span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
		  </svelte:fragment>
		</SidebarItem>
		<SidebarItem label="Inbox" {spanClass}>
		  <svelte:fragment slot="icon">
			<MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
		  </svelte:fragment>
		  <svelte:fragment slot="subtext">
			<span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
		  </svelte:fragment>
		</SidebarItem>
		<SidebarItem label="Sidebar" href="/docs/components/sidebar" active={activeUrl === '/docs/components/sidebar'}>
		  <svelte:fragment slot="icon">
			<UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
		  </svelte:fragment>
		</SidebarItem>
		<SidebarItem label="Sign In">
		  <svelte:fragment slot="icon">
			<ArrowRightToBracketOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
		  </svelte:fragment>
		</SidebarItem>
		<SidebarItem label="Sign Up">
		  <svelte:fragment slot="icon">
			<EditOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
		  </svelte:fragment>
		</SidebarItem>
		<SidebarCta label="Mode">
			<DarkMode class="w-12 h-12"></DarkMode>
		</SidebarCta>
	  </SidebarGroup>
	</SidebarWrapper>
  </Sidebar>

<div class="flex px-4 mx-auto w-full">
	<main class="lg:ml-72 w-full mx-auto">
		{@render children()}
	</main>
</div>

