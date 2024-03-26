<script>
  import '../app.pcss';
  // console.debug(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
</script>

<nav class="flex relative mb-6 p-6 gap-6 bg-indigo-90 rounded">
  <a href="/">home</a>
  <a href="/part3/routing/about">about</a>
  <a href="/part3/routing/parameters">blog</a>
</nav>
<br />

<slot />
