# @oh-my-pi/pi-wire

Shared agent wire constants for Oh My Pi packages.

This fork stripped the collab live-session protocol this package used to
carry (frames, relay/link constants, session mirror types) — those
definitions remain in upstream history. Only cross-package constants with
no external-transmission surface remain.

## Exports

```ts
import { INTENT_FIELD } from "@oh-my-pi/pi-wire";
```

| Export | Value | Purpose |
|---|---|---|
| `INTENT_FIELD` | `"i"` | Tool-call parameter key used for intent tracing (prompt explanation/reasoning) |
