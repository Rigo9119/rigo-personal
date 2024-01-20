<script>
	import Nav from '../lib/components/nav.svelte';
	import LeftPanel from '../lib/components/leftPanel.svelte';
</script>

<div class="container">
	<div class="container__left">
		<LeftPanel />
	</div>
	<div class="container__right">
		<Nav />
		<slot />
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-around;
		min-height: 100vh;
		width: 100%;

		&__right {
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;
			justify-content: space-around;
			padding-top: 25px;
			width: 45%;
		}

		&__left {
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;
			justify-content: flex-start;
			padding-top: 25px;
			width: 45%;
			height: 100vh;
		}
	}
</style>
