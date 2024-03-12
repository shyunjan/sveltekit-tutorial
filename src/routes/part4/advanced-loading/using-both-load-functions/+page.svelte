<script>
  export let data;
</script>

<svelte:component this={data.component} message={data.message} />

<div class="tutorial">
  <p>Occasionally, you might need to use a server load function and a universal load function
    together. For example, you might need to return data from the server, but also return a
    value that can't be serialized as server data.
  </p>
  <p>In this example we want to return a different component from <code>load</code> depending on
    whether the data we got from <code>./+page.server.js</code> is <code>cool</code> or not.
  </p>
  <p>We can access server data in <code>./+page.js</code> via the <code>data</code> property:</p>  
  <div class="code-block">
    <p>See <code>.\+page.ts</code> and <code>.\+page.server.ts</code></p>
    <pre class="language-javascript">
<code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="highlight add"><span class="token parameter"><span class="token punctuation">&#123;</span> data <span class="token punctuation">&#125;</span></span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="highlight add">data<span class="token punctuation">.</span>cool</span>
    <span class="token operator">?</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./CoolComponent.svelte'</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./BoringComponent.svelte'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> module<span class="token punctuation">.</span>default<span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="highlight add">data<span class="token punctuation">.</span>message</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code></pre>
  </div>
  <blockquote>
    <p>Note that the data isn't merged — we must explicitly return <code>message</code> from the
      universal <code>load</code> function.</p>
  </blockquote>  
</div>

