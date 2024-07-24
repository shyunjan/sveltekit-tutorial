------
# **&amp;lt;svelte:window&amp;gt; bindings**
We can also bind to certain properties of `window`, such as `scrollY`:
```svelte title="src/routes/part2/special-elements/window-bindings/+page.svelte" /bind:scrollY={y}/
<svelte:window bind:scrollY={y} />
```
The list of properties you can bind to is as follows:
- `innerWidth`
- `innerHeight`
- `outerWidth`
- `outerHeight`
- `scrollX`
- `scrollY`
- `online` - an alias for `window.navigator.onLine`
All except `scrollX` and `scrollY` are readonly.

[Next: &amp;lt;svelte:body&amp;gt;](/part2/special-elements/body)
