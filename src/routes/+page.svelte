<script context="module">
	import Description from '../lib/components/description.svelte';
	import '../app.css';
	import LeftPanel from '../lib/components/leftPanel.svelte';
</script>

<div class="content">
	<Description />
	<LeftPanel />
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-flow: row nowrap;
		align-items: flex-start;
		justify-content: space-between;
		margin: 20px;
	}
</style>
