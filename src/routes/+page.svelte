<script>
    import Description from "../lib/components/description.svelte";
    import "../app.css"
	import JobHistory from "../lib/components/jobHistory.svelte";
</script>

<div class="content">
    <Description />
    <JobHistory />
</div>

<style>
    .content {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }
</style>
