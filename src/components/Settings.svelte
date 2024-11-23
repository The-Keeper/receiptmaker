<script lang="ts">
	import { download, upload } from '$lib';
	import { items, settings } from '$lib/store';

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
	<div>
		<label for="name" class="mb-2">Название места</label>
		<input type="text" id="name" required bind:value={$settings.name} />
	</div>

	<div>
		<label for="address" class="mb-2">Адрес</label>
		<input type="text" id="address" required bind:value={$settings.address} />
	</div>

	<div>
		<label for="phone" class="mb-2">Номер телефона</label>
		<input type="text" id="phone" required bind:value={$settings.phone} />
	</div>

	<div>
		<label for="locale" class="mb-2">Локаль</label>
		<input type="text" id="locale" required bind:value={$settings.locale} />
	</div>

	<div>
		<label for="pricetemplate" class="mb-2">Шаблон цен</label>
		<input type="text" id="pricetemplate" required bind:value={$settings.pricetemplate} />
	</div>

	<div>
		<label for="icon" class="mb-2">URL значка</label>
		<input type="text" id="icon" required bind:value={$settings.icon} />
	</div>

	<div>
		<button onclick={ () => SaveSettings() }>Сохранить настройки</button>
		<button onclick={ () => upload(LoadSettings, '.json') }>Загрузить настройки</button>
	</div>
</div>
