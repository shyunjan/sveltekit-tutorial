<script>
  import { env } from '$env/dynamic/public';
</script>

<main style:background={env.PUBLIC_THEME_BACKGROUND} style:color={env.PUBLIC_THEME_FOREGROUND}>
  {env.PUBLIC_THEME_FOREGROUND} on {env.PUBLIC_THEME_BACKGROUND}
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

<div class="tutorial">
  <p>As with
    <a href="https://learn.svelte.dev/tutorial/env-static-private" target="_blank"
    >private environment variables</a>, it's preferable to use static values if possible, but if
    necessary we can use dynamic values instead:
  </p>
  <div class="code-block">
    <p>See <code>./+page.svelte</code></p>
    <pre class="language-svelte"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="highlight add">env</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$env/<span class="highlight add">dynamic</span>/public'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span>
  <span class="token attr-name"><span class="token namespace">style:</span>background=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="highlight add">env<span class="token punctuation">.</span></span><span class="token constant">PUBLIC_THEME_BACKGROUND</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name"><span class="token namespace">style:</span>color=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="highlight add">env<span class="token punctuation">.</span></span><span class="token constant">PUBLIC_THEME_FOREGROUND</span><span class="token punctuation">&#125;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="highlight add">env<span class="token punctuation">.</span></span><span class="token constant">PUBLIC_THEME_FOREGROUND</span><span class="token punctuation">&#125;</span></span> on <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="highlight add">env<span class="token punctuation">.</span></span><span class="token constant">PUBLIC_THEME_BACKGROUND</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span></code></pre>
  </div>
</div>