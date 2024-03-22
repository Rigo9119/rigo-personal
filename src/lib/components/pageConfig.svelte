<script>
	import LanguageSelector from "./languageSelector.svelte";
	import ThemeSwitcher from "./themeSwitcher.svelte";
    import { theme } from "../../stores/theme";
    import { language } from "../../stores/language";

    function toggleTheme() {
        theme.set(!$theme);
    }
</script>

<div class="page-config">
    <LanguageSelector
        language={language}
    />
    <ThemeSwitcher 
        theme={theme}
        toggleTheme={toggleTheme}
    />
</div>

<style lang="scss">
    .page-config {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        width: 100%;
    }
</style>
