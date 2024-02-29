<h1>Errors and redirects &gt; Fallback errors</h1>
<p><code>src\routes\+layout.server.ts</code> 소스에서 <code>throw new Error ...</code> 부분의 주석을
  해제하면 fallback error 페이지 - <code>src\app.html</code>가 로딩된다.</p>