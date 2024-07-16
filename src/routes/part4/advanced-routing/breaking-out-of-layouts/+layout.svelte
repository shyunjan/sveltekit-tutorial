<script>
  import Tutorial from './Tutorial.md';
</script>

<nav class="relative mb-6 flex gap-6 rounded bg-stone-100 p-6">
  <a href="/part4/advanced-routing/breaking-out-of-layouts">Breaking out of layouts &gt; home</a>
  <a href="/part4/advanced-routing/breaking-out-of-layouts/a">a</a>
  <a href="/part4/advanced-routing/breaking-out-of-layouts/a/b">a/b</a>
  <a href="/part4/advanced-routing/breaking-out-of-layouts/a/b/c">a/b/c</a>
</nav>

<div class="layout" data-name="root">
  <slot />
</div>

<div class="tutorial absolute top-[20%]">
  <Tutorial />
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
