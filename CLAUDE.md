# Project notes for Claude

## Do NOT run `next build` / `next dev` / `next start`

The user keeps a dev server (`yarn dev`, which is `next dev --turbopack`) running
while Claude edits files. Running `next build` (or another `next` server command)
writes into the same `.next/` directory and corrupts the running dev server's
manifests, producing errors like:

```
ENOENT: no such file or directory, open '.next/server/app/favicon.ico/[__metadata_id__]/route/app-paths-manifest.json'
```

Rules:
- Never run `next build`, `next dev`, `next start`, `yarn build`, or `yarn dev`.
- To type-check, use `npx tsc --noEmit` instead (does not touch `.next/`).
- Trust that the dev server will hot-reload and surface errors to the user.
