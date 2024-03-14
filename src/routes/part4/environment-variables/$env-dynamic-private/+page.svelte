<script>
  export let form;
</script>

<form method="POST">
  <label>
    enter the passphrase
    <input name="passphrase" autocomplete="off" />
  </label>
</form>

{#if form?.incorrect}
  <p class="error">wrong passphrase!</p>
{/if}

<style>
  .error {
    color: red;
  }
</style>

<div class="tutorial">
  <p>If you need to read the values of environment variables when the app runs, as opposed to when
    the app is built, you can use <code>$env/dynamic/private</code> instead of
    <code>$env/static/private</code>:
  </p>
  <div class="code-block">
    <p>See <code>./+page.server.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> redirect<span class="token punctuation">,</span> fail <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltejs/kit'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="highlight add">env</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$env/<span class="highlight add">dynamic</span>/private'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> cookies <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'allowed'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">throw</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">307</span><span class="token punctuation">,</span> <span class="token string">'/welcome'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> request<span class="token punctuation">,</span> cookies <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">formData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'passphrase'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="highlight add">env<span class="token punctuation">.</span></span><span class="token constant">PASSPHRASE</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'allowed'</span><span class="token punctuation">,</span> <span class="token string">'true'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">throw</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">303</span><span class="token punctuation">,</span> <span class="token string">'/welcome'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">return</span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">incorrect</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</code></pre>
  </div>
</div>