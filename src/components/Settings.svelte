<script lang="ts">
	import { download, upload } from '$lib';
	import { items, settings } from '$lib/store';
	import { Button, Input, Label } from 'svelte-5-ui-lib';

	function SaveSettings() {
		const jsonData = {
			settings: $settings,
			items: $items
		}
		download(JSON.stringify(jsonData), 'настройки.json', 'text/plain');
	}

	function LoadSettings(data: any) {
		const jsonData = JSON.parse(data);
		$settings = jsonData.settings;
		$items = jsonData.items;
	}
</script>

<div class="flex flex-col gap-3">
	<div>
		<Label for="name" class="mb-2">Название места</Label>
		<Input type="text" id="name" required bind:value={$settings.name} />
	</div>

	<div>
		<Label for="address" class="mb-2">Адрес</Label>
		<Input type="text" id="address" required bind:value={$settings.address} />
	</div>

	<div>
		<Label for="phone" class="mb-2">Номер телефона</Label>
		<Input type="text" id="phone" required bind:value={$settings.phone} />
	</div>

	<div>
		<Label for="locale" class="mb-2">Локаль</Label>
		<Input type="text" id="locale" required bind:value={$settings.locale} />
	</div>

	<div>
		<Label for="pricetemplate" class="mb-2">Шаблон цен</Label>
		<Input type="text" id="pricetemplate" required bind:value={$settings.pricetemplate} />
	</div>

	<div>
		<Label for="icon" class="mb-2">URL значка</Label>
		<Input type="text" id="icon" required bind:value={$settings.icon} />
	</div>

	<div>
		<Button onclick={ () => SaveSettings() }>Сохранить настройки</Button>
		<Button onclick={ () => upload(LoadSettings, '.json') }>Загрузить настройки</Button>
	</div>
</div>
