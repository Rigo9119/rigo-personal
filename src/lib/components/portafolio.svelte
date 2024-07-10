<script>
	import { _ } from 'svelte-i18n';
</script>

<section class="portafolio">
	<div>
		<p>
			{$_('portafolio.paragraph')}
		</p>
		<br />
		<h5>{$_('portafolio.list-title')}</h5>
	</div>
	<ul>
		<li><a href="https://ressonarfilms.com/" target="_blank">Ressonar</a></li>
	</ul>
</section>

<style lang="scss">
	.portafolio {
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

		& ul {
			margin-top: 12px;
			list-style: none;
		}
	}
</style>
