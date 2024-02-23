<script>
  import RedThing from './RedThing.svelte';
  import GreenThing from './GreenThing.svelte';
  import BlueThing from './BlueThing.svelte';

  const options = [
    { color: 'red', component: RedThing },
    { color: 'green', component: GreenThing },
    { color: 'blue', component: BlueThing }
  ];

  let selected = options[0];
</script>

<select bind:value={selected}>
  {#each options as option}
    <option value={option}>{option.color}</option>
  {/each}
</select>

<svelte:component this={selected.component} />

<div class="tutorial">
  The <code>this</code> value can be any component constructor, or a falsy value — if it's falsy, no component is rendered.
</div>
