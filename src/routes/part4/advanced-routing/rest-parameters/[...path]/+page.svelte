<script>
  import { page } from '$app/stores';

  let words = ['how', 'deep', 'does', 'the', 'rabbit', 'hole', 'go'];

  // $: depth = $page.params.path.split('/').length;
  /**
   * 원문 예제에는 바로 위 라인의 코드가 사용되고 있지만 제대로 작동하지 않는다. 이유는 [...path]가 없는
   * 경우에는 $page.params.path.split('/') = [""]이 되어서 length가 1이 된다. 그래서 아래 코드처럼
   * .filter(Boolean)가 필요하다 */
  $: depth = $page.params.path.split('/').filter(Boolean).length;
  $: next = depth === words.length ? '/' : `/${words.slice(0, depth + 1).join('/')}`;

  import Tutorial from './Tutorial.md';
</script>

<div class="flex">
  {#each words.slice(0, depth) as word}
    <p>{word}</p>
  {/each}

  <p><a href={`/part4/advanced-routing/rest-parameters/${next}`}>{words[depth] ?? '?'}</a></p>
</div>

<div class="tutorial absolute top-[30%]">
  <Tutorial />
</div>

<style>
  .flex {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .flex p {
    margin: 0.5rem 0;
    line-height: 1;
  }

  .flex a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }
</style>
