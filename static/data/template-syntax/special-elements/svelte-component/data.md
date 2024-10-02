# [`<svelte:component>`](https://svelte.dev/docs/special-elements#svelte-component)
```sveltehtml
<svelte:component this={expression} />
```
The `<svelte:component>` element renders a component dynamically, using the component constructor specified as the `this` property. When the property changes, the component is destroyed and recreated.

If `this` is falsy, no component is rendered.
```sveltehtml
<svelte:component this={currentSelection.component} foo={bar} />
```
