<script>
  import { onMount } from 'svelte';

  let seconds = 0;

  onMount(() => {
    const interval = setInterval(() => {
      seconds += 1;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<nav data-sveltekit-reload>
  <a href="/part4/link-options/reloading">Reloading the page &gt; home</a>
  <a href="/part4/link-options/reloading/test_for_reloading">reloading test</a>
</nav>

<slot />

<p>the page has been open for {seconds} seconds</p>

<div class="tutorial">
  <p>Ordinarily, SvelteKit will navigate between pages without refreshing the page.
    In this exercise, if we navigate between <code>./</code> and <code>./test_for_reloading</code>,
    the timer keeps on ticking.
  </p>
  <p>In rare cases, you might want to disable this behaviour. You can do so by adding the
    <code>data-sveltekit-reload</code> attribute on an individual link, or any element that
    contains links:
  </p>
  <div class="code-block">
    <p>See .\+layout.svelte</p>
    <pre class="language-javascript"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="highlight add"><span class="token attr-name">data-sveltekit-reload</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token punctuation">&lt;/</span>nav<span class="token punctuation">&gt;</span></span></code></pre>
  </div>
  <p>For more information on available link options and their values, consult the
    <a href="https://kit.svelte.dev/docs/link-options" target="_blank">link options
      documentation
    </a>.
  </p>
</div>
