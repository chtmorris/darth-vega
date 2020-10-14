import { readable } from 'svelte/store';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import * as Tone from 'tone';

const GRAPHQL_ENDPOINT = 'wss://lb.n.vega.xyz/query';
const TRADES_QUERY = 'subscription { trades { price size buyer { id } seller { id } id } }';
const MAX_TRADES = 256;

export function tradeStream(m) {
	return readable([], function start(set) {
		
		let trades = [];
		const client = new SubscriptionClient(GRAPHQL_ENDPOINT, { reconnect: true });

		const req = client.request({ query: TRADES_QUERY }).subscribe({
			next(res) {
				if (res && res.data && res.data.trades) {
					console.log(`Received ${res.data.trades.length} trades`);
					trades = trades.concat(res.data.trades).slice(-1 * MAX_TRADES);
					set(trades);

					console.log(`Received ${res.data.trades[1].seller.id} trades`);

					if (!m.muted) {
						const osc = new Tone.Oscillator().toDestination();
						// start at "C4"
						osc.frequency.value = "C4";
						// ramp to "C2" over 2 seconds
						osc.frequency.rampTo("C2", 2);
						// start the oscillator for 2 seconds
						osc.start().stop("+2");
					}
				}
			},
			error(e) {
				console.log('GraphQL error:', e);
			},
			complete() {
				console.log('GraphQL request finished.');
			}
		})
	});
}
