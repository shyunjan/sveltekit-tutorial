<script lang="ts">
  import { tick } from 'svelte';
  let text = `Select some text and hit the tab key to toggle uppercase`;

  async function handleKeydown(event: KeyboardEvent) {
    if (event.key !== 'Tab') return;

    event.preventDefault();

    const { selectionStart, selectionEnd, value } = this;
    const selection = value.slice(selectionStart, selectionEnd);

    const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

    text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);
    /* text 변수를 변경했으므로 reactivity가 발동해서 DOM(<textarea />)이 변경되어야 하지만, 
     * 원칙적으로는 이 함수(handleKeydown())가 끝날 때까지는 업데이트되지 않는다. */

    await tick(); // tick 함수는 DOM 업데이트가 끝날 때까지 기다린 다음 아래 라인들을 실행시킨다.
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }
</script>

<textarea value={text} on:keydown={handleKeydown} />

<style>
  textarea { width: 100%; height: 100%; resize: none; }
</style>
