# RNG design (btcpoker)

Highest-priority module: an **auditable, open-source CSPRNG** for dealing cards.

## Hard rules

- **Never** use `Math.random` (or any non-crypto PRNG) for dealing, seat assignment, or fairness-sensitive picks.
- Production entropy comes from `crypto.randomFillSync` via `NodeCryptoRng` (injectable `Rng` interface).
- Uniform integers use **rejection sampling** (`secureRandomInt`) to avoid modulo bias.
- Deck order uses **Fisher–Yates** driven by `secureRandomInt`.

## Injectable RNG

```ts
interface Rng {
  fill(target: Uint8Array): void;
}
```

Tests inject a deterministic `Rng`. Production uses `defaultRng` (`NodeCryptoRng`).

## Commit–reveal (provably fair sketch)

1. Before the hand: `commit()` → publish `commit = SHA-256(seed || nonce)`.
2. After the hand: `reveal()` → publish `seed` and `nonce`.
3. Anyone: `verifyReveal()` recomputes the hash.

This is a dealer-side commitment sketch (pokerproof-inspired). Multi-party or threshold schemes can wrap the same `Rng` later.

## Prior art reviewed

- agentcasino — `secureRandomInt`-style API
- pavelnikolov/deck — deck shuffle patterns
- pairjacks/poker-cards — card representation
- pokerproof — commit–reveal fairness

## Package

Implementation: `@btcpoker/rng` under `packages/rng`.

```bash
npm run test:rng
```

## Audit checklist

- [ ] No `Math.random` in fairness paths (`rg 'Math\\.random' packages`)
- [ ] Rejection sampling covers full 32-bit space correctly
- [ ] Commit–reveal uses SHA-256 over seed\|\|nonce; lengths documented
- [ ] Injectable `Rng` used everywhere dealing happens
