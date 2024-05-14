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

```svelte title="src\routes\part1\introduction\+page.svelte"
<h1>Hello {name.toUpperCase()}!</h1>
```
...
___
  
# **Dynamic attributes** 

Just like you can use curly braces to control text, you can use them to control element attributes:

```svelte title="src\routes\part1\introduction\+page.svelte"
<img src={src}>
```

> A11y: &amp;lt;img&amp;gt; element should have an alt attribute

...  
In this case, we're missing the alt attribute that describes the image for people using screenreaders, or people with slow or flaky internet connections that can't download the image. Let's add one:

```svelte title="src\routes\part1\introduction\+page.svelte"
<img src={src} alt="A man dances">
```

## Shorthand attributes

It's not uncommon to have an attribute where the name and value are the same, like src=&amp;#123;src&amp;#125;. Svelte gives us a convenient shorthand for these cases:

```svelte title="src\routes\part1\introduction\+page.svelte"
<img {src} alt="{name} dances." />
```
