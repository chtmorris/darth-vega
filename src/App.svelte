<script>
	import { fade, fly } from 'svelte/transition';
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
			<li in:fly="{{ x: 1000, duration: 5000 }}" out:fade  style="margin-top: {trade.idx * 20}px">o</li>
		{/each}
	</ul>
	
</main>

<style>
	:global(body)  {
		background: black;
	}

	.trades li {
		display: block;
		position: absolute;
		left: 0;
		width: 20px;
		height: 20px;
		background: red;
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
