<script>
    import Job from './job.svelte'

    export let jobs
</script>

<section class="jobHistory">
    {#each jobs as job}
        <Job job={job} />
    {/each}
</section>

<style lang="scss">
    .jobHistory {
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 100%;
        margin-top: 50px;
        margin-left: 100vw;
    }
</style>

