<script>
	import { getContext } from 'svelte';

	const options = getContext('options');
</script>

<nav class="nav">
	<ul class="nav__ul">
		<li class="nav__ul__li">
			<a class="nav__ul__li__a jobs" on:click={$options[0]} href="#job-history">Job history</a>
		</li>
		<li class="nav__ul__li">
			<a class="nav__ul__li__a skills" on:click={$options[1]} href="#skills">Skills</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	.nav {
		display: flex;
		position: fixed;
		background-color: white;
		top: 0;
		left: 51%;
		width: 48%;
		padding-top: 16px;
		padding-left: inherit;
		padding-right: 20px;
		s &__ul {
			display: flex;
			list-style: none;
			align-items: center;
			justify-content: space-between;
			width: 30%;
			flex-flow: row nowrap;

			&__li {
				padding: 12px 0;
				&__a {
					padding: 8px 12px;
					text-decoration: none;
					border-radius: 5px;
				}
			}
		}
	}

	.jobs {
		color: cornflowerblue;
		border: 1px solid cornflowerblue;
	}

	.skills {
		color: crimson;
		border: 1px solid crimson;
	}
</style>
