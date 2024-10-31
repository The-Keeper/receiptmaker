import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/svelte-5-ui-lib/**/*.{html,js,svelte,ts}', 
		'./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}'	
	],
	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: []
} as Config;
