<script>
  import { navigating } from '$app/stores';

  /**
   * @type {import("@sveltejs/kit").Navigation}
   */
  let previous;
  /**
   * @type {number}
   */
  let start;
  /**
   * @type {number | null}
   */
  let end;

  $: if ($navigating) {
    start = Date.now();
    end = null;
    previous = $navigating;
  } else {
    end = Date.now();
  }
</script>

<nav>
  <a href="/part4/link-options/preloading">Preloading home</a>
  <a href="/part4/link-options/preloading/slow-a" data-sveltekit-preload-data>slow-a</a>
  <a href="/part4/link-options/preloading/slow-b">slow-b</a>
</nav>

<slot />

{#if previous && end}
  <p>
    navigated from {previous?.from?.url.pathname} to {previous?.to?.url.pathname} in
    <strong>{end - start}ms</strong>
  </p>
{/if}
