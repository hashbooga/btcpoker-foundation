# btcpoker

Full NLHE poker app/client with Bitcoin payments (mainchain, Lightning, Cashu).

## Priority

Auditable open-source CSPRNG for card dealing. See [docs/rng.md](docs/rng.md).

**Never use `Math.random`.**

## Packages

| Package | Role |
|---------|------|
| `@btcpoker/rng` | CSPRNG, Fisher–Yates, commit–reveal |
| `@btcpoker/poker-core` | NLHE rules / deck / hand evaluation (thin) |
| `@btcpoker/payments` | Payment adapter stubs (mainchain, Lightning, Cashu) |
| `@btcpoker/server` | Thin game server stub |
| `@btcpoker/client` | Minimal client stub |

## Setup

```bash
npm install
npm test
npm run build
```

## Repo target

Intended source of truth: Origin at `https://cursor.com/codebase/btcpoker` (not GitHub). This tree is a local foundation until Origin/Cloud Agents entitlement is sorted.

## License

TBD
