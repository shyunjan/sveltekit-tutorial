<script lang="ts">
  import { getContext } from 'svelte';

  export let x: number;
  export let y: number;
  export let size: number;
  export let rotate: number;

  (getContext('canvas') as { addItem: (fn: Function) => void }).addItem(draw);

  function draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(rotate);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(-size / 2, -size / 2, size, size);

    ctx.restore();
  }
</script>
