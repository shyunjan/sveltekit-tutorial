<script>
  import Folder from './Folder.svelte';
  import { files } from './data.js';

  import Tutorial from './Tutorial.md';
</script>

<Folder name="Home" {files} expanded />
<!-- expanded 부분은 expanded={true} 와 같다. -->

<div class="tutorial absolute top-[50%]">
  <Tutorial />
</div>
