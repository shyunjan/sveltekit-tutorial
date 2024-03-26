<h1>Errors and redirects &gt; Redirects</h1>
<div class="mt-16 mb-8 relative">
  <p>
    You can <code>throw redirect(...)</code> inside <code>load</code> functions, form actions, API routes and the <code>handle</code> hook, which we'll discuss in a later chapter.
  </p>
  <ul>
    <li><code>303</code> — for form actions, following a successful submission
    <li><code>307</code> — for temporary redirects
    <li><code>308</code> — for permanent redirects
  </ul>
  <p>See <code>.\from\+page.server.ts</code>.</p>
</div>