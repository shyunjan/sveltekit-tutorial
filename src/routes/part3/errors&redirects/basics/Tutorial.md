------
# **Basics**
There are two types of errors in SvelteKit — _expected_ errors and _unexpected_ errors.

------
# **Updated**
The `updated` store contains `true` or `false` depending on whether a new version of the app has been deployed since the page was first opened. For this to work, your <code data-file="svelte.config.js">svelte.config.js</code> must specify `kit.version.pollInterval`.
```svelte title="src/routes/part3/stores/+layout.svelte" {15} /, updated/
<script>
  import { page, navigating, updated } from '$app/stores';
</script>
```
Version changes only happen in production, not during development. For that reason, `$updated` will always be `false` in this tutorial.

You can manually check for new versions, regardless of `pollInterval`, by calling `updated.check()`.
```svelte title="src/routes/part3/stores/+layout.svelte" "{#if $updated}" "{/if}"

{#if $updated}
  <div class="toast">
    <p>
      A new version of the app is available
      
      <button on:click={() => location.reload()}>reload the page</button>
    </p>
  </div>
{/if}
```

[Next: Errors and redirects](/part3/errors&redirects/basics)
