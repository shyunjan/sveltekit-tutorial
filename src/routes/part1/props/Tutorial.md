------
# **Declaring props**
In any real application, you'll need to pass data from one component down to its children. To do that, we need to declare _properties_, generally shortened to 'props'. In Svelte, we do that with the `export` keyword:  
```svelte title="./declaring-props/Nested.svelte" /export/
<script>
  export let answer;
</script>
```
> Just like `$:`, this may feel a little weird at first. That's not how `export` normally works in JavaScript modules! Just roll with it for now — it'll soon become second nature.

------
# **Default values**
We can easily specify default values for props in <code data-file="./declaring-props/Nested.svelte">Nested.svelte</code>:
```svelte title="./declaring-props/Nested.svelte" /= 'a mystery'/
<script>
  export let answer = 'a mystery';
</script>
```
If we now add a second component _without_ an `answer` prop, it will fall back to the default:
```svelte title="src/routes/part1/props/+page.svelte" "<Nested />"
<Nested answer={42} />
<Nested />
```
...
------
# **Spread props**
the properties of `pkg` correspond to the <code data-file="./spread-props/PackgeInfo.svelte">PackageInfo.svelte</code> component's expected props, we can 'spread' them onto the component instead:
```svelte title="src/routes/part1/props/+page.svelte" "{...pkg}"
<PackgeInfo {...pkg} />
```
> Conversely, if you need to reference all the props that were passed into a component, including ones that weren't declared with `export`, you can do so by accessing `$$props` directly. It's not generally recommended, as it's difficult for Svelte to optimise, but it's useful in rare cases.

[Next: Logic](/part1/logic/if)