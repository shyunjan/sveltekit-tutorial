<script lang="ts">
	import Thing from './Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>

<button on:click={handleClick}>
	Remove first thing
</button>

{#each things as thing (thing.id)}
<!-- {#each things as thing (thing)} 원칙은 위 라인처럼 number나 string키를 사용하는 것이지만 이 라인처럼 
	그냥 object를 사용해도 된다. 오히려 이 방법이 실제로 API Data를 fetch했을 때 유리하다. 아래 NOTE 참조 -->
	<Thing name={thing.name} />
{/each}
<!--
	NOTE
	You can use any object as the key, as Svelte uses a Map internally — in other words 
	you could do (thing) instead of (thing.id). Using a string or number is generally safer, 
	however, since it means identity persists without referential equality, for example when 
	updating with fresh data from an API server.
-->