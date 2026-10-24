import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { standardDeck } from "./cards.js";
import { dealHole, shuffledDeck } from "./deal.js";

describe("deck", () => {
  it("has 52 unique cards", () => {
    const d = standardDeck();
    assert.equal(d.length, 52);
    assert.equal(new Set(d).size, 52);
  });

  it("shuffledDeck preserves membership", () => {
    const d = shuffledDeck();
    assert.equal(d.length, 52);
    assert.deepEqual([...d].sort(), [...standardDeck()].sort());
  });

  it("dealHole deals 2 cards each", () => {
    const { holes, remaining } = dealHole(6);
    assert.equal(holes.length, 6);
    for (const h of holes) assert.equal(h.length, 2);
    assert.equal(remaining.length, 52 - 12);
  });
});
