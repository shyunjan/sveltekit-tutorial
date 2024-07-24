<script>
  export let data;
</script>

<h1>Blog</h1>

<ul>
  {#each data.summaries as { slug, title }}
    <li><a href="/part3/loading-data/page/blog/{slug}">{title}</a></li>
  {/each}
</ul>
