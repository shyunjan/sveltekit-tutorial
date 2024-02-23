<script>
  import { page, navigating } from '$app/stores';
</script>

<nav>
  <a href="/part3/stores/page" aria-current={$page.url.pathname === '/part3/stores/page'}>page</a>
  <a href="/part3/stores/navigating" aria-current={$page.url.pathname === '/part3/stores/navigating'}>navigating</a>
  <a href="/part3/stores/updated" aria-current={$page.url.pathname === '/part3/stores/updated'}>updated</a>
</nav>
{#if $navigating}
navigating to {$navigating?.to?.url.pathname} ...
{/if}
<br/>
<br/>
<slot />