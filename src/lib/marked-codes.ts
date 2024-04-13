// import { marked } from "marked";
// import Prism from "./prism";
// import Prism from "./prism/components/";
// import 'prismjs/components/prism-core';
// import 'prismjs/plugins/autoloader/prism-autoloader';
// import 'prismjs/plugins/line-numbers/prism-line-numbers';
// import 'prismjs/components/prism-markup-templating';
// import loadLanguages from "prismjs/components/";
// import "prismjs/components/prism-bash.js";

// console.debug('calling marked-code.ts');
// (await import("prismjs/components/")).default(['bash']);
// (import('prismjs/components/')).then(loader => { loader.default(['bash']); });

// Prism.plugins.languages_path = '/components/prism-components';

// loadLanguages(['bash']);

// const renderer = {
//   code: (code: string, infostring: any) => {
//     try {
//       const lang = infostring ?? 'markup';
//       console.debug(`code: ${code}, infostring: ${infostring},`);
//       console.debug(`Prism.languages[lang]: ${Prism.languages["lang"]}`);
//       return Prism.highlight(
//         code,
//         Prism.languages[lang],
//         infostring ?? '',
//       );
//     } catch (err) {
//       console.error(err);
//       return false;
//     }
//   },
// };

// marked.use({ renderer });

// export const markDown = marked;
