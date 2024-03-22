<script>
	import Job from './job.svelte';

	export let jobs;
</script>

<section class="jobHistory">
	{#each jobs as job}
		<Job {job} />
	{/each}
</section>

<style lang="scss">
	.jobHistory {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		width: 100%;
	}
</style>
