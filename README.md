# 🚀 Modern Next.js Template with shadcn/ui

A cutting-edge Next.js template supercharged with:

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible components
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- [ESLint](https://eslint.org/) - Code linting and formatting
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## 🎯 Quick Start

1. Use this template:

```sh
pnpm create next-app -e https://github.com/omarmaharem/next-template
```

Or clone manually:

```sh
git clone https://github.com/omarmaharem/next-template
cd next-template
```

2. Install dependencies:

```sh
pnpm install
```

3. Run the development server:

```sh
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✨ Features

- 🌓 Dark mode support using [`ThemeProvider`](src/components/theme-provider.tsx)
- 📝 Type-safe development with TypeScript
- 🎨 Beautiful UI components from shadcn/ui
- 🛠 Configured with:
  - ESLint for code quality
  - Prettier for code formatting
  - Tailwind CSS class sorting
  - shadcn/ui components config in [`components.json`](components.json)
  - PostCSS for CSS processing
  - Next.js App Router
  - Type Safe environment variables with T3 Env and Zod

## 📁 Project Structure

```
├── src/
│   ├── app/              # App router pages & layouts
│   ├── components/       # React components
│   └── lib/             # Utilities & configurations
├── public/              # Static assets
├── components.json      # shadcn/ui config
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS config
└── tsconfig.json       # TypeScript config
```

## Adding Components

Install shadcn/ui components using:

```sh
pnpm dlx shadcn-ui@latest add [component-name]
```

## 📖 Development Guidelines

1. Follow the TypeScript-first approach
2. Use the App Router pattern for pages
3. Keep components small and focused
4. Utilize shadcn/ui's component library
5. Implement responsive designs with Tailwind

## 📝 License

MIT
