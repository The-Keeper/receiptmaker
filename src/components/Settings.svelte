<script lang="ts">
	import { download, upload } from '$lib';
	import { items, settings, settingLabels } from '$lib/store';

	function SaveSettings() {
		const jsonData = {
			settings: $settings,
			items: $items
		}
		download(JSON.stringify(jsonData), 'настройки.json', 'text/plain');
	}

	function LoadSettings(data: string) {
		const jsonData = JSON.parse(data);
		$settings = jsonData.settings;
		$items = jsonData.items;
	}

</script>

<div class="flex flex-col gap-3">
	{#each Object.keys(settingLabels) as key}
	<div>
		<label for={key} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{ settingLabels[key] }</label>
		<input type="text" id={key} class="input" placeholder="" required  bind:value={$settings[key]} />
	</div>
	{/each}

	<div>
		<button class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onclick={ () => SaveSettings() }>Сохранить настройки</button>
		<button class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onclick={ () => upload(LoadSettings, '.json') }>Загрузить настройки</button>
	</div>
</div>
