<script>
	import { tradeStream } from './stores';
	const mutable = {
		muted: true,
		toggle: function() {
			this.muted = !this.muted;
		},
	};
	const trades = tradeStream(mutable);

	function handleClick() {
		mutable.toggle()
		// document.getElementById("tradeList").setAttribute('style', "display :inline");
	}
</script>

<main>
	<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
	<h1>Darth Vega or Dance Vega??</h1>
	
	<button on:click={handleClick}>
		{mutable.muted ? 'Groove to the sound of Ethereum' : 'Mute'}
	</button>

	<ul>
		{#each $trades.reverse() as trade (trade.id)}
		<!-- <li>{trade.size} @ {trade.price} {trade.seller.id} ➡ {trade.buyer.id}</li> -->
		<li>{trade.seller.id}</li>
		{/each}
	</ul>
	
</main>

<style>
	:global(body)  {
		background: black;
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
