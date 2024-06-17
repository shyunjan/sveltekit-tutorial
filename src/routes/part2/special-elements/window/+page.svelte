<script lang="ts">
  let key: string;
  let keyCode: number;

  function handleKeydown(event: KeyboardEvent) {
    key = event.key;
    keyCode = event.keyCode ?? event.code;
  }

  import Tutorial from './Tutorial.md';
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="Contents">
  {#if key}
    <kbd>{key === ' ' ? 'Space' : key}</kbd>
    <p>{keyCode}</p>
  {:else}
    <p>Focus this window and press any key</p>
  {/if}
</div>

<div class="tutorial absolute top-[50%]">
  <Tutorial />
</div>

<style>
  .Contents {
    display: flex;
    height: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
  }

  kbd {
    border-radius: 4px;
    font-size: 6em;
    padding: 0.2em 0.5em;
    background-color: #eeeeee;
    border-top: 5px solid #f9f9f9;
    border-left: 5px solid #f9f9f9;
    border-right: 5px solid #aaaaaa;
    border-bottom: 5px solid #aaaaaa;
    color: #555;
  }
</style>
