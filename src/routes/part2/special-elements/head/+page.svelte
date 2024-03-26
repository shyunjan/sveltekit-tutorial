<script>
  const themes = ['margaritaville', 'retrowave', 'spaaaaace', 'halloween'];
  let selected = themes[0];
</script>

<svelte:head>
  <link rel="stylesheet" href="/stylesheets/{selected}.css" />
</svelte:head>
<div class="mt-16 mb-8 relative" style="display: inline; position: fixed; top: 0%; color: coral;">
  <p class="note">
    <span>NOTE</span>
    In server-side rendering (SSR) mode, contents of <code>&lt;svelte:head&gt;</code> are returned separately from the rest of your HTML.
  </p>
</div>

<h1>Welcome to my site!</h1>

<select bind:value={selected}>
  <option disabled>choose a theme</option>

  {#each themes as theme}
    <option>{theme}</option>
  {/each}
</select>
