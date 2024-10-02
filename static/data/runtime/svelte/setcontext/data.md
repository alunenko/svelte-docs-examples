# [setContext](https://svelte.dev/docs/svelte#setcontext)
```ts
function setContext<T>(key: any, context: T): T;
```
Associates an arbitrary `context` object with the current component and the specified `key` and returns that object. The context is then available to children of the component (including slotted content) with `getContext`.

Like lifecycle functions, this must be called during component initialisation.
```sveltehtml
<script>
	import { setContext } from 'svelte';

	setContext('answer', 42);
</script>
```
Context is not inherently reactive. If you need reactive values in context then you can pass a store into context, which _will_ be reactive.
