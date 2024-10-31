<script lang="ts">
	import { settings, items } from '$lib/store';
	import { Label, Input } from 'svelte-5-ui-lib';

</script>

<h3>Настройки</h3>

<div>
	<div>
		<Label for="name" class="mb-2">Название места</Label>
		<Input type="text" id="name" required bind:value={ $settings.name }/>
	  </div>
</div>
