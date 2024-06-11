------
# **Welcome to Svelte** 

Welcome to the Svelte tutorial! This will teach you everything you need to know to easily build web applications of all sizes, with high performance and a small footprint.

You can also consult the [API docs](https://svelte.dev/docs) and the [examples](https://svelte.dev/examples), or — if you're impatient to start hacking on your machine locally — create a project with `npm init svelte`.

## What is Svelte? 

Svelte is a tool for building web applications. Like other user interface frameworks, it allows you to build your app _declaratively_ out of components that combine markup, styles and behaviours.

These components are _compiled_ into small, efficient JavaScript modules that eliminate overhead traditionally associated with UI frameworks.

You can build your entire app with Svelte (for example, using an application framework like [SvelteKit](https://kit.svelte.dev/), which this tutorial will cover), or you can add it incrementally to an existing codebase. You can also ship components as standalone packages that work anywhere.  
___

# **Your first component** 

In Svelte, an application is composed from one or more _components_. A component is a reusable self-contained block of code that encapsulates HTML, CSS and JavaScript that belong together, written into a `.svelte` file.

## Adding data

Inside the curly braces, we can put any JavaScript we want. Try changing `name` to `name.toUpperCase()` for a shoutier greeting.

```svelte title="src/routes/part1/introduction/+page.svelte" "{name.toUpperCase()}"
<h1>Hello {name.toUpperCase()}!</h1>
```
.
___
  
# **Dynamic attributes** 

Just like you can use curly braces to control text, you can use them to control element attributes:

```svelte title="src/routes/part1/introduction/+page.svelte" "src={src}"
<img src={src}>
```

> A11y: &amp;lt;img&amp;gt; element should have an alt attribute

...  
In this case, we're missing the alt attribute that describes the image for people using screenreaders, or people with slow or flaky internet connections that can't download the image. Let's add one:

```svelte title="src/routes/part1/introduction/+page.svelte" /alt="A man dances"/
<img src={src} alt="A man dances">
```

## Shorthand attributes

It's not uncommon to have an attribute where the name and value are the same, like src=&amp;#123;src&amp;#125;. Svelte gives us a convenient shorthand for these cases:

```svelte title="src/routes/part1/introduction/+page.svelte" "{src}"
<img {src} alt="{name} dances." />
```
.
___

# **Styling**

Just like in HTML, you can add a &amp;lt;style&amp;gt; tag to your component:
```svelte title="src/routes/part1/introduction/+page.svelte" {2-6}
<style>
  p {
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>
```
Importantly, these rules are _scoped to the component_. You won't accidentally change the style of &amp;lt;p&amp;gt; elements elsewhere in your app, as we'll see in the next step.
___

# **Nested components**

Add a `&lt;script&gt;` tag to the top of <code data-file="./+page.svelte">App.svelte</code> that imports <code data-file="./components/Nested.svelte">Nested.svelte</code>...
and include a `&lt;Nested /&gt;` component:
```svelte title="src/routes/part1/introduction/+page.svelte" {1-3} "<Nested />"
<script>
  import Nested from './components/Nested.svelte';
</script>
...
<Nested />
```
Notice that even though <code data-file="./components/Nested.svelte">Nested.svelte</code> has a `&lt;p&gt;` element, the styles from <code data-file="./+page.svelte">App.svelte</code> don't leak in.
> Component names are always capitalised, to distinguish them from HTML elements.  

___
# **HTML tags**
sometimes you need to render HTML directly into a component. For example, the words you're reading right now exist in a markdown file that gets included on this page as a blob of HTML.  
In Svelte, you do this with the special `{@html ...}` tag:
```svelte title="src/routes/part1/introduction/+page.svelte" "@html"
<p>{@html string}</p>
```
> **Warning!** Svelte doesn't perform any sanitization of the expression inside `{@html ...}` before it gets inserted into the DOM. This isn't an issue if the content is something you trust like an article you wrote yourself. However if it's some untrusted user content, e.g. a comment on an article, then it's critical that you manually escape it, otherwise you risk exposing your users to [Cross-Site Scripting](https://owasp.org/www-community/attacks/xss/) (XSS) attacks.

[Next: Reactivity](/part1/reactivity)