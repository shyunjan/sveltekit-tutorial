<script lang="ts">
  export let form;

  import PageServer from './components/PageServer.md';
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

<div class="tutorial">
  <PageServer />
  <h2>Keeping secrets</h2>
  <p>
    It's important that sensitive data doesn't accidentally end up being sent to the browser, where
    it could easily be stolen by hackers and scoundrels.
  </p>
  <p>
    SvelteKit makes it easy to prevent this from happening. Notice what happens if we try to import
    <code>PASSPHRASE</code> into <code>src/routes/+page.svelte</code>:
  </p>
  <div class="code-block">
    <p>See <code>./+page.svelte</code></p>
    <pre class="language-svelte"><code
        ><span class="token tag"
          ><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span
            class="token punctuation">&gt;</span
          ></span
        ><span class="token script"
          ><span class="token language-javascript">
  <span class="highlight add"
              ><span class="token keyword">import</span> <span class="token punctuation"
                >&#123;</span
              > <span class="token constant">PASSPHRASE</span> <span class="token punctuation"
                >&#125;</span
              > <span class="token keyword">from</span> <span class="token string"
                >'$env/static/private'</span
              ><span class="token punctuation">;</span></span
            >
  <span class="token keyword">export</span> <span class="token keyword">let</span> form<span
              class="token punctuation">;</span
            >
</span></span
        ><span class="token tag"
          ><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span
            class="token punctuation">&gt;</span
          ></span
        ></code
      ></pre>
  </div>
  <p>
    An error overlay pops up, telling us that <code>$env/static/private</code> cannot be imported into
    client-side code. It can only be imported into server modules:
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
  <p>
    The static in <code>$env/static/private</code> indicates that these values are known at build
    time, and can be <em>statically replaced</em>. This enables useful optimisations:
  </p>
  <div class="code-block">
    <p>This is an example source.</p>
    <pre class="language-javascript"><code
        ><span class="token keyword">import</span> <span class="token punctuation">&#123;</span
        > <span class="token constant">FEATURE_FLAG_X</span> <span class="token punctuation"
          >&#125;</span
        > <span class="token keyword">from</span> <span class="token string"
          >'$env/static/private'</span
        ><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span
          class="token constant">FEATURE_FLAG_X</span
        > <span class="token operator">===</span> <span class="token string">'enabled'</span><span
          class="token punctuation">)</span
        > <span class="token punctuation">&#123;</span>
  <span class="token comment">// code in here will be removed from the build output</span>
  <span class="token comment">// if FEATURE_FLAG_X is not enabled</span>
<span class="token punctuation">&#125;</span></code
      ></pre>
  </div>
  <p>
    In some cases you might need to refer to environment variables that are <em>dynamic</em> — in other
    words, not known until we run the app. We'll cover this case in the next exercise.
  </p>
</div>

<style>
  .error {
    color: red;
  }
</style>
