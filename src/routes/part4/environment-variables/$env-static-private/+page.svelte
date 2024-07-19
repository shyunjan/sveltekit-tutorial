<script lang="ts">
  export let form;
  import Tutorial from './Tutorial.md';
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
  <Tutorial />
</div>

<style>
  .error {
    color: red;
  }
</style>
