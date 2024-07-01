------
# **Progressive enhancement**
바로 이전 tutorial 과정(**The &amp;lt;form&amp;gt; element**, **Named form actions**, **Validation**)과 이번 장(**progressive_enhancement**)을 따로 분리한 이유는 이번 장부터는 `&lt;form&gt;`을 통한 Location 이동이 일어나지 않기 때문이다. 즉, 바로 이전 tutorial까지는 TODO를 생성하거나 삭제하면 `&lt;form&gt;`의 해당 `action`(`?/create` 혹은 `?/delete`) url로 이동이 일어나면서 브라우저의 `History`가 쌓인다. 그러나 이번 장부터는 현재 페이지의 업데이트만 일어나기 때문에 Location 이동이 없다. 자세한 설명은 바로 아래에서 시작된다.

Because we're using `&lt;form&gt;`, our app works even if the user doesn't have JavaScript ([which happens more often than you probably think](https://kryogenix.org/code/browser/everyonehasjs.html)). That's great, because it means our app is resilient.

Most of the time, users _do_ have JavaScript. In those cases, we can _progressively enhance_ the experience, the same way SvelteKit progressively enhances `&lt;a&gt;` elements by using client-side routing.

Import the `enhance` function from `$app/forms`...
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" "import { enhance } from '$app/forms';"
<script>
  import { enhance } from '$app/forms';

  export let data;
  export let form;
</script>
```
...and add the `use:enhance` directive to the `&lt;form&gt;` elements:
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" /use:enhance/
<form method="POST" action="?/create" use:enhance>
```
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" /use:enhance/
<form method="POST" action="?/delete" use:enhance>
```
And that's all it takes! Now, when JavaScript is enabled, `use:enhance` will emulate the browser-native behaviour except for the full-page reloads. It will:
- update the `form` prop
- invalidate all data on a successful response, causing `load` functions to re-run
- navigate to the new page on a redirect response
- render the nearest error page if an error occurs
Now that we're updating the page rather than reloading it, we can get fancy with things like transitions:
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" "import { fly, slide } from 'svelte/transition';" /in:fly={{ y: 20 }} out:slide/
<script>
  import { enhance } from '$app/forms';
  import { fly, slide } from 'svelte/transition';

  export let data;
  export let form;
</script>
...
      <li in:fly={{ y: 20 }} out:slide>...</li>
```
.
------
# **Customizing use:enhance**
