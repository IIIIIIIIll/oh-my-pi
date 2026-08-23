# @oh-my-pi/collab-web

Hosts the shared React tool renderers (`src/tool-render/**`) bundled into
coding-agent's self-contained HTML session exports (`/export html`): one view
per built-in tool, common `ToolView` chrome, theme-adaptive `tv-` design
tokens, and an `<omp-tool-view>` web-component wrapper. Wire shapes come from
`@oh-my-pi/pi-wire` (`INTENT_FIELD`); no dependency on `@oh-my-pi/pi-coding-agent`.

## Regenerate tool views

```sh
bun run gen:tool-views
# bundles src/tool-render/standalone.tsx (+ React, inlined CSS) into
# packages/coding-agent/src/export/html/tool-views.generated.js
```

Run after changing anything under `src/tool-render/`. The output path and
banner are stable — never edit the generated file.

## Upstream path stability

The former guest web app and local relay tooling were removed; this package
was shrunk **in place** on purpose. Do not relocate `src/tool-render/**`,
`scripts/build-tool-views.ts`, or the `gen:tool-views` script — keeping them
at their upstream locations is what lets renderer improvements merge straight
from `can1357/oh-my-pi`. See `.trellis/spec/backend/upstream-sync-playbook.md`.
