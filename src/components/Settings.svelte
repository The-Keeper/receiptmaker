<script lang="ts">
	import { settings, items } from '$lib/store';
	import { Label, Input, Select } from 'svelte-5-ui-lib';

	const currencies = Intl.supportedValuesOf("currency");
	const currencyValues = currencies.map(c => {
		return {
			value: c,
			name: c
		}
	})

</script>

<h3>Настройки</h3>

<div>
	<div>
		<Label for="name" class="mb-2">Название места</Label>
		<Input type="text" id="name" required bind:value={ $settings.name }/>
	  </div>

	  <div>
		<Label for="name" class="mb-2">Валюта</Label>
	  	<Select bind:value={ $settings.currency } items={currencyValues} placeholder="Выберите валюту" class="!rounded-s-none" />
	</div>

</div>
