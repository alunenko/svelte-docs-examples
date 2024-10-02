# [`<svelte:body>`](https://svelte.dev/docs/special-elements#svelte-body)
```sveltehtml
<svelte:body on:event={handler} />
```
Similarly to `<svelte:window>`, this element allows you to add listeners to events on `document.body`, such as `mouseenter` and `mouseleave`, which don't fire on `window`. It also lets you [use actions](/template-syntax/element-directives/use-action) on the `<body>` element.

As with `<svelte:window>` and `<svelte:document>`, this element may only appear the top level of your component and must never be inside a block or element.
```sveltehtml
<svelte:body on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave} use:someAction />
```
