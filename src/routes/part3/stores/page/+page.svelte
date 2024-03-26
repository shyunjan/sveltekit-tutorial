<h1>Stores &gt; page</h1>
<div class="mt-16 mb-8 relative">
  <p>
    SvelteKit makes three readonly stores available via the <code>$app/stores</code> module — 
    <code>page</code>, <code>navigating</code> and <code>updated</code>. The one you'll use most 
    often is <a href="https://kit.svelte.dev/docs/types#public-types-page" target="_blank">page</a>
    , which provides information about the current page:
  </p>
  <ul>
    <li><code>url</code> — the <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" 
      target="_blank">URL</a> of the current page</li>
    <li><code>params</code> — the current page's parameters</li>
    <li><code>route</code> — an object with an <code>id</code> property representing the current route</li>
    <li><code>status</code> — the HTTP status code of the current page</li>
    <li><code>error</code> — the error object of the current page, if any 
      (you'll learn more about error handling in later exercises)</li>
    <li><code>data</code> — the data for the current page, combining the return values of all 
      <code>load</code> functions</li>
    <li><code>form</code> — the data returned from a 
      <a href="/part3/forms/progressive-enhancement">form action</a></li>
  </ul>
  <p>See <code>src\routes\part3\stores\+layout.svelte</code>.</p>
</div>
