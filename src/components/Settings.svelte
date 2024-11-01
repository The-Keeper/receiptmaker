<script lang="ts">
	import { settings, items } from '$lib/store';
	import { Label, Heading, Input, Select } from 'svelte-5-ui-lib';
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
</div>
