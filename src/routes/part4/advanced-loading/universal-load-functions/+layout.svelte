<script>
  import { page } from '$app/stores';
</script>

<nav class:has-color={!!$page.data.color} style:background={$page.data.color ?? 'hsl(var(--fg-1))'}>
  <a href="/part4/advanced-loading/universal-load-functions">Universal load functions &gt; home</a>
  <a href="/part4/advanced-loading/universal-load-functions/red">red</a>
  <a href="/part4/advanced-loading/universal-load-functions/green">green</a>
  <a href="/part4/advanced-loading/universal-load-functions/blue">blue</a>

  {#if $page.data.component}
    <div>
      [ <svelte:component this={$page.data.component} />]
    </div>
  {/if}
</nav>

<slot />

<style>
  nav.has-color,
  nav.has-color a {
    color: white;
    white-space: nowrap;
  }

  nav div {
    display: flex;
  }
</style>
