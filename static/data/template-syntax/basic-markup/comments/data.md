# [Comments](https://svelte.dev/docs/basic-markup#comments)
You can use HTML comments inside components.
```sveltehtml
<!-- this is a comment! --><h1>Hello world</h1>
```
Comments beginning with `svelte-ignore` disable warnings for the next block of markup. Usually, these are accessibility warnings; make sure that you're disabling them for a good reason.
```sveltehtml
<!-- svelte-ignore a11y-autofocus -->
<input bind:value={name} autofocus />
```
