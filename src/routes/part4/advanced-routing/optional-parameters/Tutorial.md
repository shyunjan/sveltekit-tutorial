------
# **Optional parameters**
In the first chapter on [routing](/part3/routing/pages), we learned how to create routes with [dynamic parameters](/part3/routing/parameters).

Sometimes it's helpful to make a parameter optional. A classic example is when you use the pathname to determine the locale — `/fr/...`, `/de/...` and so on — but you also want to have a default locale.

To do that, we use double brackets. Rename the `[lang]` directory to `[[lang]]`.

The app now fails to build, because <code data-file="src/routes/part4/advanced-routing/optional-parameters/+page.svelte">src/routes/part4/advanced-routing/optional-parameters/+page.svelte</code> and <code data-file="./[[lang]]/+page.svelte">src/routes/part4/advanced-routing/optional-parameters/[[lang]]/+page.svelte</code> would both match `/`. <code data-file="./+page.svelte">src/routes/part4/advanced-routing/optional-parameters/+page.svelte</code>. (You may need to reload the app to recover from the error page).

Lastly, edit <code data-file="./[[lang]]/+page.server.ts">src/routes/part4/advanced-routing/optional-parameters/[[lang]]/+page.server.ts</code> to specify the default locale:
```js title="src/routes/part4/advanced-routing/optional-parameters/[[lang]]/+page.server.ts" /?? 'en'/
const greetings = {
  en: 'hello!',
  de: 'hallo!',
  fr: 'bonjour!'
};

export function load({ params }) {
  return {
    greeting: greetings[params.lang ?? 'en']
  };
}
```

[Next: Rest parameters](/part4/advanced-routing/rest-parameters)
