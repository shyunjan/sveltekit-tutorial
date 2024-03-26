<p>if a = 1 and b = a + 1, what is a + b?</p>
<a href="/part4/advanced-loading/using-parent-data/sum">show answer</a>

<div class="tutorial">
  <p>As we saw in the introduction to
    <a href="https://learn.svelte.dev/tutorial/layout-data" target="_blank">layout data</a>,
    <code>+page.svelte</code> and <code>+layout.svelte</code> components have access to everything
    returned from their parent load functions.
  </p>
  <p>Occasionally it's useful for the <code>load</code> functions themselves to access data from
    their parents. This can be done with <code>await parent()</code>.
  </p>
  <p>To show how it works, we'll sum two numbers that come from different <code>load</code>
    functions. First, return some data from <code>src/routes/+layout.server.js</code>:</p>
  <div class="code-block">
    <p>See <code>./+layout.server.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="highlight add"><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span></span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code></pre>
  </div>
  <p>Then, get that data in <code>src/routes/sum/+layout.ts</code>:</p>
  <div class="code-block">
    <p>See <code>./sum/+layout.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="highlight add"><span class="token parameter"><span class="token punctuation">&#123;</span> parent <span class="token punctuation">&#125;</span></span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="highlight add"><span class="token keyword">const</span> <span class="token punctuation">&#123;</span> a <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="highlight add"><span class="token literal-property property">b</span><span class="token operator">:</span> a <span class="token operator">+</span> <span class="token number">1</span></span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code></pre>
  </div>
  <blockquote>
    <p>Notice that a
      <a href="https://learn.svelte.dev/tutorial/universal-load-functions" 
         target="_blank">universal</a> <code>load</code> function can get data from a parent server
      <code>load</code> function. The reverse is not true — a <em>server</em> <code>load</code>
      function can only get parent data from another server load function.</p>
  </blockquote>  
  <p>Finally, in <code>src/routes/sum/+page.js</code>, get parent data from both <code>load</code> functions:</p>
  <div class="code-block">
    <p>See <code>./sum/+page.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="highlight add"><span class="token parameter"><span class="token punctuation">&#123;</span> parent <span class="token punctuation">&#125;</span></span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="highlight add"><span class="token keyword">const</span> <span class="token punctuation">&#123;</span> a<span class="token punctuation">,</span> b <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="highlight add"><span class="token literal-property property">c</span><span class="token operator">:</span> a <span class="token operator">+</span> b</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code></pre>
  </div>
  <blockquote>
    <p>Take care not to introduce waterfalls when using <code>await parent()</code>. If you can
      <code>fetch</code> other data that is not dependent on parent data, do that first.</p>
  </blockquote>  
</div>