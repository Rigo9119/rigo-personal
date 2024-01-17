<script>
	import { jobsData } from '../data/jobHistory';
	import JobHistory from './jobHistory.svelte';
	import Nav from './nav.svelte';
	import Skills from './skills.svelte';
	import Portafolio from './portafolio.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const options = writable();
	$: options.set('job-history');

	setContext('options', options);
</script>

<div class="leftPanel">
	<Nav />
	<JobHistory id="job-history" jobs={jobsData} data-option="job-history" />
	<Skills />
	<Portafolio />
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
