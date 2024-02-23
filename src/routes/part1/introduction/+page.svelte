<script>
	import Nested from './nested-components/Nested.svelte';
	let name = 'Svelte';
	let src = '/image.gif';
	let string = `this string contains some <strong>HTML TAG!!!</strong>`;
</script>

<h1>Hello {name.toUpperCase()}!</h1>

<img {src} alt="A man dances."/>

<p>This is a paragraph.</p>
<p>{@html string}</p>
<!--
	NOTE
	Warning! Svelte doesn't perform any sanitization of the expression inside {@html ...} before it 
	gets inserted into the DOM. This isn't an issue if the content is something you trust like an 
	article you wrote yourself. 
	However if it's some untrusted user content, e.g. a comment on an article, then it's critical 
	that you manually escape it, otherwise you risk exposing your users to Cross-Site Scripting (XSS)
	attacks.
-->
<Nested />

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
