<script>
  import { goto } from "$app/navigation";
    
  console.debug('redirecting...');
  $: leftSeconds = 3;
  
  // location.href = 'http://localhost:5173/part4/advanced-loading/invalidation/America/New_York';
  /* 위 자바스크립트는 +page.(server.)js/ts에서 SSR을 꺼도(export const ssr = false) Svelte에서는 작동하지 않음.*/
  const timer = setInterval(() => {
    if (!leftSeconds) {
      clearInterval(timer);
      goto('/part4/advanced-loading/invalidateAll/America/New_York');
      return;
    }
    --leftSeconds;
  }, 1000);
</script>

<h1>Redirecting Before {leftSeconds}s ...</h1>
