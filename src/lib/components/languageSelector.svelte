<script>
	import { locale, locales } from 'svelte-i18n';
	import { _ } from 'svelte-i18n';

	const changeLanguage = (event) => {
		locale.set(event.target.value);
	};

	let currentLocale;

	let languages = [
		{
			locale: 'en-US',
			label: 'English'
		},
		{
			locale: 'es',
			label: 'Español'
		},
		{
			locale: 'kr',
			label: '한국어'
		}
	];

	locales.subscribe((value) => {
		let availableLocales = languages.find((locale) => locale.locale === value);
		return availableLocales;
	});

	locale.subscribe((value) => {
		currentLocale = value;
	});
</script>

<div>
	<label for="select-languages">
		{$_('select-label')}
	</label>
	<select
		id="select-languages"
		name="select-languages"
		class="language-selector"
		on:change={changeLanguage}
		bind:value={currentLocale}
	>
		{#each languages as language}
			<option value={language.locale}>{language.label}</option>
		{/each}
	</select>
</div>

<style lang="scss">
	.language-selector {
		border: none;
		cursor: pointer;
		background: none;
		padding: 0 8px;
	}
</style>
