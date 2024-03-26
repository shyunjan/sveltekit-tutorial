<script>
  export let data;
</script>

<h1>blog</h1>

<ul>
  {#each data.summaries as { slug, title }}
    <li><a href="/part3/routing/parameters/{slug}">{title}</a></li>
  {/each}
</ul>

<div class="tutorial">
  <p class="note">
    <span>NOTE</span>
    Multiple route parameters can appear within one URL segment, as long as they are separated by at
    least one static character: <code>foo/[bar]x[baz]</code> is a valid route where
    <code>[bar]</code>
    and <code>[baz]</code> are dynamic parameters.
  </p>
  <p class="note">
    <span>NOTE</span>
    For the sake of the tutorial, we're importing data from
    <code>src\routes\part3\routing\parameters\data.js</code>. In a real app, you'd be more likely to
    load the data from a database or a CMS, but for now we'll do it like this.
  </p>
  <p>
    The layout (and any page below it) inherits <code>data.summaries</code> from the parent
    <code>+layout.server.js</code>.
  </p>
  <p>
    When we navigate from one post to another, we only need to load the data for the post itself —
    the layout data is still valid. See the documentation on <a
      href="https://kit.svelte.dev/docs/load#rerunning-load-functions">invalidation</a
    > to learn more.
  </p>
</div>
