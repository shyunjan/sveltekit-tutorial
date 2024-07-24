<script>
  import FilterableList from './FilterableList.svelte';
  import { colors } from './colors.js';

  import Tutorial from './Tutorial.md';
</script>

<FilterableList data={colors} field="name" let:item={row}>
  <!-- let:item={row} 부분은 row 변수의 선언문이지 item의 선언문이 아님에 주의. item은 component(FilterableList) 내부에서 이미 선언하고 slot에서 노출하고 있는 변수다 -->

  <header slot="header" class="row">
    <span class="color" />
    <span class="name">name</span>
    <span class="hex">hex</span>
    <span class="rgb">rgb</span>
    <span class="hsl">hsl</span>
  </header>

  <div class="row">
    <span class="color" style="background-color: {row.hex}" />
    <span class="name">{row.name}</span>
    <span class="hex">{row.hex}</span>
    <span class="rgb">{row.rgb}</span>
    <span class="hsl">{row.hsl}</span>
  </div>
</FilterableList>

<div class="tutorial">
  <Tutorial />
</div>

<style>
  .row {
    display: grid;
    align-items: center;
    grid-template-columns: 2em 4fr 3fr;
    gap: 1em;
    padding: 0.1em;
    background: hsl(var(--fg-1));
    border-radius: 0.2em;
  }

  header {
    font-weight: bold;
  }

  .row:not(header):hover {
    background: hsl(var(--fg-2));
  }

  .color {
    aspect-ratio: 1;
    height: 100%;
    border-radius: 0.1em;
  }

  .rgb,
  .hsl {
    display: none;
  }

  @media (min-width: 40rem) {
    .row {
      grid-template-columns: 2em 4fr 3fr 3fr;
    }

    .rgb {
      display: block;
    }
  }

  @media (min-width: 60rem) {
    .row {
      grid-template-columns: 2em 4fr 3fr 3fr 3fr;
    }

    .hsl {
      display: block;
    }
  }
</style>
