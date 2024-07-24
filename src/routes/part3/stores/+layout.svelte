<script>
  import { page, navigating, updated } from '$app/stores';
</script>

<nav class="relative mb-6 flex gap-6 rounded bg-stone-100 p-6">
  <a href="/part3/stores/page" aria-current={$page.url.pathname === '/part3/stores/page'}>page</a>
  <a
    href="/part3/stores/navigating"
    aria-current={$page.url.pathname === '/part3/stores/navigating'}>navigating</a
  >
  <a href="/part3/stores/updated" aria-current={$page.url.pathname === '/part3/stores/updated'}
    >updated</a
  >
  {#if $navigating}
    navigating to {$navigating?.to?.url.pathname} ...
  {/if}
</nav>
<br />
<slot />

{#if $updated}
  <div class="toast">
    <p>
      A new version of the app is available

      <button on:click={() => location.reload()}>reload the page</button>
    </p>
  </div>
{/if}

<style>
  .toast {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .toast p {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: hsl(var(--bg-2));
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-radius: 4px;
  }
</style>
