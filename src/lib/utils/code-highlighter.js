import { transformerMetaHighlight } from '@shikijs/transformers';
import { parse } from 'node-html-parser';
import { codeToHtml, getHighlighter } from 'shiki';

const THEME = 'github-dark';

/**
 * Returns code with curly braces and backticks replaced by HTML entity equivalents
 * @param {string} html - highlighted HTML
 * @returns {string} - escaped HTML
 */
function escapeHtml(html) {
  return html.replace(
    /[{}`]/g,
    (character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' })[character] ?? ''
  );
}

/**
 * @param html {string} - code to highlight
 * @returns {string} - highlighted html
 */
function makeFocussable(html) {
  const root = parse(html);
  // root.querySelector('pre').setAttribute('tabIndex', '0');
  return root.toString();
}

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {Promise<string>} - highlighted html
 */
async function highlighter(code, lang, meta) {
  await getHighlighter({
    langs: [lang],
    themes: [THEME]
  });

  let options;
  if (!meta) {
    options = {
      lang,
      theme: THEME
    };
  } else {
    options = {
      lang,
      theme: THEME,
      meta: { __raw: meta },
      transformers: [transformerMetaHighlight()]
    };
  }

  const html = makeFocussable(escapeHtml(await codeToHtml(code, options)));
  return html;
}

export default highlighter;
// TODO: <span class="line highlighted"...에 대한 styling 추가
