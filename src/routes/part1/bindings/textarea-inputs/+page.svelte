<script>
  import { marked } from 'marked';
  let value = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`;

  import Tutorial from './Tutorial.md';
</script>

<div class="grid">
  input
  <textarea bind:value></textarea>

  output
  <div>{@html marked(value)}</div>
</div>

<div class="tutorial">
  <Tutorial />
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 5em 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em;
    height: 100%;
  }

  textarea {
    flex: 1;
    resize: none;
    line-height: normal;
    height: 16rem;
  }
</style>
