<nav>
  <a href="/part4/advanced-loading/invalidateAll/America/New_York">New York</a>
  <a href="/part4/advanced-loading/invalidateAll/America/Sao_Paulo">São Paulo</a>
  <a href="/part4/advanced-loading/invalidateAll/Europe/London">London</a>
  <a href="/part4/advanced-loading/invalidateAll/Europe/Paris">Paris</a>
  <a href="/part4/advanced-loading/invalidateAll/Africa/Cairo">Cairo</a>
  <a href="/part4/advanced-loading/invalidateAll/Asia/Shanghai">Shanghai</a>
  <a href="/part4/advanced-loading/invalidateAll/Asia/Tokyo">Tokyo</a>
  <a href="/part4/advanced-loading/invalidateAll/Australia/Sydney">Sydney</a>
  <a href="/part4/advanced-loading/invalidateAll/America/Los_Angeles">Los Angeles</a>
</nav>

<slot />

<div class="tutorial">
  <p>Finally, there's the nuclear option — <code>invalidateAll()</code>. This will indiscriminately
    re-run all <code>load</code> functions for the current page, regardless of what they depend on.
  </p>
  <p>Update <code>src/routes/[...timezone]/+page.svelte</code> from the previous exercise:</p>
  <div class="code-block">
    <p>See <code>./[...timezone]/+page.svelte</code></p>
    <pre class="language-svelte"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="highlight add">invalidateAll</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/navigation'</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">let</span> data<span class="token punctuation">;</span>

  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
      <span class="highlight add"><span class="token function">invalidateAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre>
  </div>
  <p>The <code>depends</code> call in <code>src/routes/+layout.js</code> is no longer necessary:</p>
  <div class="code-block">
    <p>See <code>./+layout.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="highlight remove"><span class="token parameter"><span class="token punctuation">&#123;</span> depends <span class="token punctuation">&#125;</span></span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="highlight remove"><span class="token function">depends</span><span class="token punctuation">(</span><span class="token string">'data:now'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">now</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code></pre>
  </div>
  <blockquote>
    <p><code>invalidate(() => true)</code> and <code>invalidateAll</code> are not the same.
      <code>invalidateAll</code> also re-runs <code>load</code> functions without any
      <code>url</code> dependencies, which <code>invalidate(() => true)</code> does not.
    </p>
  </blockquote>
</div>