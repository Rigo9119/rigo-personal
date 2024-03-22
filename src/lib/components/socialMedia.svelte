<div class="social">
	<h5>You can find me in:</h5>

	<ul class="social__list">
		<li>
			<a href="https://github.com/Rigo9119" target="_blank">github</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/rigo-rosero97/" target="_blank">linkedin</a>
		</li>
	</ul>
</div>

<style lang="scss">
	@import '../scss/mixins.scss';
	.social {
		@include shadow-box;
		h5 {
			text-align: center;
			margin-bottom: 10px;
		}

		&__list {
			display: flex;
			flex-flow: row;
			align-items: center;
			justify-content: space-between;
			list-style: none;
			width: 100%;
		}
	}
</style>
