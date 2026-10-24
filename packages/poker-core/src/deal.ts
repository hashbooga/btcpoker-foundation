import { shuffled, type Rng, defaultRng } from "@btcpoker/rng";
import { standardDeck, type Card } from "./cards.js";

export function shuffledDeck(rng: Rng = defaultRng): Card[] {
  return shuffled(standardDeck(), rng);
}

export function dealHole(
  playerCount: number,
  rng: Rng = defaultRng,
): { holes: Card[][]; remaining: Card[] } {
  if (!Number.isInteger(playerCount) || playerCount < 2 || playerCount > 10) {
    throw new RangeError("playerCount must be 2..10");
  }
  const deck = shuffledDeck(rng);
  const holes: Card[][] = Array.from({ length: playerCount }, () => []);
  for (let round = 0; round < 2; round++) {
    for (let p = 0; p < playerCount; p++) {
      holes[p]!.push(deck.shift()!);
    }
  }
  return { holes, remaining: deck };
}
