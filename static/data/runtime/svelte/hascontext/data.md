# [hasContext](https://svelte.dev/docs/svelte#hascontext)
```ts
function hasContext(key: any): boolean;
```
Checks whether a given `key` has been set in the context of a parent component. Must be called during component initialisation.
```sveltehtml
<script>
	import { hasContext } from 'svelte';

	if (hasContext('answer')) {
		// do something
	}
</script>
```
