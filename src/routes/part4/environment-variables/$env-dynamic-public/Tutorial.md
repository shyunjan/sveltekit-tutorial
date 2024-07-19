------
# **$env/dynamic/public**
As with [private environment variables](/part4/environment-variables/$env-static-private), it's preferable to use static values if possible, but if necessary we can use dynamic values instead:
```svelte title="src/routes/part4/environment-variables/$env-static-public/+page.svelte" "dynamic" /env.P/
<script>
  import { env } from '$env/dynamic/public';
</script>

<main
  style:background={env.PUBLIC_THEME_BACKGROUND}
  style:color={env.PUBLIC_THEME_FOREGROUND}
>
  {env.PUBLIC_THEME_FOREGROUND} on {env.PUBLIC_THEME_BACKGROUND}
</main>
```

[Next: Conclusion](/part4/conclusion/next-steps)
