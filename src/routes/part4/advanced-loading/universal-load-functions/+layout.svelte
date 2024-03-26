<script>
  import { page } from '$app/stores';
</script>

<nav class:has-color={!!$page.data.color} style:background={$page.data.color ?? 'var(--bg-2)'}>
  <a href="/part4/advanced-loading/universal-load-functions">Universal load functions &gt; home</a>
  <a href="/part4/advanced-loading/universal-load-functions/red">red</a>
  <a href="/part4/advanced-loading/universal-load-functions/green">green</a>
  <a href="/part4/advanced-loading/universal-load-functions/blue">blue</a>

  {#if $page.data.component}
    <div>
      [ <svelte:component this={$page.data.component} />]
    </div>
  {/if}
</nav>

<slot />

<style>
  nav.has-color,
  nav.has-color a {
    color: white;
    white-space: nowrap;
  }

  nav div {
    display: flex;
  }
</style>

<div class="mt-16 mb-8 relative">
  <p>In the <a href="https://learn.svelte.dev/tutorial/page-data" target="_blank">previous
    section on loading</a> we loaded data from the server using <code>+page.server.js</code> and
    <code>+layout.server.js</code> files. This is very convenient if you need to do things like
    getting data directly from a database, or reading cookies.
  </p>
  <p>Sometimes it doesn't make sense to load data from the server when doing a client-side navigation.
    For example:
  </p>
  <ul>
    <li>You're loading data from an external API</li>
    <li>You want to use in-memory data if it's available</li>
    <li>You want to delay navigation until an image has been preloaded, to avoid pop-in</li>
    <li>You need to return something from <code>load</code> that can't be serialized (SvelteKit uses
      <a href="https://github.com/Rich-Harris/devalue" target="_blank">devalue</a> to turn
      server data into JSON), such as a component or a store</li>
  </ul>
  <p>In this exercise, we're dealing with the latter case. The server load functions in
    <code>./red/+page.server.js</code>, <code>./green/+page.server.js</code> and
    <code>./blue/+page.server.js</code> return a component constructor, which can't be serialized
    like data. If you navigate to <code>/red</code>, <code>/green</code> or <code>/blue</code>,
    you'll see a 'Data returned from <code>load</code> ... is not serializable' error in the
    terminal.
  </p>
  <p>To turn the server <code>load</code> functions into universal <code>load</code> functions,
    rename each <code>+page.server.js</code> file to <code>+page.js</code>. Now, the functions will
    run on the server during server-side rendering, but will also run in the browser when the app
    hydrates or the user performs a client-side navigation.</p>
  <p>We can now use the <code>component</code> returned from these <code>load</code> functions like
    any other value, including in <code>./+layout.svelte</code>:</p>  
  <div class="code-block">
    <p>See <code>.\+layout.svelte</code></p>
    <pre class="language-svelte"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span>
  <span class="token attr-name"><span class="token namespace">class:</span>has-color=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">!</span><span class="token operator">!</span>$page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>color<span class="token punctuation">&#125;</span></span>
  <span class="token attr-name"><span class="token namespace">style:</span>background=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>$page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>color <span class="token operator">??</span> <span class="token string">'var(--bg-2)'</span><span class="token punctuation">&#125;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/red<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/green<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>green<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/blue<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>blue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="highlight add">  <span class="token"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> $page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>component<span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>component</span> <span class="token attr-name">this=</span><span class="token"><span class="token punctuation">&#123;</span>$page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>component<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span></code></pre>
  </div>
  <p>Read the
    <a href="https://kit.svelte.dev/docs/load#universal-vs-server" target="_blank">documentation</a>
    to learn more about the distinction between server load functions and universal
    <code>load</code> functions, and when to use which.
  </p>
</div>
