<h1>{window.innerWidth}x{window.innerHeight}</h1>
<div class="tutorial">
  <p>Server-side rendering (SSR) is the process of generating HTML on the server, and is what
    SvelteKit does by default. It's important for performance and
    <a href="https://kryogenix.org/code/browser/everyonehasjs.html" target="_blank">resilience</a>,
    and is very beneficial for search engine optimization (SEO) — while some search engines can
    index content that is rendered in the browser with JavaScript, it happens less frequently and
    reliably.
  </p>
  <p>That said, some components can't be rendered on the server, perhaps because they expect to be
    able to access browser globals like window immediately. If you can, you should change those
    components so that they can render on the server, but if you can't then you can disable SSR:
  </p>
  <div class="code-block">
    <p>See <code>.\+page.server.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> ssr = <span class="token boolean">false</span>;</code></pre>
  </div>
  <p class="note">
    <span>NOTE</span>
    Setting <code>ssr</code> to <code>false</code> inside your root <code>+layout.server.js</code>
    effectively turns your entire app into a single-page app (SPA).
  </p>
</div>
