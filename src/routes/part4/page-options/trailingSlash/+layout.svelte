<script>
  import Tutorial from './Tutorial.md';
</script>

<nav class="relative mb-6 flex gap-6 rounded bg-stone-100 p-6">
  <a href="/part4/page-options/trailingSlash/always">./always</a>
  <!-- trailingSlash = 'always'인 경우는 바로 아래 url(./always/)로 redirection된다. -->
  <a href="/part4/page-options/trailingSlash/always/">./always/</a>
  <a href="/part4/page-options/trailingSlash/ignore">./ignore</a>
  <!-- trailingSlash = 'ignore'인 경우는 서로 별개의 url로 인식되어 redirection되지 않는다. -->
  <a href="/part4/page-options/trailingSlash/ignore/">./ignore/</a>
  <a href="/part4/page-options/trailingSlash/never">./never</a>
  <!-- trailingSlash = 디폴트('never')인 경우는 바로 위의 url(./never)로 redirection된다. -->
  <a href="/part4/page-options/trailingSlash/never/">./never/</a>
</nav>

<slot />

<div class="tutorial">
  <Tutorial />
</div>
