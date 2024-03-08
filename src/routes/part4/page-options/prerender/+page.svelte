<h1>Prerendering</h1>

<div class="tutorial">
  <p>
    Prerendering means generating HTML for a page once, at build time, rather than dynamically for
    each request.
  </p>
  <p>
    The advantage is that serving static data is extremely cheap and performant, allowing you to
    easily serve large numbers of users without worrying about cache-control headers (which are easy
    to get wrong).
  </p>
  <p>
    The tradeoff is that the build process takes longer, and prerendered content can only be updated
    by building and deploying a new version of the application.
  </p>
  <p>To prerender a page, set <code>prerender</code> to <code>true</code>:</p>
  <div class="code-block">
    <p>See .\+page.server.ts</p>
    <pre class="language-javascript"><code
        ><span class="token keyword">export</span> <span class="token keyword">const</span
        > prerender = <span class="token boolean">true</span>;</code
      ></pre>
  </div>
  <p>
    Here in the tutorial, this won't have any observable effect, since the application is running in <code
      >dev</code
    > mode.
  </p>
  <p>Not all pages can be prerendered. The basic rule is this: for content to be prerenderable, any
    two users hitting it directly must get the same content from the server, and the page must not
    contain form actions. Pages with dynamic route parameters can be prerendered as long as they are
    specified in the
    <a href="https://kit.svelte.dev/docs/configuration#prerender"
       target="_blank">prerender.entries</a> configuration or can be reached by following links from
    pages that are in <code>prerender.entries</code>.
  </p>
  <p class="note">
    <span>NOTE</span>
    Setting <code>prerender</code> to <code>true</code> inside your root
    <code>+layout.server.js</code> effectively turns SvelteKit into a static site generator (SSG).
  </p>
</div>
