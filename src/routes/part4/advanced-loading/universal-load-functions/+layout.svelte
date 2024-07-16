<script>
  import { page } from '$app/stores';
  import Tutorial from './Tutorial.md';
</script>

<nav
  class:has-color={!!$page.data.color}
  style:background={$page.data.color ?? 'hsl(var(--fg-1))'}
  class="relative mb-6 flex gap-6 rounded p-6"
>
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

<div class="tutorial absolute top-[10%]">
  <Tutorial />
</div>

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
