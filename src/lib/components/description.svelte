<section class="description">
	<div class="description__top">
		<picture class="description__top__picture">
			<img
				class="description__top__picture__img"
				src="/assets/profilePic.jpeg"
				alt="Rigo profile pic"
			/>
		</picture>
		<h1 class="description__top__name">Rigo Armando Rosero Castillo</h1>
		<h3 class="description__top__role">Frontend Dev | Software engineer</h3>
	</div>
	<p class="description__paragraph">
		I am a Front-End Developer with nearly five years of industry experience, I possess a wealth of knowledge in HTML, CSS, SCSS, Javascript, Typescript, and React Js. My expertise in these technologies has enabled me to create highly functional and visually appealing websites that meet the needs of clients across various industries. My experience working with Agile methodologies has allowed me to effectively collaborate with cross-functional teams and deliver exceptional results.
	</p>
</section>

<style lang="scss">
	@import '../scss/mixins.scss';

	.description {
		display: flex;
		flex-flow: column;
		align-items: center;
		align-self: flex-start;
		justify-content: space-between;
		@include shadow-box;

		&__top {
			display: flex;
			flex-flow: column;
			align-items: center;
			justify-content: space-between;

			&__picture {
				display: inline-block;
				position: relative;
				width: 150px;
				height: 150px;
				overflow: hidden;
				border-radius: 50%;

				&__img {
					height: 250px;
				}
			}

			&__name {
				padding: 24px 0;
			}

			&__role {
				padding: 4px 0 20px 0;
			}
		}

		&__paragraph {
			padding: 0 10px 5px 10px;
			line-height: 20px;
			letter-spacing: 0.8px;
			text-align: justify;
		}
	}
</style>
