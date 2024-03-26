<script>
  import { page } from '$app/stores';

  let words = ['how', 'deep', 'does', 'the', 'rabbit', 'hole', 'go'];

  console.debug(`$page.params.path.split('/') = ${$page.params.path.split('/')}`);

  // $: depth = $page.params.path.split('/').length; 
  /* path가 없는 경우에는 $page.params.path.split('/') = [""]이 되어서 length가 1이 된다. 그래서 .filter(Boolean)가 필요하다 */
  $: depth = $page.params.path.split('/').filter(Boolean).length;
  $: next = depth === words.length ? '/' : `/${words.slice(0, depth + 1).join('/')}`;
</script>

<div class="flex">
  {#each words.slice(0, depth) as word}
    <p>{word}</p>
  {/each}

  <p><a href={`/part4/advanced-routing/rest-parameters/${next}`}>{words[depth] ?? '?'}</a></p>
</div>

<div class="mt-16 mb-8 relative">
  <p>To match an unknown number of path segments, use a <code>[...rest]</code> parameter, so named
    for its resemblance to
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters"
      target="_blank">rest parameters in JavaScript</a>.
  </p>
  <p>Rename <code>src/routes/[path]</code> to <code>src/routes/[...path]</code>. The route now
    matches any path.
  </p>
  <blockquote>
    <p>Other, more specific routes will be tested first, making rest parameters useful as 'catch-all'
      routes. For example, if you needed a custom 404 page for pages inside
      <code>/categories/...</code>, you could add these files:
    </p>
    <div class="code-block"><pre class="language-diff"><code>src/routes/
├ categories/
│ ├ animal/
│ ├ mineral/
│ ├ vegetable/
<span class="inserted">│ ├ [...catchall]/
</span><span class="inserted">│ │ ├ +error.svelte
</span><span class="inserted">│ │ └ +page.server.js</span></code></pre>
    </div>
    <p>Inside the <code>+page.server.js</code> file, <code>throw error(404)</code> inside
      <code>load</code>.
    </p>
  </blockquote>
  <p>Rest parameters do <em>not</em> need to go at the end — a route like
    <code>/items/[...path]/edit</code> or <code>/items/[...path].json</code> is totally valid.
  </p>
</div>

<style>
  .flex {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .flex p {
    margin: 0.5rem 0;
    line-height: 1;
  }

  .flex a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }
</style>
