<script>
    export let language
</script>

<div class="language-selector" >
    <button class="language-selector__button" on:click={() => alert($language)}>ES</button>
    <button class="language-selector__button">EN</button>
    <button class="language-selector__button">KR</button>
</div>

<style lang="scss">
    .language-selector {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        width: 7vw;

        &__button {
            border: none;
            background: none;

            &:hover {
                text-decoration: underline;
                text-underline-offset: 3px;
                color: cornflowerblue;
            }
        }
    }
</style>
