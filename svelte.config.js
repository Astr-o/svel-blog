import adapter from '@sveltejs/adapter-static';
import css from 'rollup-plugin-css-only';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		// renders markdown as html
		mdsvex({
			extensions: ['.md'],

			// this is not compatiable with TS
			layout: './src/lib/components/blog-post-layout.svelte'
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
		prerender: { enabled: true, default: true }
	}
};

export default config;
