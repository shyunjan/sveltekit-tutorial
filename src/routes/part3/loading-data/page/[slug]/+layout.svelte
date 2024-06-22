<script>
  export let data;
</script>

<div class="layout">
  <main>
    <slot />
  </main>

  <aside>
    <ul>
    {#each data.summaries as { slug, title}}
      <li><a href="/part3/routing/parameters/{slug}">{title}</a></li>
    {/each}
    </ul>
  </aside>
</div>

<style>
  @media (min-width: 640px) {
    .layout {
      display: grid;
      gap: 2em;
      grid-template-columns: 1fr 16em;
    }
  }
</style>
