<script>
  const colors = ['ff3e00', '676779', '42b4ff', 'octarine', 'invalid'];
  import Tutorial from './Tutorial.md';
</script>

<nav class="relative z-[2] mb-6 flex gap-6 rounded bg-stone-100 p-6">
  {#each colors as color}
    <a href="/part4/advanced-routing/param-matchers/colors/{color}" style="--color: #{color}"
      >#{color}</a
    >
  {/each}
</nav>

<slot />

<div class="tutorial absolute top-[75%]">
  <Tutorial />
</div>

<style>
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a::before {
    content: '';
    width: 2em;
    height: 2em;
    background: var(--color);
  }
</style>
