------
# **TrailingSlash**
Two URLs like `/foo` and `/foo/` might look the same, but they're actually different. A relative URL like `./bar` will resolve to `/bar` in the first case and `/foo/bar` in the second, and search engines will treat them as separate entries, harming your SEO.
> 위 문장의 의미를 조금 더 자세히 기술하자면, `/foo`의 현재 경로는 `/`이고, `/foo/`의 현재 경로는 `/foo/`이라는 뜻이다. 그래서 `/foo`의 경우에 `./bar`를 사용하면 `/bar`로 이동되고, `/foo/`의 경우에 `./bar`를 사용하면 `/foo/bar`로 이동된다. 간단하게 정리하자면 경로의 마지막 `/`가 현재 경로의 기준이 된다.

In short, being loosey-goosey about trailing slashes is a bad idea. By default, SvelteKit strips trailing slashes, meaning that a request for `/foo/` will result in a redirect to `/foo`.

If you instead want to ensure that a trailing slash is always present, you can specify the `trailingSlash` option accordingly:
```js title="src/routes/part4/page-options/trailingSlash/always/+page.server.ts"
export const trailingSlash = 'always';
```
To accommodate both cases (this is not recommended!), use `'ignore'`:
```js title="src/routes/part4/page-options/trailingSlash/ignore/+page.server.ts"
export const trailingSlash = 'ignore';
```
The default value is 'never'.

Whether or not trailing slashes are applied affects prerendering. A URL like `/always/` will be saved to disk as `always/index.html` whereas a URL like `/never` will be saved as `never.html`.

[Next: Link options](/part4/link-options/preloading)
