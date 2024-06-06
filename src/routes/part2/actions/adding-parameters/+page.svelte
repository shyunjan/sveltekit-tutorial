<script lang="ts">
  import tippy, { type Props } from 'tippy.js';
  import 'tippy.js/dist/tippy.css';
  import 'tippy.js/themes/material.css';

  let content = 'Hello!';

  function tooltip(node: HTMLElement, options: Partial<Props>) {
    const tooltip = tippy(node, options);

    return {
      update(options: Partial<Props>) {
        tooltip.setProps(options);
      },
      destroy() {
        tooltip.destroy();
      }
    };
  }

  import Tutorial from './Tutorial.md';
</script>

<input bind:value={content} />

<button use:tooltip={{ content, theme: 'material' }}> Hover me </button>

<div class="tutorial">
  <Tutorial />
</div>
