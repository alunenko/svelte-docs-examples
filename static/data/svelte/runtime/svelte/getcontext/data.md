# [getContext](https://svelte.dev/docs/svelte#getcontext)
```ts
function getContext<T>(key: any): T;
```
Retrieves the context that belongs to the closest parent component with the specified key. Must be called during component initialisation.
```sveltehtml
<script>
	import { getContext } from 'svelte';

	const answer = getContext('answer');
</script>
```
