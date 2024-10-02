# [`<svelte:fragment>`](https://svelte.dev/docs/special-elements#svelte-fragment)
The `<svelte:fragment>` element allows you to place content in a [named slot](/template-syntax/special-elements/slot/name) without wrapping it in a container DOM element. This keeps the flow layout of your document intact.
```sveltehtml
<!-- Widget.svelte -->
<div>
	<slot name="header">No header was provided</slot>
	<p>Some content between header and footer</p>
	<slot name="footer" />
</div>

<!-- App.svelte -->
<Widget>
	<h1 slot="header">Hello</h1>
	<svelte:fragment slot="footer">
		<p>All rights reserved.</p>
		<p>Copyright (c) 2019 Svelte Industries</p>
	</svelte:fragment>
</Widget>
```
