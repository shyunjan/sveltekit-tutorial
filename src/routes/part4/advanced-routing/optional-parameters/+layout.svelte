<nav>
  <a href="/part4/advanced-routing/optional-parameters">default</a>
  <a href="/part4/advanced-routing/optional-parameters/en">english</a>
  <a href="/part4/advanced-routing/optional-parameters/de">german</a>
  <a href="/part4/advanced-routing/optional-parameters/fr">french</a>
</nav>

<slot />

<div class="mt-16 mb-8 relative">
  <p>Sometimes it's helpful to make a parameter optional. A classic example is when you use
    the pathname to determine the locale — <code>/fr/...</code>, <code>/de/...</code> and so on —
    but you also want to have a default locale.
  </p>
  <p>To do that, we use double brackets. Rename the [lang] directory to [[lang]].</p>
  <div class="code-block">
    <p>See <code>./[[lang]]/+page.server.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> params <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">greeting</span><span class="token operator">:</span> greetings<span class="token punctuation">[</span>params<span class="token punctuation">.</span>lang <span class="highlight add"><span class="token operator">??</span> <span class="token string">'en'</span></span><span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code></pre>
  </div>
</div>
