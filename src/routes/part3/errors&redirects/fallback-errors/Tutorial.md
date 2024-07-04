------
# **Fallback errors**
If things go _really_ wrong — an error occurs while loading the root layout data, or while rendering the error page — SvelteKit will fall back to a static error page.

Add a new <code data-file="src/routes/+layout.server.ts">src/routes/+layout.server.ts</code> file to see this in action:
```js title="src/routes/+layout.server.ts"
export function load() {
  throw new Error('This is a test message for fallback errors');
}
```
You can customise the fallback error page. Create a <code data-file="src/error.html">src/error.html</code> file:
```html title="src/error.html"
<h1>Fallback Error Page</h1>
<h2>Unexpected Error</h2>
<p>Code %sveltekit.status%</p>
<p>%sveltekit.error.message%</p>
```
This file can include the following:
- `%sveltekit.status%` — the HTTP status code
- `%sveltekit.error.message%` — the error message

[Next: Redirects](/part3/errors&redirects/redirects)
