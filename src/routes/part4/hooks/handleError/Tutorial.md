------
# **HandleError**
The `handleError` hook lets you intercept unexpected errors and trigger some behaviour, like pinging a Slack channel or sending data to an error logging service.

As you'll recall from an [earlier exercise](/part3/errors&redirects/basics), an error is _unexpected_ if it wasn't created with the `error` helper from `@sveltejs/kit`. It generally means something in your app needs fixing. The default behaviour is to log the error:
```typescript title="src/hooks.server.ts"
export function handleError({ event, error }: { event: RequestEvent; error: Error }) {
  console.error(error.stack);
}
```
If you navigate to `/the-bad-place`, you'll see this in action — the error page is shown, and if you open the terminal (using the button to the right of the URL bar), you'll see the message from <code data-file="src/routes/part4/hooks/handleError/the-bad-place/+page.server.ts">src/routes/part4/hooks/handleError/the-bad-place/+page.server.ts</code>.

Notice that we're _not_ showing the error message to the user. That's because error messages can include sensitive information that at best will confuse your users, and at worst could benefit evildoers. Instead, the error object available to your application — represented as `$page.error` in your `+error.svelte` pages, or `%sveltekit.error%` in your `src/error.html` fallback — is just this:
```javascript
{
  message: 'Internal Error' // or 'Not Found' for a 404
}
```
In some situations you may want to customise this object. To do so, you can return an object from `handleError`:
```typescript title="src/hooks.server.ts"
export function handleError({ event, error }: { event: RequestEvent; error: Error }) {
  console.error(error.stack);
  
  return {
    message: 'Unexpected Error',
    code: 'A code that is defined by developer'
  };
}
```
You can now reference properties other than message in a custom `error` page. Create <code data-file="src/routes/+error.svelte">src/routes/+error.svelte</code>:
```svelte title="src/routes/+error.svelte"
<script>
  import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>
<p>{$page.error?.message}</p>
<p>error code: {$page.error?.code}</p>
```

[Next: Page options](/part4/page-options/basics)
