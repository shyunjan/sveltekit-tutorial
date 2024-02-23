<script lang="ts">
  type colorInfo = { hex: string; name: string; rgb: string; hsl: string; };
  export let data: colorInfo[];
  export let field: keyof colorInfo;

  let search = '';

  $: regex = search ? new RegExp(search, 'i') : null;
  $: matches = (item: colorInfo) => (regex ? regex.test(item[field]) : true);
</script>

<div class="list">
  <label>
    Filter: <input bind:value={search} />
  </label>

{#if $$slots.header} <!-- 상위 component에서 slot="header"를 지정해주지 않는 경우에 이 부분(<div class="header">)은 제거된다. -->
  <div class="header">
    <slot name="header" />
  </div>
{/if}

  <div class="content">
    {#each data.filter(matches) as item}
      <slot {item} /> 
    {/each}
    <!-- it's the shorthand of <slot item={item} /> -->
  </div>
</div>

<style>
  .list {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header {
    border-top: 1px solid var(--bg-2);
    padding: 0.2em 0;
  }

  .content {
    flex: 1;
    overflow: auto;
    padding-top: 0.5em;
    border-top: 1px solid var(--bg-2);
  }
</style>
