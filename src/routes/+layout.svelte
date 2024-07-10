<script>
	import Nav from '../lib/components/nav.svelte';
	import LeftPanel from '../lib/components/leftPanel.svelte';
	import PageConfig from '../lib/components/pageConfig.svelte';
	import '$lib/i18n';
	import { isLoading, locale, waitLocale } from 'svelte-i18n';
	import { theme } from '../stores/theme';
	import { browser } from '$app/environment';

	export const load = async () => {
		if (browser) {
			locale.set(window.navigator.language);
		}

		await waitLocale();
	};
</script>

{#if $isLoading}
	...
{:else}
	<div class="container" class:light={!$theme} class:dark={$theme}>
		<div class="container__left">
			<LeftPanel />
		</div>
		<div class="container__right">
			<Nav />
			<slot />
		</div>
	</div>
	<footer class:light={!$theme} class:dark={$theme}>
		<PageConfig />
	</footer>
{/if}

<style lang="scss">
	@import '../lib/scss/variables.scss';
	@import '../lib/scss/mixins.scss';
	@import '../lib/scss/maps.scss';

	:global {
		:root {
			font-family: 'Lato', sans-serif;
			font-size: 14px;
		}

		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		body {
			margin: 0;
		}

		button {
			cursor: pointer;
		}

		a {
			text-decoration: none;
			&:visited {
				color: crimson;
			}
		}

		.light {
			color: #172121;
			background-color: white;
		}

		.dark {
			color: #f6f0ed;
			background-color: #172121;
		}
	}

	.container {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: space-around;
		min-height: 100vh;
		width: 100%;

		@include media('md') {
			flex-flow: row nowrap;
		}

		&__left {
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;
			justify-content: flex-start;
			padding: 15px;
			padding-top: 25px;
			width: 100%;

			@include media('md') {
				align-self: flex-start;
				width: 45%;
			}
		}

		&__right {
			display: flex;
			flex-flow: column nowrap;
			align-self: flex-start;
			align-items: flex-start;
			justify-content: space-around;
			padding: 15px;
			padding-top: 25px;
			width: 100%;

			@include media('md') {
				padding: 15px;
				width: 45%;
			}
		}
	}
</style>
