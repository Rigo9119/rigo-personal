<script>
	export let toggleTheme, theme;
</script>

{#if $theme}
	<button class="theme-btn" class:light={!$theme} class:dark={$theme} on:click={toggleTheme}
		>Light</button
	>
{:else}
	<button class="theme-btn" class:light={!$theme} class:dark={$theme} on:click={toggleTheme}
		>Dark</button
	>
{/if}

<style lang="scss">
	.theme-btn {
		border: none;
		background: none;
	}

	.light {
		color: #172121;
	}

	.dark {
		color: #f6f0ed;
	}
</style>
