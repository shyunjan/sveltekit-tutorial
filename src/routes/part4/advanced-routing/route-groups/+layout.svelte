<nav>
  <a href="/part4/advanced-routing/route-groups">Route groups &gt; home</a>
  <a href="/part4/advanced-routing/route-groups/about">about</a>
  <a href="/part4/advanced-routing/route-groups/account">account</a>
  <a href="/part4/advanced-routing/route-groups/app">app</a>
</nav>

<slot />

<div class="tutorial">
  <p>Sometimes it's useful to use layouts without affecting the route — for example, you might need
    your <code>/app</code> and <code>/account</code> routes to be behind authentication, while your
    <code>/about</code> page is open to the world. We can do this with a <em>route group</em>, which
    is a directory in parentheses.
  </p>
  <p>Create an <code>(authed)</code> group by
    renaming <code>account</code> to <code>(authed)/account</code> then
    renaming <code>app</code> to <code>(authed)/app</code>.
  </p>
  <p>Now we can control access to these routes by creating
    <code>./(authed)/+layout.server.js</code>:
  </p>
  <div class="code-block">
    <p>See <code>./(authed)/+layout.server.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> redirect <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltejs/kit'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> cookies<span class="token punctuation">,</span> url <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'logged_in'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">throw</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">303</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/login?redirectTo=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>url<span class="token punctuation">.</span>pathname<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code></pre>
  </div>
  <p>If you try to visit these pages, you'll be redirected to the <code>/login</code> route, which
    has a form action in <code>src/routes/login/+page.server.js</code> that sets the
    <code>logged_in</code> cookie.
  </p>
  <p>We can also add some UI to these two routes by adding a
    <code>src/routes/(authed)/+layout.svelte</code> file:
  </p>
  <div class="code-block">
    <p>See <code>.\(authed)\+layout.svelte</code></p>
    <pre class="language-svelte"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>POST<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/logout<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>log out<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></code></pre>
  </div>
</div>