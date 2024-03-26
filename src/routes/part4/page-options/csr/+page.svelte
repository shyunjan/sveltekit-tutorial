<script>
  import { browser } from '$app/environment';

  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<h1>Rendered {browser ? 'in the browser' : 'on the server'}</h1>

<button on:click={increment}>
  Clicks: {count}
</button>

<div class="tutorial">
  <p>Client-side rendering is what makes the page interactive — such as incrementing the counter
    when you click the button in this app — and enables SvelteKit to update the page upon
    navigation without a full-page reload.
  </p>
  <p>As with <code>ssr</code>, you can disable client-side rendering altogether:</p>
  <div class="code-block">
    <p>See <code>.\+page.server.ts</code></p>
    <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> csr = <span class="token boolean">false</span>;</code></pre>
  </div>
  <p>This means that no JavaScript is served to the client, but it also means that your components
    are no longer interactive. It can be a useful way to check whether or not your application is
    usable for people who — for whatever reason — cannot use JavaScript.
  </p>
</div>
