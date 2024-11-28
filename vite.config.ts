import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import { t18s } from "t18s";

export default defineConfig({
	plugins: [
		unocss(), 
		sveltekit(),
		t18s({
			locales: ["ru", "en"],
			fallbackLocale: "en",
		}),	  
	]
});
