------
# **$env/static/public**
Some environment variables _can_ be safely exposed to the browser. These are distinguished from private environment variables with a `PUBLIC_` prefix.

Add values to the two public environment variables in <code data-file="/.env">.env</code>:
```bash title=".env" /PUBLIC_THEME_BACKGROUND="steelblue"/ /PUBLIC_THEME_FOREGROUND="bisque"/
PUBLIC_THEME_BACKGROUND="steelblue"
PUBLIC_THEME_FOREGROUND="bisque"
```
Then, import them into <code data-file="src/routes/part4/environment-variables/$env-static-public/+page.svelte">src/routes/part4/environment-variables/$env-static-public/+page.svelte</code>:
```svelte title="src/routes/part4/environment-variables/$env-static-public/+page.svelte" {2-3}#del {5-6} /  import {/ "  } from '$env/static/public';"
<script>
	const PUBLIC_THEME_BACKGROUND = 'white';
	const PUBLIC_THEME_FOREGROUND = 'black';
  import {
    PUBLIC_THEME_BACKGROUND,
    PUBLIC_THEME_FOREGROUND 
  } from '$env/static/public';
</script>
```

[Next: $env/dynamic/public](/part4/environment-variables/$env-dynamic-public)
