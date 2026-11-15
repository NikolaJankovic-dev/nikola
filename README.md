# Nikola's Portfolio

Interactive React portfolio built with TanStack Start, Tailwind CSS, and shadcn/ui primitives.

## Development

- `npm install` installs dependencies.
- `npm run dev` starts the Vite development server.
- `npm run build` creates the production server/client build and checks TypeScript.
- `npm run start` runs the built Nitro server.

The site uses server-side rendering and then hydrates in the browser. The home page retains its full-screen scroll/swipe scenes, while project and about pages remain scrollable.

## Deployment

TanStack Start produces a Nitro server build in `.output`. The previous Firebase Hosting configuration targeted the Create React App `build` directory and must be replaced with an SSR-compatible deployment target before deploying this version.
