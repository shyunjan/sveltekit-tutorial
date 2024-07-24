<script>
  import Tutorial from './Tutorial.md';
</script>

<nav class="relative mb-6 flex gap-6 rounded bg-stone-100 p-6">
  <a href="/part3/errors&redirects/basics">basics</a>
  <a href="/part3/errors&redirects/basics/expected">page with expected error</a>
  <a href="/part3/errors&redirects/basics/unexpected">page with unexpected error</a>
</nav>

<slot />

<div class="tutorial absolute top-[30%]">
  <Tutorial />
</div>
