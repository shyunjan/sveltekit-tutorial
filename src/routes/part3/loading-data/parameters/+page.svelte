<script>
  export let data;
  import Tutorial from './Tutorial.md';
</script>

<h1>blog</h1>

<ul>
  {#each data.summaries as { slug, title }}
    <li><a href="/part3/routing/parameters/{slug}">{title}</a></li>
  {/each}
</ul>

<div class="tutorial">
  <Tutorial />
</div>
