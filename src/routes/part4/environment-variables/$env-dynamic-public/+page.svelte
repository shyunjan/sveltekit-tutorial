<script>
  // import { env } from '$env/dynamic/public';
  // 위 방식은 dev 모드에서는 작동하지만 Vercel에 배포하고 빌드했을 경우에는 작동하지 않아서 ./+page.server.ts와 함께 아래 방식을 사용한다.
  export let data;
  import Tutorial from './Tutorial.md';
</script>

<main
  style:background={data.env.PUBLIC_THEME_BACKGROUND}
  style:color={data.env.PUBLIC_THEME_FOREGROUND}
>
  {data.env.PUBLIC_THEME_FOREGROUND} on {data.env.PUBLIC_THEME_BACKGROUND}
</main>

<div class="tutorial absolute top-[75%] opacity-80">
  <Tutorial />
</div>

<style>
  main {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 10vmin;
  }
</style>
