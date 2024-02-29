<script>
  export let data;
</script>

<h1>{data.message}</h1>
<div class="tutorial">
  <p>
    The <code>event</code> object passed into <code>handle</code> is the same object — an instance
    of a 
    <a href="https://kit.svelte.dev/docs/types#public-types-requestevent" target="_blank">RequestEvent</a> 
    — that is passed into
    <a href="https://learn.svelte.dev/tutorial/get-handlers" target="_blank">API routes</a> in
    <code>+server.js</code> files,
    <a href="https://learn.svelte.dev/tutorial/the-form-element" target="_blank">form actions</a> 
    in <code>+page.server.js</code> files, and <code>load</code> functions in 
    <code>+page.server.js</code> and <code>+layout.server.js</code>.
  </p>
  <p>
    it contains a number of useful properties and methods, some of which we've already encountered:
  </p>
  <ul>
    <li>
      <code>cookies</code> — the
      <a href="https://learn.svelte.dev/tutorial/cookies" target="_blank">cookies API</a>
    </li>
    <li>
      <code>fetch</code> — the standard 
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" 
        target="_blank">Fetch API</a>, with additional powers
    </li>
    <li><code>getClientAddress()</code> — a function to get the client's IP address</li>
    <li><code>isDataRequest</code> — <code>true</code> if the browser is requesting data for a page 
      during client-side navigation, <code>false</code> if a page/route is being requested directly
    </li>
    <li><code>locals</code> — a place to put arbitrary data</li>
    <li><code>params</code> — the route parameters</li>
    <li><code>request</code> — the 
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/Request" target="_blank">Request</a>
      object
    </li>
    <li><code>route</code> — an object with an <code>id</code> property representing the route that
      was matched
    </li>
    <li><code>setHeaders(...)</code> — a function for 
      <a href="https://learn.svelte.dev/tutorial/headers" target="_blank">setting HTTP headers</a>
      objecton the response
    </li>
    <li><code>url</code> — a
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank">URL</a>
      object representing the current request
    </li>
  </ul>
  <p>See <code>src\hooks.server.ts</code> and 
    <code>src\routes\part4\hooks\RequestEvent\+page.server.ts</code>.
  </p>
</div>
