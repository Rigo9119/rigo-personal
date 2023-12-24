<script>
	import { jobsData } from '../data/jobHistory';
	import JobHistory from './jobHistory.svelte';
	import Nav from './nav.svelte';
</script>

<div class="leftPanel">
    <Nav />
	<JobHistory id="job-history" jobs={jobsData} />
</div>

<style lang="scss">
	.leftPanel {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: space-around;
		width: 47%;
    }
</style>
