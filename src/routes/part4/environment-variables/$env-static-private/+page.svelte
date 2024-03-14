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
  <p>Environment variables — like API keys and database credentials — can be added to a
    <code>.env</code> file, and they will be made available to your application.
  </p>
  <blockquote>
    <p>You can also use <code>.env.local</code> or <code>.env.[mode]</code> files — see the 
      <a href="https://vitejs.dev/guide/env-and-mode.html#env-files" 
         target="_blank">Vite documentation</a> for more information. Make sure you add any files
      containing sensitive information to your .gitignore file!
      <br/>
      Environment variables in <code>process.env</code> are also available via
      <code>$env/static/private</code>.
    </p>
  </blockquote>
  <p>In this exercise, we want to allow the user to enter the website if they know the correct
    passphrase, using an environment variable.</p>
  <p>First, in .env, add a new environment variable:</p>
  <div class="code-block">
    <p>See <code>/.env</code></p>
    <pre class="language-bash"><code><span class="token assign-left variable">PASSPHRASE</span><span class="token operator">=</span><span class="highlight add"><span class="token string">"open sesame"</span></span></code></pre>
  </div>
  <p>Open <code>src/routes/+page.server.js</code>. Import <code>PASSPHRASE</code> from
    <code>$env/static/private</code> and use it inside the
    <a href="https://learn.svelte.dev/tutorial/the-form-element" target="_blank">form action</a>:
  </p>
  <div class="code-block">
    <p>See <code>./+page.server.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> redirect<span class="token punctuation">,</span> fail <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltejs/kit'</span><span class="token punctuation">;</span>
<span class="highlight add"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">PASSPHRASE</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$env/static/private'</span><span class="token punctuation">;</span></span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> cookies <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'allowed'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">throw</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">307</span><span class="token punctuation">,</span> <span class="token string">'/welcome'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> request<span class="token punctuation">,</span> cookies <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">formData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'passphrase'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="highlight add"><span class="token constant">PASSPHRASE</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'allowed'</span><span class="token punctuation">,</span> <span class="token string">'true'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">throw</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">303</span><span class="token punctuation">,</span> <span class="token string">'/welcome'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">return</span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">incorrect</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code></pre>
  </div>
  <p>The website is now accessible to anyone who knows the correct passphrase.</p>
  <h2>Keeping secrets</h2>
  <p>It's important that sensitive data doesn't accidentally end up being sent to the browser,
    where it could easily be stolen by hackers and scoundrels.
  </p>
  <p>SvelteKit makes it easy to prevent this from happening. Notice what happens if we try to import
    <code>PASSPHRASE</code> into <code>src/routes/+page.svelte</code>:
  </p>
  <div class="code-block">
    <p>See <code>./+page.svelte</code></p>
    <pre class="language-svelte"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="highlight add"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">PASSPHRASE</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$env/static/private'</span><span class="token punctuation">;</span></span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> form<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre>
  </div>
  <p>An error overlay pops up, telling us that <code>$env/static/private</code> cannot be imported
    into client-side code. It can only be imported into server modules:
  </p>
  <ul>
    <li><code>+page.server.js</code></li>
    <li><code>+layout.server.js</code></li>
    <li><code>+server.js</code></li>
    <li>any modules ending with <code>.server.js</code></li>
    <li>any modules inside <code>src/lib/server</code></li>
  </ul>
  <p>In turn, these modules can only be imported by <em>other</em> server modules.</p>
  <h2>Static vs dynamic</h2>
  <p>The static in <code>$env/static/private</code> indicates that these values are known at
    build time, and can be <em>statically replaced</em>. This enables useful optimisations:
  </p>
  <div class="code-block">
    <p>This is an example source.</p>
    <pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">FEATURE_FLAG_X</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$env/static/private'</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">FEATURE_FLAG_X</span> <span class="token operator">===</span> <span class="token string">'enabled'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// code in here will be removed from the build output</span>
  <span class="token comment">// if FEATURE_FLAG_X is not enabled</span>
<span class="token punctuation">&#125;</span></code></pre>
  </div>
  <p>In some cases you might need to refer to environment variables that are <em>dynamic</em> —
    in other words, not known until we run the app. We'll cover this case in the next exercise.
  </p>
</div>