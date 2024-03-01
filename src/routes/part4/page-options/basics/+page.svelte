<div class="tutorial">
  <p>In the chapter on
    <a href="https://learn.svelte.dev/tutorial/page-data" target="_blank">loading data</a>, 
    we saw how you can export load functions from <code>+page.js</code>, 
    <code>+page.server.js</code>, <code>+layout.js</code> and <code>+layout.server.js</code> files.
    We can also export various page options from these modules:
  </p>
  <ul>
    <li><code>ssr</code> — whether or not pages should be server-rendered</li>
    <li><code>csr</code> — whether to load the SvelteKit client</li>
    <li><code>prerender</code> — whether to prerender pages at build time, instead of per-request</li>
    <li><code>trailingSlash</code> — whether to strip, add, or ignore trailing slashes in URLs</li>
  </ul>
  <p>In the following exercises, we'll learn about each of these in turn.</p>
  <p>Page options can apply to individual pages
    (if exported from <code>+page.js</code> or <code>+page.server.js</code>), or 
    groups of pages (if exported from <code>+layout.js</code> or <code>+layout.server.js</code>).
    To define an option for the whole app, export it from the root layout. Child layouts and pages
    override values set in parent layouts, so — for example — you can enable prerendering for your
    entire app then disable it for pages that need to be dynamically rendered.
  </p>
  <p>You can mix and match these options in different areas of your app — you could prerender your
    marketing pages, dynamically server-render your data-driven pages, and treat your admin pages
    as a client-rendered SPA. This makes SvelteKit very versatile.
  </p>
</div>