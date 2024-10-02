# [`<slot name="name">`](https://svelte.dev/docs/special-elements#slot-slot-name-name)
Named slots allow consumers to target specific areas. They can also have fallback content.
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
	<p slot="footer">Copyright (c) 2019 Svelte Industries</p>
</Widget>
```
Components can be placed in a named slot using the syntax `<Component slot="name" />`. In order to place content in a slot without using a wrapper element, you can use the special element `<svelte:fragment>`.
```sveltehtml
<!-- Widget.svelte -->
<div>
	<slot name="header">No header was provided</slot>
	<p>Some content between header and footer</p>
	<slot name="footer" />
</div>

<!-- App.svelte -->
<Widget>
	<HeaderComponent slot="header" />
	<svelte:fragment slot="footer">
		<p>All rights reserved.</p>
		<p>Copyright (c) 2019 Svelte Industries</p>
	</svelte:fragment>
</Widget>
```
