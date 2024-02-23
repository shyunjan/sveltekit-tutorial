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
</script>

<!-- <Nested /> the answer prop will be set 0 as default value -->
<Nested answer={42} />
<br/>
<PackgeInfo {...pkg}/>
