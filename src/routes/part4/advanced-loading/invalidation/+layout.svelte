<nav>
  <a href="/part4/advanced-loading/invalidation/America/New_York">New York</a>
  <a href="/part4/advanced-loading/invalidation/America/Sao_Paulo">São Paulo</a>
  <a href="/part4/advanced-loading/invalidation/Europe/London">London</a>
  <a href="/part4/advanced-loading/invalidation/Europe/Paris">Paris</a>
  <a href="/part4/advanced-loading/invalidation/Africa/Cairo">Cairo</a>
  <a href="/part4/advanced-loading/invalidation/Asia/Shanghai">Shanghai</a>
  <a href="/part4/advanced-loading/invalidation/Asia/Tokyo">Tokyo</a>
  <a href="/part4/advanced-loading/invalidation/Australia/Sydney">Sydney</a>
  <a href="/part4/advanced-loading/invalidation/America/Los_Angeles">Los Angeles</a>
</nav>

<slot />

<div class="tutorial">
  <p>When the user navigates from one page to another, SvelteKit calls your <code>load</code>
    functions, but only if it thinks something has changed.
  </p>
  <p>In this example, navigating between timezones causes the <code>load</code> function in
    <code>src/routes/[...timezone]/+page.js</code> to re-run because params.timezone is invalid. But
    the <code>load</code> function in <code>src/routes/+layout.js</code> does not re-run, because
    as far as SvelteKit is concerned it wasn't invalidated by the navigation.
  </p>
  <p>We can fix that by manually invalidating it using the
    <a href="https://kit.svelte.dev/docs/modules#$app-navigation-invalidate" 
      target="_blank">invalidate(...)</a>
    function, which takes a URL and re-runs any <code>load</code> functions that depend on it.
    Because the <code>load</code> function in <code>src/routes/+layout.js</code> calls
    <code>fetch('/api/now')</code>, it depends on <code>/api/now</code>.
  </p>
  <p>In <code>src/routes/[...timezone]/+page.svelte</code>, add an <code>onMount</code> callback
    that calls <code>invalidate('/api/now')</code> once a second:
  </p>
  <div class="code-block">
    <p>See <code>./[...timezone]/+page.svelte</code></p>
    <pre class="language-svelte"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="highlight add"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span></span>
  <span class="highlight add"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> invalidate <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/navigation'</span><span class="token punctuation">;</span></span>

  <span class="token keyword">export</span> <span class="token keyword">let</span> data<span class="token punctuation">;</span>

  <span class="highlight add"><span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
      <span class="token function">invalidate</span><span class="token punctuation">(</span><span class="token string">'/api/now'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>DateTimeFormat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">timeStyle</span><span class="token operator">:</span> <span class="token string">'full'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timeZone</span><span class="token operator">:</span> data<span class="token punctuation">.</span>timezone
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></code></pre>
  </div>
  <blockquote>
    <p>You can also pass a function to <code>invalidate</code>, in case you want to invalidate based
      on a pattern and not specific URLs
    </p>
  </blockquote>  
</div>