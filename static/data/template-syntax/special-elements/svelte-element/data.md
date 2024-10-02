# [`<svelte:element>`](https://svelte.dev/docs/special-elements#svelte-element)
```sveltehtml
<svelte:element this={expression} />
```
The `<svelte:element>` element lets you render an element of a dynamically specified type. This is useful for example when displaying rich text content from a CMS. Any properties and event listeners present will be applied to the element.

The only supported binding is `bind:this`, since the element type-specific bindings that Svelte does at build time (e.g. `bind:value` for input elements) do not work with a dynamic tag type.

If `this` has a nullish value, the element and its children will not be rendered.

If `this` is the name of a void element (e.g., `br`) and `<svelte:element>` has child elements, a runtime error will be thrown in development mode.
```sveltehtml
<script>
	let tag = 'div';

	export let handler;
</script>

<svelte:element this={tag} on:click={handler}>Foo</svelte:element>
```
