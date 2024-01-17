<script>
	import Description from './description.svelte';
	import SocialMedia from './socialMedia.svelte';
</script>

<div class="rightPanel">
	<Description />
	<SocialMedia />
</div>

<style lang="scss">
	.rightPanel {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		width: 47%;
	}
</style>
