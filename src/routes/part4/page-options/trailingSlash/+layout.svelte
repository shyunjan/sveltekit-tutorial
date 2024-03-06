<nav>
  <a href="/part4/page-options/trailingSlash/always">./always</a> <!-- trailingSlash가 always인 경우는 바로 아래 url(./always/)로 redirection된다. -->
  <a href="/part4/page-options/trailingSlash/always/">./always/</a>
  <a href="/part4/page-options/trailingSlash/ignore">./ignore</a> <!-- trailingSlash가 always인 경우는 서로 별개의 url로 인식되어 redirection되지 않는다. -->
  <a href="/part4/page-options/trailingSlash/ignore/">./ignore/</a>
  <a href="/part4/page-options/trailingSlash/never">./never</a>
  <a href="/part4/page-options/trailingSlash/never/">./never/</a> <!-- trailingSlash가 디폴트(never)인 경우는 바로 위의 url(./never)로 redirection된다. -->
</nav>

<slot />
