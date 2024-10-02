# [`<svelte:document>`](https://svelte.dev/docs/special-elements#svelte-document)
```sveltehtml
<svelte:document on:event={handler} />

<svelte:document bind:prop={value} />
```
Similarly to `<svelte:window>`, this element allows you to add listeners to events on `document`, such as `visibilitychange`, which don't fire on `window`. It also lets you [use actions](/template-syntax/element-directives/use-action) on `document`.

As with `<svelte:window>`, this element may only appear the top level of your component and must never be inside a block or element.
```sveltehtml
<svelte:document on:visibilitychange={handleVisibilityChange} use:someAction />
```
You can also bind to the following properties:
- `fullscreenElement`
- `visibilityState`

All are readonly.
