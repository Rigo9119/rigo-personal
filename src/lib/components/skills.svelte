<section class="skills">
	<ul class="skills__list">
		<li class="skills__list__item">uno</li>
		<li>dos</li>
		<li>tres</li>
		<li>cuatro</li>
	</ul>
</section>

<style lang="scss">
	.skills {
		border-radius: 50%;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-between;
		margin: 5px;
		padding: 15px;
		border: 1px solid transparent;
		border-radius: 10px;
		box-shadow: -2px 1px 5px 1px rgba(0, 0, 0, 0.34);
		width: 100%;

		&__list {
			list-style: none;

			&__item {
				font-style: italic;
			}
		}
	}
</style>
