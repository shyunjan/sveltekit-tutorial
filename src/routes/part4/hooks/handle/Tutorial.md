------
# **Handle**
SvelteKit provides several _hooks_ — ways to intercept and override the framework's default behaviour.

The most elementary hook is `handle`, which lives in <code data-file="src/hooks.server.ts">src/hooks.server.ts</code>. It receives an `event` object along with a `resolve` function, and returns a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response).

`resolve` is where the magic happens: SvelteKit matches the incoming request URL to a route of your app, imports the relevant code (`+page.server.js` and `+page.svelte` files and so on), loads the data needed by the route, and generates the response.

The default handle hook looks like this:
```typescript title="src/hooks.server.ts"
export async function handle({ event, resolve }: HandleParams): Promise<Response> {
  return await resolve(event);
}
```
For pages (as opposed to [API routes](/part3/api-routes/get-handlers)), you can modify the generated HTML with `transformPageChunk`:
```typescript title="src/hooks.server.ts" {6-7} /      transformPageChunk: ({ html }: { html: string }) => html.replace(/ /      )/
export async function handle({ event, resolve }: HandleParams): Promise<Response> {
  ...
  case '/part4/hooks/handle':
    return await resolve(event, {
      transformPageChunk: ({ html }: { html: string }) => html.replace(
        '<body',
        '<body style="color: hotpink"'
      )
    });
  ...
}
```
You can also create entirely new routes:
```typescript title="src/hooks.server.ts" "    case '/part4/hooks/handle/ping':" /      return new Response('pong');/
export async function handle({ event, resolve }: HandleParams): Promise<Response> {
  ...
  switch (event.url.pathname) {
    case '/part4/hooks/handle/ping':
      return new Response('pong');
    case '/part4/hooks/handle':
      return await resolve(event, {
        transformPageChunk: ({ html }: { html: string }) => html.replace(
          '<body', 
          '<body style="color: hotpink"'
        )
      });
    ...
  }
  ...
}
```

[Next: The RequestEvent object](/part4/hooks/RequestEvent)
