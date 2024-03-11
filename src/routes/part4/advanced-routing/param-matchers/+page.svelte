<h1>color picker</h1>

<div class="tutorial">
  <p>To prevent the router from matching on invalid input, you can specify a matcher. For example,
    you might want a route like <code>/colors/[value]</code> to match hex values like
    <code>/colors/ff3e00</code> but not named colors like <code>/colors/octarine</code> or any
    other arbitrary input.
  </p>
  <p>First, create a new file called <code>src/params/hex.js</code> and export a <code>match</code>
    function from it:
  </p>
  <div class="code-block">
    <p>See <code>src\params\hex.js</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">match</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[0-9a-f]&#123;6&#125;$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code></pre>
  </div>
  <p>Then, to use the new matcher, rename <code>src/routes/colors/[color]</code> to
    <code>src/routes/colors/[color=hex]</code>.
  </p>
  <blockquote>
    <p>Matchers run both on the server and in the browser.</p>
  </blockquote>
</div>