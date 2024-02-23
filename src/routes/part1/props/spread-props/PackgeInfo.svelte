<!-- Note: Component names are always capitalised, to distinguish them from HTML elements. -->
<script lang="ts">
  export let name = 'unknown';
	export let version = 0;
	export let speed = '';
	export let website = '#';

	$: href = `https://www.npmjs.com/package/${name}`;
</script>

<p>
	The <code>{name}</code> package is {speed} fast.<br/>
	Download version {version} from <a {href}>npm</a> and <a href={website}>learn more here</a><br/>
	Description: {$$props.description}
	<!--
		NOTE
		Conversely, if you need to reference all the props that were passed into a component, 
		including ones that weren't declared with export, you can do so by accessing $$props directly. 
		It's not generally recommended, as it's difficult for Svelte to optimise, but it's useful in 
		rare cases.
		위의 코드에서 description가 export로 선언되지 않았기 때문에 $$props를 통해서 접근하고 있다.
	-->
</p>