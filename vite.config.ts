import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import type { ViteDevServer } from 'vite';
// import FullReload from 'vite-plugin-full-reload';

// const fullReloadAlways = () => {
//   return {
//     name: 'fullReloadAlways',
//     handleHotUpdate({ file, server }: { file: string; server: ViteDevServer }) {
//       if (file.endsWith('mdsvex.config.js')) {
//         // server.hot.send({ type: 'full-reload', path: '*' });
//         server.restart();
//         return [];
//       }
//     }
//   };
// };

export default defineConfig({
  plugins: [sveltekit()]
  // plugins: [sveltekit(), fullReloadAlways()]
  // plugins: [sveltekit(), fullReloadAlways(), FullReload(['./mdsvex.config.js'])]
  // server: {
  //   watch: {
  //     usePolling: true
  //   }
  // }
  // resolve: {
  //   alias: {
  //     "@": fileURLToPath(new URL("./src", import.meta.url)),
  //   },
  // },
});
