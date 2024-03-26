<script>
  export let data;
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>

<div class="mt-16 mb-8 relative"  style="--pos: 33%">
  <p>
    To set a cookie, use <code>cookies.set(name, value, options)</code>. It's strongly recommended
    that you explicitly configure the <code>path</code> when setting a cookie, since browsers' default
    behaviour — somewhat uselessly — is to set the cookie on the parent of the current path.
  </p>
  <p>
    Calling <code>cookies.set(name, ...)</code> causes a <code>Set-Cookie</code> header to be
    written, but it also updates the internal map of cookies, meaning any subsequent calls to
    <code>cookies.get(name)</code> during the same request will return the updated value. Under the
    hood, the <code>cookies</code> API uses the popular <code>cookie</code> package — the options
    passed to <code>cookies.get</code> and <code>cookies.set</code> correspond to the
    <code>parse</code> and <code>serialize</code> options from the <code>cookie</code>
    <a href="https://github.com/jshttp/cookie#api" target="_blank">documentation</a>. SvelteKit sets
    the following defaults to make your cookies more secure:
  </p>
  <div class="code-block">
    <pre class="language-javascript"><code> &#123
    httpOnly: <span class="token boolean">true</span>;
    secure: <span class="token boolean">true</span>;
    sameSite: <span class="token string">'lax'</span>;
  &#125</code></pre>
  </div>
</div>