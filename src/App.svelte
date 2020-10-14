<script>
	import { tradeStream, isMuted } from './stores';
	const trades = tradeStream();

	function handleClick() {
		isMuted.update(b => !b);
		// document.getElementById("tradeList").setAttribute('style', "display :inline");
	}
</script>

<main>
	<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
	<h1>Darth Vega or Dance Vega??</h1>
	
	<button on:click={handleClick}>
		{$isMuted ? 'Groove to the sound of Ethereum' : 'Mute'}
	</button>

	<ul class="trades">
		{#each $trades.reverse() as trade (trade.id)}
			<!-- <li style="left: {trade.tween}">{trade.timestamp} - {trade.size} @ {trade.price} {trade.seller.id} ➡ {trade.buyer.id}</li> -->
			<li style="margin-top: {trade.idx * 20}px"></li>
		{/each}
	</ul>
	
</main>

<style>
	:global(body)  {
		background: black;
		position: fixed; 
		overflow-y: scroll;
		width: 100%;
	}

	.trades {
		display: block;
		position: absolute;
		width: 100%;
		left: 0;
	}
	.trades li {
		display: block;
		position: absolute;
		left: 0;
		width: 20px;
		height: 20px;
		background: red;

		-webkit-animation: slide 5s forwards;
		-webkit-animation-delay: 0s;
		animation: slide 5s forwards;
		animation-delay: 0s;
	}

	@-webkit-keyframes slide {
		100% { left: 100%; }
	}

	@keyframes slide {
		100% { left: 100%; }
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #edff22;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		font-family: 'Audiowide', cursive;
	}

	/* #tradeList {
		display: hidden !important;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
