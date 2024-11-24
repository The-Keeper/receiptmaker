<script lang="ts">
	import type { Snippet } from 'svelte';

    const { children, href }: { children: Snippet<[]>; href: string; } = $props();


	import { page } from '$app/stores';
	const activeUrl = $derived($page.url.pathname);

 </script>


<a class="flex p-2 rounded-2 {activeUrl===href ? "bg-gray-700" : ""}" {href}>{@render children()}</a>