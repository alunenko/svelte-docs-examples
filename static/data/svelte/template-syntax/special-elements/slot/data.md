# [slot](https://svelte.dev/docs/special-elements#slot)
```sveltehtml
<slot><!-- optional fallback --></slot>

<slot name="x"><!-- optional fallback --></slot>

<slot prop={value} />
```
Components can have child content, in the same way that elements can.

The content is exposed in the child component using the `<slot>` element, which can contain fallback content that is rendered if no children are provided.
```sveltehtml
<!-- Widget.svelte -->
<div>
	<slot>
		this fallback content will be rendered when no content is provided, like in the first example
	</slot>
</div>

<!-- App.svelte -->
<Widget />
<!-- this component will render the default content -->

<Widget>
	<p>this is some child content that will overwrite the default slot content</p>
</Widget>
```
⚠️ Note: If you want to render regular `<slot>` element, You can use `<svelte:element this="slot" />`.
