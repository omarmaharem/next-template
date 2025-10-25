# 🚀 Modern Next.js Template (updated)

An up-to-date Next.js starter template focused on developer DX and modern best practices.

Key technologies and highlights:

- Next.js 16 with Turbopack for fast local dev and builds
- React 19 + TypeScript
- Tailwind CSS (configured; global CSS at `src/app/globals.css`)
- shadcn/ui (configured for RSC and TSX)
- next-themes for client-side theme management
- @t3-oss/env-nextjs + Zod for typed runtime/shared environment variables
- ESLint + Prettier (with Tailwind plugin)
- pnpm as the recommended package manager

## 🎯 Quick start

Clone the template and start developing:

```bash
git clone https://github.com/omarmaharem/next-template
cd next-template
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

Available npm scripts (see `package.json`):

- `pnpm dev` — start dev server (Next + Turbopack)
- `pnpm build` — build for production
- `pnpm start` — start the production server
- `pnpm lint` — run ESLint
- `pnpm format` — run Prettier to format files

## 🧩 Notable project details

- Theme provider: `src/components/theme-provider.tsx` wraps `next-themes` and is used in the root layout. The app layout in `src/app/layout.tsx` configures the provider with `attribute="class"`, `defaultTheme="system"`, and `disableTransitionOnChange` to provide smooth theme behavior.
- Typed environment variables: `src/lib/env.ts` uses `@t3-oss/env-nextjs` with `zod` schemas. The repo expects at least `NEXT_PUBLIC_APP_NAME` (used for page metadata).
- shadcn/ui: `components.json` is configured for RSC and TSX. The generated components place their CSS into `src/app/globals.css` by default.
- Fonts: the layout uses Next's built-in font utilities (Google font Geist) through `next/font`.

## Project structure (high level)

```
├── src/
│   ├── app/              # App router pages & layouts (root layout uses ThemeProvider)
│   ├── components/       # Reusable React components (shadcn/ui under this)
│   └── lib/              # Utilities (env, utils, etc.)
├── components.json       # shadcn/ui config
├── next.config.ts        # Next.js config
├── postcss.config.mjs    # PostCSS config
├── package.json          # Scripts & deps
└── tsconfig.json         # TypeScript config
```

## Environment variables

This template uses `@t3-oss/env-nextjs` to validate env variables. You should set at least:

- `NEXT_PUBLIC_APP_NAME` — used in the site metadata (title). Example in a `.env` file:

```env
NEXT_PUBLIC_APP_NAME="My App"
```

When developing locally, create a `.env` file at the project root and restart the dev server after editing.

## Adding shadcn/ui components

Use the shadcn CLI to add components. The template's `components.json` is already configured for RSC/TSX:

```bash
pnpm dlx shadcn-ui@latest add [component-name]
```

## Development tips

- Keep components small and composable.
- Use the App Router (server + client components) and prefer RSC for data-heavy slices.
- Use `env` utility from `src/lib/env.ts` for typed access to runtime/shared variables.

## License

MIT
