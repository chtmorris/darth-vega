<script>
	import { tradeStream, isMuted, ticker } from './stores';
	const trades = tradeStream();

	function handleClick() {
		isMuted.update(b => !b);
		// document.getElementById("tradeList").setAttribute('style', "display :inline");
	}

	function showPopup() {
		document.getElementById("popup").style.display = "block";
	}

	function hidePopup() {
		document.getElementById("popup").style.display = "none";
	}
</script>

<main>
	<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
	<h1>Darth Vega</h1>
	<h2>or Dance Vega??</h2>
	
	<button on:click={handleClick}>
		{$isMuted ? 'Groove to the sound of Vega' : 'Mute'}
	</button>
	<button class="btn2" on:click={showPopup}>
		What the hell is going on?
	</button>

	<button id="popup" on:click={hidePopup}>
		<h3>I know. Trippy right.</h3>
		<h3>
			So roughly every second, Vega trades are being included in blocks. Pew pew. Money being made. Money being lost. 
			We thought it might be cool to hear the trades. So...
		</h3>
		<h3>
			The pitch of sound you hear with each block is dependant on the number of trades included. It is modulated to be within the range that humans can hear. 
			(We contemplated making a version for dogs too - that will come with v2) 
		</h3>
	</button>
	

	<ul class="trades">
		{#each $trades as block (block.id)}
			<!-- <li style="left: {trade.tween}">{trade.timestamp} - {trade.size} @ {trade.price} {trade.seller.id} ➡ {trade.buyer.id}</li> -->
			<li style="margin-top: {(block.lane % 5)*1.5}em; padding-right: {block.length*2}px"></li>
		{/each}
	</ul>

	<div class="ticker">
		Latest block: {$ticker.length}
	</div>

	
</main>

<style>
	:global(body)  {
		background: black;
		position: fixed; 
		overflow-y: scroll;
		width: 100%;
	}

	.ticker {
		position: fixed;
		bottom: 0;
		left: 0;
		line-height: 1.5em;
		text-align: center;
		background: #ffa928;
		width: 100%;
		font-size: 2em;
		color: rgba(0, 0, 0, 0.4);
		font-family: 'Audiowide', cursive;
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
		font-size: 50px;
		left: 0;
		width: 40px;
		height: 1em;
		background: #FF247F;

		-webkit-animation: slide 6s forwards;
		-webkit-animation-delay: 0s;
		animation: slide 6s forwards;
		animation-delay: 0s;
	}

	.trades li::before {
		display: block;
		position: absolute;
		background: #24FFA4;
		padding-left: -1em;
		margin-left: -1.5em;
		width: 1em;
		height: 1em;
		content: " ";
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

	h2 {
		color: #edff22;
		opacity: 0.5;
		margin-top: -35px;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
		font-family: 'Audiowide', cursive;
	}

	button {
		background: #FF247F;
		border-color: #FF247F;
		cursor: pointer;
		color: rgba(255, 255, 255, 0.815);
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
		font-family: 'Audiowide', cursive;
		padding: 5px;
		margin: 5px;
		border-radius: 10px;
	}

	#popup {
		background: #24FFA4;
		border-color: #24FFA4;
		color: rgba(0, 0, 0, 0.747);
		text-transform: none;
		margin: 30px;
		display: none;
	}

	.btn2 {
		background: #3624FF;
		border-color: #3624FF;
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
