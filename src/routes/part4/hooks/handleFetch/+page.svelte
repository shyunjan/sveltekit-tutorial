<script>
  export let data;
</script>

<h1>{data.message}</h1>
<div class="tutorial">
  <p>The <code>event</code> object has a <code>fetch</code> method that behaves like the standard 
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank">
      Fetch API</a>, 
    but with superpowers:
  </p>
  <ul>
    <li>it can be used to make credentialed requests on the server, as it inherits the 
      <code>cookie</code> and <code>authorization</code> headers from the incoming request</li>
    <li>it can make relative requests on the server (ordinarily, <code>fetch</code> requires a URL 
      with an origin when used in a server context)</li>
    <li>internal requests (e.g. for <code>+server.js</code> routes) go directly to the 
      handler function when running on the server, without the overhead of an HTTP call</li>
  </ul>
  <p>See <code>.\+page.server.ts</code>, <code>src\hooks.server.ts</code>,
    <code>.\api-a\+server.ts</code> and <code>.\api-b\+server.ts</code>.
  </p>
  <p>Later, when we cover 
    <a href="https://learn.svelte.dev/tutorial/universal-load-functions" 
      target="_blank">universal load functions</a>, we'll see that <code>event.fetch</code> can also
    be called from the browser. In that scenario, <code>handleFetch</code> is useful if you have
    requests to a public URL like <code>https://api.yourapp.com</code> from the browser, that should
    be redirected to an internal URL (bypassing whatever proxies and load balancers sit between the 
    API server and the public internet) when running on the server.
  </p>
</div>
