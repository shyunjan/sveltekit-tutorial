------
# **GET handlers**
SvelteKit allows you to create more than just pages. We can also create _API routes_ by adding a `+server.js` file that exports functions corresponding to HTTP methods: `GET`, `PUT`, `POST`, `PATCH` and `DELETE`.

This app fetches data from a `/roll` API route when you click the button. Create that route by adding a <code data-file="src/routes/part3/api-routes/get-handlers/roll/+server.ts">src/routes/part3/api-routes/get-handlers/roll/+server.ts</code> file:
```js title="src/routes/part3/api-routes/get-handlers/roll/+server.ts"
export function GET() {
  const number = Math.floor(Math.random() * 6) + 1;

  return new Response(number, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
```
Clicking the button now works.

Request handlers must return a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response) object. Since it's common to return JSON from an API route, SvelteKit provides a convenience function for generating these responses:
```js title="src/routes/part3/api-routes/get-handlers/roll/+server.ts" {6-10}#del "import { json } from '@sveltejs/kit';" /  return json(number);/
import { json } from '@sveltejs/kit';

export function GET() {
  const number = Math.floor(Math.random() * 6) + 1;

  return new Response(number, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return json(number);
}
```

[Next: POST handlers](/part3/api-routes/post-handlers)
