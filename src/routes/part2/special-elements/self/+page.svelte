<script>
  import Folder from './Folder.svelte';
  import { files } from './data.js';
</script>

<Folder name="Home" {files} expanded /> <!-- expanded 부분은 expanded={true} 와 같다. -->
