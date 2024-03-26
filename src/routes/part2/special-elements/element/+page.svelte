<script>
  const options = ['h1', 'h2', 'h3', 'p', 'marquee'];
  let selected = options[0];
</script>

<select bind:value={selected}>
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>

<svelte:element this={selected}>
  I'm a <code>&lt;{selected}&gt;</code> element
</svelte:element>

<div class="tutorial">
  The <code>this</code> value can be any string, or a falsy value — if it's falsy, no element is rendered.
</div>
