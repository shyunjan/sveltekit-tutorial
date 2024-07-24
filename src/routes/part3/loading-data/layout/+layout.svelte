<script>
  import Tutorial from './Tutorial.md';
</script>

<nav class="relative mb-6 flex gap-6 rounded bg-stone-100 p-6">
  <a href="/part3/loading-data/layout">home</a>
  <a href="/part3/loading-data/layout/blog">blog</a>
</nav>

<slot />

<div class="tutorial absolute top-[20%]">
  <Tutorial />
</div>
