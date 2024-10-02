# [`<svelte:head>`](https://svelte.dev/docs/special-elements#svelte-head)
```sveltehtml
<svelte:head>...</svelte:head>
```
This element makes it possible to insert elements into `document.head`. During server-side rendering, `head` content is exposed separately to the main `html` content.

As with `<svelte:window>`, `<svelte:document>` and `<svelte:body>`, this element may only appear at the top level of your component and must never be inside a block or element.
```sveltehtml
<svelte:head>
	<title>Hello world!</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>
```
