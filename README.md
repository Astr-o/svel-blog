# Svel Blog

The beginings of a blog using Markdown and svelte templates

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Libraries & Frameworks

- mdsvex - https://mdsvex.pngwn.io/ - allows svelte in markdown
- svelteKit - https://kit.svelte.dev/ - Svelte Server-side and static rendering
- svelte - https://svelte.dev/ - OG Svelte

## Testing

- playwright - https://playwright.dev/

Playwright tests can be run using the command below

```sh
npm run test
```

## Gotchas

- mdsvex
  - Doesn't support typescript in a svelte script tags
