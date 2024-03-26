<nav>
  <a href="/part4/advanced-routing/breaking-out-of-layouts">Breaking out of layouts &gt; home</a>
  <a href="/part4/advanced-routing/breaking-out-of-layouts/a">a</a>
  <a href="/part4/advanced-routing/breaking-out-of-layouts/a/b">a/b</a>
  <a href="/part4/advanced-routing/breaking-out-of-layouts/a/b/c">a/b/c</a>
</nav>

<div class="layout" data-name="root">
  <slot />
</div>

<style>
  :global(.layout) {
    position: relative;
    border: 1px solid #999;
    padding: 1em;
    margin: 1em 0 0 0;
    border-radius: 4px;
  }

  :global(.layout::before) {
    position: absolute;
    content: attr(data-name) ' layout';
    left: 1em;
    top: -1em;
    background-color: white;
    color: #222;
    padding: 0.5em;
    line-height: 1;
  }

  @media (prefers-color-scheme: dark) {
    :global(.layout::before) {
      background: #2e2e2e;
      color: #e6e6e6;
    }
  }
</style>

<div class="mt-16 mb-8 relative">
  <p>Ordinarily, a page inherits every layout above it, meaning that
    <code>./a/b/c/+page.svelte</code> inherits four layouts:
  </p>
  <ul>
    <li><code>./+layout.svelte</code></li>
    <li><code>./a/+layout.svelte</code></li>
    <li><code>./a/b/+layout.svelte</code></li>
    <li><code>./a/b/c/+layout.svelte</code></li>
  </ul>
  <p>Occasionally, it's useful to break out of the current layout hierarchy. We can do that by
    adding the <code>@</code> sign followed by the name of the parent segment to 'reset' to —
    for example <code>+page@b.svelte</code> would put <code>/a/b/c</code> inside
    <code>./a/b/+layout.svelte</code>, while <code>+page@a.svelte</code> would put it inside
    <code>./a/+layout.svelte</code>.
  </p>
  <blockquote>
    <p>The root layout applies to every page of your app, you cannot break out of it.</p>
  </blockquote>
</div>