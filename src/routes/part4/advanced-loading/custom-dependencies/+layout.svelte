<nav>
  <a href="/part4/advanced-loading/custom-dependencies/America/New_York">New York</a>
  <a href="/part4/advanced-loading/custom-dependencies/America/Sao_Paulo">São Paulo</a>
  <a href="/part4/advanced-loading/custom-dependencies/Europe/London">London</a>
  <a href="/part4/advanced-loading/custom-dependencies/Europe/Paris">Paris</a>
  <a href="/part4/advanced-loading/custom-dependencies/Africa/Cairo">Cairo</a>
  <a href="/part4/advanced-loading/custom-dependencies/Asia/Shanghai">Shanghai</a>
  <a href="/part4/advanced-loading/custom-dependencies/Asia/Tokyo">Tokyo</a>
  <a href="/part4/advanced-loading/custom-dependencies/Australia/Sydney">Sydney</a>
  <a href="/part4/advanced-loading/custom-dependencies/America/Los_Angeles">Los Angeles</a>
</nav>

<slot />

<div class="tutorial">
  <p>Calling <code>fetch(url)</code> inside a <code>load</code> function registers <code>url</code>
    as a dependency. Sometimes it's not appropriate to use <code>fetch</code>, in which case you can
    specify a dependency manually with the
    <a href="https://kit.svelte.dev/docs/load#rerunning-load-functions-manual-invalidation"
       target="_blank">depends(url)</a> function.
  </p>
  <p>Since any string that begins with an <code>[a-z]+:</code> pattern is a valid URL, we can create
    custom invalidation keys like <code>data:now</code>.
  </p>
  <p>Update <code>src/routes/+layout.js</code> to return a value directly rather than making a
    <code>fetch</code> call, and add the <code>depends</code>:
  </p>
  <div class="code-block">
    <p>See <code>./+layout.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> <span class="highlight add">depends</span> <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="highlight add"><span class="token function">depends</span><span class="token punctuation">(</span><span class="token string">'data:now'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">now</span><span class="token operator">:</span> <span class="highlight add">Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code></pre>
  </div>
  <p>Now, update the <code>invalidate</code> call in <code>src/routes/[...timezone]/+page.svelte</code>:</p>
  <div class="code-block">
    <p>See <code>./[...timezone]/+page.svelte</code></p>
    <pre class="language-svelte"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> invalidate <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/navigation'</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">let</span> data<span class="token punctuation">;</span>

  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
      <span class="token function">invalidate</span><span class="token punctuation">(</span><span class="highlight add"><span class="token string">'data:now'</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre>
  </div>
  
</div>