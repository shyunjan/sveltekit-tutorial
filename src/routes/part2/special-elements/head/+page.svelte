<script>
  const themes = ['margaritaville', 'retrowave', 'spaaaaace', 'halloween'];
  let selected = themes[0];

  import Tutorial from './Tutorial.md';
</script>

<svelte:head>
  <link rel="stylesheet" href="/stylesheets/{selected}.css" />
</svelte:head>

<h1>Welcome to my site!</h1>

<select bind:value={selected}>
  <option disabled>choose a theme</option>

  {#each themes as theme}
    <option>{theme}</option>
  {/each}
</select>

<div class="tutorial opacity-80">
  <Tutorial />
</div>
