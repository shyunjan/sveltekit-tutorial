// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';
// import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('mdsvex').MdsvexOptions} */
// const mdsvexOptions = {
//   extensions: ['.svx'],
// };
// const mdsvexConfig = defineConfig(mdsvexOptions);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors

  // preprocess: [vitePreprocess({}), preprocess(mdsvex(mdsvexConfig))],
  preprocess: [vitePreprocess({}), mdsvex(mdsvexConfig)],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter:
      // adapter(), // as using @sveltejs/adapter-auto
      adapter({
        runtime: 'edge'
        // maxDuration: // Defaults to 10 seconds for Hobby accounts, 15 for Pro and 900 for Enterprise
      }),

    version: {
      // ideally, this should be something deterministic like the output of `git rev-parse HEAD`
      name: Date.now().toString(),

      // if undefined, no polling will occur
      pollInterval: 1000
    }
  },

  vitePlugin: {
    // This enables compile-time warnings to be visible in the learn.svelte.dev editor
    onwarn: (warning, defaultHandler) => {
      console.log('svelte:warnings:%s', JSON.stringify(warning));
      defaultHandler(warning);
    }
  }
};

export default config;
