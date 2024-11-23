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
		<input type="text" id={key} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required  bind:value={$settings[key]} />
	</div>
	{/each}

	<div>
		<button onclick={ () => SaveSettings() }>Сохранить настройки</button>
		<button onclick={ () => upload(LoadSettings, '.json') }>Загрузить настройки</button>
	</div>
</div>
