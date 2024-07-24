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

  import Tutorial from './Tutorial.md';
</script>

<nav class="relative mb-6 flex gap-6 rounded bg-stone-100 p-6">
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

<div class="tutorial">
  <Tutorial />
</div>
