------
# **The RequestEvent object**
The `event` object passed into `handle` is the same object — an instance of a [RequestEvent](https://kit.svelte.dev/docs/types#public-types-requestevent) — that is passed into [API routes](/part3/api-routes/get-handlers) in `+server.js` files, [form actions](/part3/forms/form-element) in `+page.server.js` files, and `load` functions in `+page.server.js` and `+layout.server.js`.

It contains a number of useful properties and methods, some of which we've already encountered:
- `cookies` — the [cookies API](/part3/headers&cookies/cookies)
- `fetch` — the standard [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), with additional powers
- `getClientAddress()` — a function to get the client's IP address
- `isDataRequest` — `true` if the browser is requesting data for a page during client-side navigation, `false` if a page/route is being requested directly
- `locals` — a place to put arbitrary data
- `params` — the route parameters
- `request` — the [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object
- `route` — an object with an `id` property representing the route that was matched
- `setHeaders(...)` — a function for [setting HTTP headers](/part3/headers&cookies/setting-headers) on the response
- `url` — a [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) object representing the current request

A useful pattern is to add some data to `event.locals` in `handle` so that it can be read in subsequent `load` functions:
```typescript title="src/hooks.server.ts" /event.locals.answer = 42;/
export async function handle({ event, resolve }: HandleParams): Promise<Response> {
  event.locals.answer = 42;
  ...
      return await resolve(event);
  ...
}
```
```javascript title="src/routes/part4/hooks/RequestEvent/+page.server.ts" /event.locals.answer/ /event/
export function load(event) {
  return {
    message: `The answer is ${event.locals.answer}`
  }
}
```

[Next: handleFetch](/part4/hooks/handleFetch)