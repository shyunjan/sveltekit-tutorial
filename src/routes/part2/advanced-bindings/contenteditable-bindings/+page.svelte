<script>
  let html = '<p>Write some text!</p>';

  import Tutorial from './Tutorial.md';
</script>

<div bind:innerHTML={html} contenteditable></div>

<pre>{html}</pre>

<div class="tutorial">
  <Tutorial />
</div>

<style>
  [contenteditable] {
    padding: 0.5em;
    border: 1px solid #eee;
    border-radius: 4px;
  }
</style>
