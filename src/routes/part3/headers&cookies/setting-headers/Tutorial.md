------
# **Setting headers**
Inside a `load` function (as well as in [form actions](https://learn.svelte.dev/tutorial/the-form-element), [hooks](https://learn.svelte.dev/tutorial/handle) and [API routes](https://learn.svelte.dev/tutorial/get-handlers), which we'll learn about later) you have access to a `setHeaders` function, which — unsurprisingly — can be used to set headers on the response.
```javascript title="src/routes/part3/headers&cookies/setting-headers/+page.server.js" /{ setHeaders }/ /  setHeaders({/ /  });/ {3}
export function load({ setHeaders }) {
  setHeaders({
    'Content-Type': 'text/plain'
  });
}
```
(You may need to reload the page( or iframe) to see the effect.)

[Next: Reading and writing cookies](http://localhost:5173/part3/headers&cookies/cookies)
