<script context="module">
	import '../app.css';
	import LeftPanel from '../lib/components/leftPanel.svelte';
	import RightPanel from '../lib/components/rightPanel.svelte';
</script>

<div class="content">
	<RightPanel />
	<LeftPanel />
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-flow: row nowrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 50px;
		margin: 20px;
	}
</style>
