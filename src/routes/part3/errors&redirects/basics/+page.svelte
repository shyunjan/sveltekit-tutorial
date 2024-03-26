<h1>Errors and redirects &gt; Basics</h1>
<div class="tutorial">
  <p>
    See <code>.\+error.svelte</code>, <code>.\expected\+page.server.ts</code>,
    <code>.\expected\+error.svelte</code> and <code>.\unexpected\+page.server.ts</code>.
  </p>
  <p>
    When you throw an expected error, you're telling SvelteKit 'don't worry, I know what I'm doing
    here'. An unexpected error, by contrast, is assumed to be a bug in your app. When an unexpected
    error is thrown, its message and stack trace will be logged to the console.
  </p>
</div>
