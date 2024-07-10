<script>
	import { skills, learningSkills } from '../data/skills';
	import { _ } from 'svelte-i18n';
</script>

<section class="skills">
	<ul class="skills__list">
		{#each skills as skill}
			<li class="skills__list__item">{skill}</li>
		{/each}
	</ul>

	<h4>{$_('skills-title')}</h4>
	<ul class="skills__learning">
		{#each learningSkills as learningSkill}
			<li class="skills__learning__item">{learningSkill}</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	@import '../scss/mixins.scss';
	.skills {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-between;
		gap: 25px;
		width: 100%;

		&__list {
			@include shadow-box;
			width: 100%;
			list-style: none;

			&__item {
				font-style: italic;
			}
		}

		&__learning {
			@include shadow-box;
			width: 100%;
			list-style: none;

			&__item {
				font-style: italic;
			}
		}
	}
</style>
