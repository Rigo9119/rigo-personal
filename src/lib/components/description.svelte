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
	</div>
	<p class="description__paragraph">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae assumenda hic fugiat veniam
		natus labore vel explicabo suscipit nihil, corrupti laboriosam tenetur cupiditate ipsam nulla
		rerum aut. Possimus, rerum commodi.
	</p>
</section>

<style lang="scss">
	.description {
		display: flex;
		flex-flow: column;
		align-items: center;
		align-self: flex-start;
		justify-content: space-between;
		margin: 5px;
		padding: 20px;
		border: 1px solid transparent;
		border-radius: 10px;
		background-color: white;
		box-shadow: -2px 1px 5px 1px rgba(0, 0, 0, 0.34);
		width: 100%;

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
				margin: 15px 0;
			}
		}

		&__paragraph {
			margin-bottom: 15px;
		}
	}
</style>
