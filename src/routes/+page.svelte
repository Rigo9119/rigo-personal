<script context="module">
	import '../app.css';
	import { jobsData } from '../lib/data/jobHistory';
	import JobHistory from '../lib/components/jobHistory.svelte';
</script>

<JobHistory id="job-history" jobs={jobsData} data-option="job-history" />
