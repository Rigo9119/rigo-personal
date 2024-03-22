<script>
	import Nav from '../lib/components/nav.svelte';
	import LeftPanel from '../lib/components/leftPanel.svelte';
	import PageConfig from '../lib/components/pageConfig.svelte';
	import { theme } from '../stores/theme';
</script>

<div class="container" class:light={!$theme} class:dark={$theme}>
	<div class="container__left">
		<PageConfig />
		<LeftPanel />
	</div>
	<div class="container__right">
		<Nav />
		<slot />
	</div>
</div>

<style lang="scss">
	@import '../lib/scss/variables.scss';
	@import '../lib/scss/mixins.scss';

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

		.light {
			color: #172121;
			background-color: white;
		}

		.dark {
			color: #F6F0ED;
			background-color: #172121;
		}
	}

	.container {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-around;
		min-height: 100vh;
		width: 100%;

		&__left {
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;
			justify-content: flex-start;
			padding-top: 25px;
			width: 45%;
			height: 100vh;
		}

		&__right {
			display: flex;
			flex-flow: column nowrap;
			align-self: flex-start;
			align-items: flex-start;
			justify-content: space-around;
			padding-top: 25px;
			width: 45%;
		}
	}
</style>
