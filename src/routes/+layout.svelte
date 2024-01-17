<script>
	import Nav from '../lib/components/nav.svelte';
	import RightPanel from '../lib/components/rightPanel.svelte';
</script>

<div class="container">
	<div class="container__left">
		<RightPanel />
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
		width: 100%;

		&__right {
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: space-around;
			width: 45%;
		}

		&__left {
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: space-around;
			width: 45%;
		}
	}
</style>
