import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { createHighlighter } from '@svelte-dev/pretty-code';
// import highlighter from './src/lib/utils/code-highlighter.js';
// import vesper from 'tm-themes/themes/vesper.json' with { type: 'json' };

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  // highlight: { highlighter },
  highlight: {
    highlighter: createHighlighter({
      // keepBackground: false,
      // theme: {
      //   dark: 'material-theme-darker',
      //   light: 'material-theme-lighter'
      // }
      theme: 'material-theme-darker'
      // theme: 'poimandres'
      // theme: 'catppuccin-mocha'
      // theme: 'slack-dark'
      // theme: 'tokyo-night'
      // theme: vesper
      // theme: JSON.parse(
      //   fs.readFileSync(new URL('./themes/moonlight-ii.json', import.meta.url), 'utf-8')
      // )
    })
  }

  // smartypants: {
  //   dashes: 'oldschool'
  // },

  // remarkPlugins: [],
  // rehypePlugins: []
});

// if (import.meta.hot) {
//   import.meta.hot.accept((newModule) => {
//     if (newModule) {
//       console.log('mdsvex.config.js');
//     }
//   });
// }

export default config;
