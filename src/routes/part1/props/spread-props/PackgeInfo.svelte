<!-- Note: Component names are always capitalised, to distinguish them from HTML elements. -->
<script lang="ts">
  export let name = 'unknown';
  export let version = 0;
  export let speed = '';
  export let website = '#';

  $: href = `https://www.npmjs.com/package/${name.toLowerCase()}`;
</script>

<p>
  The <code>{name}</code> package is {speed} fast.<br />
  Download version {version} from <a {href}>npm</a> and <a href={website}>learn more here</a><br />
  Description: {$$props.description}
  <!-- 위의 코드에서 description이 export로 선언되지 않았기 때문에 $$props를 통해서 접근하고 있다. -->
</p>
