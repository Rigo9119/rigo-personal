<script>
    export let toggleTheme, theme;
</script>


<button class="theme-btn" on:click={toggleTheme}>
    {$theme ? "light" : "dark"}
</button>

<style lang="scss">
    .theme-btn {
        border: none;
        background: none;
    }
</style>
