------
# **The style directive**
As with `class`, you can write your inline `style` attributes literally, because Svelte is really just HTML with fancy bits:
```svelte title="src/routes/part2/classes&styles/style-directive/+page.svelte" /style="transform: {flipped ? 'rotateY(0)' : ''}; --bg-1: palegoldenrod; --bg-2: black; --bg-3: goldenrod"/
<button
    class="card"
    style="transform: {flipped ? 'rotateY(0)' : ''}; --bg-1: palegoldenrod; --bg-2: black; --bg-3: goldenrod"
    on:click={() => flipped = !flipped}
>
```
When you have a lot of styles, it can start to look a bit wacky. We can tidy things up by using the `style:` directive:
```svelte title="src/routes/part2/classes&styles/style-directive/+page.svelte" {3-6}
<button
    class="card"
    style:transform={flipped ? 'rotateY(0)' : ''}
    style:--bg-1="palegoldenrod"
    style:--bg-2="black"
    style:--bg-3="goldenrod"
    on:click={() => flipped = !flipped}
>
```

[Next: Component styles](/part2/classes&styles/component-styles)
