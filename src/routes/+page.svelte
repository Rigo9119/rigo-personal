<script context="module">
    import Description from "../lib/components/description.svelte";
	import JobHistory from "../lib/components/jobHistory.svelte";
    import { jobsData } from "../lib/data/jobHistory"
    import "../app.css"

import LeftPanel from "../lib/components/leftPanel.svelte";
</script>

<div class="content">
    <Description />
    <LeftPanel />
</div>

<style>
    .content {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        justify-content: space-between;
        margin: 20px;
    }
</style>
