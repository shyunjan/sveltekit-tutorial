<script>
  import { 
    PUBLIC_THEME_BACKGROUND,
    PUBLIC_THEME_FOREGROUND
  } from '$env/static/public';
</script>

<main style:background={PUBLIC_THEME_BACKGROUND} style:color={PUBLIC_THEME_FOREGROUND}>
  {PUBLIC_THEME_FOREGROUND} on {PUBLIC_THEME_BACKGROUND}
</main>

<style>
  main {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 10vmin;
  }
</style>

<div class="mt-16 mb-8 relative">
  <p>Some environment variables can be safely exposed to the browser. These are distinguished from
    private environment variables with a <code>PUBLIC_</code> prefix.
  </p>
  <p>Add values to the two public environment variables in <code>.env</code>:</p>
  <div class="code-block">
    <p>See <code>/.env</code></p>
    <pre class="language-bash"><code><span class="token assign-left variable">PASSPHRASE</span><span class="token operator">=</span><span class="highlight add"><span class="token string">"open sesame"</span></span></code></pre>
  </div>
  <p>Then, import them into <code>src/routes/+page.svelte</code>:</p>
  <div class="code-block">
    <p>See <code>./+page.svelte</code></p>
    <pre class="language-svelte"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="highlight remove">  <span class="token keyword">const</span> <span class="token constant">PUBLIC_THEME_BACKGROUND</span> <span class="token operator">=</span> <span class="token string">'white'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token constant">PUBLIC_THEME_FOREGROUND</span> <span class="token operator">=</span> <span class="token string">'black'</span><span class="token punctuation">;</span></span>
<span class="highlight add">  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
    <span class="token constant">PUBLIC_THEME_BACKGROUND</span><span class="token punctuation">,</span>
    <span class="token constant">PUBLIC_THEME_FOREGROUND</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$env/static/public'</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre>
  </div>
</div>