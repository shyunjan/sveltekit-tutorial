<script>
  import BigRedButton from './BigRedButton.svelte';
  import horn from './horn.mp3';

  const audio = new Audio();
  audio.src = horn;

  function handleClick() {
    audio.load();
    audio.play();
  }

  import Tutorial from './Tutorial.md';
</script>

<BigRedButton on:click={handleClick} />

<div class="tutorial">
  <Tutorial />
</div>
