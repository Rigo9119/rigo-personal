<nav class="nav">
	<ul class="nav__ul">
		<li class="nav__ul__li">
			<a class="nav__ul__li__a jobs" href="/">Job history</a>
		</li>
		<li class="nav__ul__li">
			<a class="nav__ul__li__a skills" href="/skills">Skills</a>
		</li>
		<li class="nav__ul__li">
			<a class="nav__ul__li__a portafolio" href="/portafolio">Portafolio</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	.nav {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		align-self: flex-start;
		justify-content: space-between;
		margin-bottom: 20px;

		&__ul {
			display: flex;
			list-style: none;
			align-items: center;
			justify-content: space-between;
			flex-flow: row nowrap;
			width: 100%;
			gap: 20px;

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

	.portafolio {
		color: #23615e;
		border: 1px solid #23615e;
	}
</style>
