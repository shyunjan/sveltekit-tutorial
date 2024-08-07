------
# **Setting headers**
Inside a `load` function (as well as in [form actions](/part3/forms/form-element), [hooks](/part4/hooks/handle) and [API routes](/part3/api-routes/get-handlers), which we'll learn about later) you have access to a `setHeaders` function, which — unsurprisingly — can be used to set headers on the response.

Most commonly, you'd use it to customise caching behaviour with the [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) response header, but for the sake of this tutorial we'll do something less advisable and more dramatic:
```js title="src/routes/part3/headers&cookies/setting-headers/+page.server.js" /{ setHeaders }/ /  setHeaders({/ /  });/ {3}
export function load({ setHeaders }) {
  setHeaders({
    'Content-Type': 'text/plain'
  });
}
```
(You may need to reload the page( or iframe) to see the effect.)

[Next: Reading and writing cookies](http://localhost:5173/part3/headers&cookies/cookies)
