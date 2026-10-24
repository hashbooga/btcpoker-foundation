import { dealHole } from "@btcpoker/poker-core";
import { commit, reveal } from "@btcpoker/rng";

/**
 * Thin stub: deals a sample hand with commit–reveal.
 * Real WebSocket / HTTP table loop comes later.
 */
export function sampleHand(players = 2) {
  const c = commit();
  const { holes, remaining } = dealHole(players);
  return {
    commitment: c.commit,
    holes,
    boardReserve: remaining.slice(0, 5),
    reveal: reveal(c),
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(sampleHand(2), (_k, v) => (typeof v === "bigint" ? v.toString() : v), 2));
}
