<script>
	export let job = {};

	const years = job.time.map((year) => year).join(' - ');
	const clients = job.clients.map((client) => client).join(', ');
</script>

<div class="job">
	<h3 class="job__company">
		{job.company}
		&nbsp;-&nbsp;
		<span class="job__company__position">
			({job.position})
		</span>
	</h3>
	<h4 class="job__time">{years}</h4>
	<ul class="job__clients">
		{clients}
	</ul>
</div>

<style lang="scss">
	.job {
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

		&__company {
			align-self: flex-start;

			&__position {
			font-style: italic;
			font-weight: 300;
		}
		}

		&__time {
			align-self: flex-start;
			font-weight: 400;
			margin: 8px 0;
		}

		&__clients {
			align-self: flex-start;
		}
	}
</style>
