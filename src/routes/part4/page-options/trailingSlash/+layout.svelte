<nav>
  <a href="/part4/page-options/trailingSlash/always">./always</a> <!-- trailingSlash = 'always'인 경우는 바로 아래 url(./always/)로 redirection된다. -->
  <a href="/part4/page-options/trailingSlash/always/">./always/</a>
  <a href="/part4/page-options/trailingSlash/ignore">./ignore</a> <!-- trailingSlash = 'ignore'인 경우는 서로 별개의 url로 인식되어 redirection되지 않는다. -->
  <a href="/part4/page-options/trailingSlash/ignore/">./ignore/</a>
  <a href="/part4/page-options/trailingSlash/never">./never</a>
  <a href="/part4/page-options/trailingSlash/never/">./never/</a> <!-- trailingSlash = 디폴트('never')인 경우는 바로 위의 url(./never)로 redirection된다. -->
</nav>

<slot />

<div class="tutorial">
  <p>Two URLs like <code>/foo</code> and <code>/foo/</code> might look the same, but they're
    actually different. A relative URL like <code>./bar</code> will resolve to <code>/bar</code> in
    the first case and <code>/foo/bar</code> in the second, and search engines will treat them as
    separate entries, harming your SEO.
  </p>
  <p>In short, being loosey-goosey about trailing slashes is a bad idea. By default, SvelteKit
    strips trailing slashes, meaning that a request for <code>/foo/</code> will result in a 
    redirect to <code>/foo</code>.
  </p>
  <p>If you instead want to ensure that a trailing slash is always present, you can specify the
    <code>trailingSlash</code> option accordingly:
  </p>
  <div class="code-block">
    <p>See <code>.\always\+page.server.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> trailingSlash = <span class="token boolean">always</span>;</code></pre>
  </div>
  <p>To accommodate both cases (this is not recommended!), use <code>'ignore'</code>:</p>
  <div class="code-block">
    <p>See <code>.\ignore\+page.server.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> trailingSlash = <span class="token boolean">ignore</span>;</code></pre>
  </div>
  <p>The default value is <code>'never'.</code></p>
  <p>Whether or not trailing slashes are applied affects prerendering. A URL like
    <code>/always/</code> will be saved to disk as <code>always/index.html</code> whereas a URL like
    <code>/never</code> will be saved as <code>never.html</code>.
  </p>
</div>
