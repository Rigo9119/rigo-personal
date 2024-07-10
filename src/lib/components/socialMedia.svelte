<script>
	import { _ } from 'svelte-i18n';
</script>

<div class="social">
	<h4>{$_('social-title')}</h4>

	<ul class="social__list">
		<li class="social__list_item">
			<a class="social__list__item__a" href="https://github.com/Rigo9119" target="_blank">
				Github
			</a>
		</li>
		<li class="social__list_item">
			<a
				class="social__list__item__a"
				href="https://www.linkedin.com/in/rigo-rosero97/"
				target="_blank"
			>
				Linkedin
			</a>
		</li>
	</ul>
</div>

<style lang="scss">
	@import '../scss/mixins.scss';

	.social {
		@include shadow-box;
		h4 {
			text-align: center;
			margin-bottom: 10px;
		}

		&__list {
			display: flex;
			flex-flow: row;
			align-items: center;
			justify-content: space-evenly;
			list-style: none;
			width: 100%;
		}
	}
</style>
