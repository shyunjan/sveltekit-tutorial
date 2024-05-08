<script lang="ts">
  export let form;

  import PageServer from './components/PageServer.md';
</script>

<form method="POST">
  <label>
    enter the passphrase
    <input name="passphrase" autocomplete="off" />
  </label>
</form>

{#if form?.incorrect}
  <p class="error">wrong passphrase!</p>
{/if}

<div class="tutorial">
  <PageServer />
</div>

<style>
  .error {
    color: red;
  }
</style>
