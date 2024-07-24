<script>
  import Nested from './declaring-props/Nested.svelte';
  import PackgeInfo from './spread-props/PackgeInfo.svelte';

  const pkg = {
    name: 'Svelte',
    speed: 'blazing',
    version: 4,
    website: 'https://svelte.dev',
    description: 'Consider using SvelteKit for full stack development'
  };

  import Tutorial from './Tutorial.md';
</script>

<Nested answer={42} />
<Nested />
<!-- the answer prop will be set to a default value -->
<br />
<PackgeInfo {...pkg} />

<div class="tutorial">
  <Tutorial />
</div>
