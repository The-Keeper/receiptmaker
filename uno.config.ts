// uno.config.js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	// ...UnoCSS options
	content: {
		filesystem: [
			"src/**/*.{html,js,svelte,ts}",
		],
	},
	shortcuts: {
		"title": 'text-3xl font-bold dark:text-white',
		"input": 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
	},
	presets: [presetUno()],
	theme: {
		colors: {
			primary: {
				50: 'rgba(var(--theme-color-primary-50), <alpha-value>)',
				100: 'rgba(var(--theme-color-primary-100), <alpha-value>)',
				200: 'rgba(var(--theme-color-primary-200), <alpha-value>)',
				300: 'rgba(var(--theme-color-primary-300), <alpha-value>)',
				400: 'rgba(var(--theme-color-primary-400), <alpha-value>)',
				500: 'rgba(var(--theme-color-primary-500), <alpha-value>)',
				DEFAULT: 'rgba(var(--theme-color-primary), <alpha-value>)',
				700: 'rgba(var(--theme-color-primary-700), <alpha-value>)',
				800: 'rgba(var(--theme-color-primary-800), <alpha-value>)',
				900: 'rgba(var(--theme-color-primary-900), <alpha-value>)',
				950: 'rgba(var(--theme-color-primary-950), <alpha-value>)',
			},
			secondary: {
				"50": "#f0f9ff",
				"100": "#e0f2fe",
				"200": "#bae6fd",
				"300": "#7dd3fc",
				"400": "#38bdf8",
				"500": "#0ea5e9",
				"600": "#0284c7",
				"700": "#0369a1",
				"800": "#075985",
				"900": "#0c4a6e",
			},
		},
	},
});
