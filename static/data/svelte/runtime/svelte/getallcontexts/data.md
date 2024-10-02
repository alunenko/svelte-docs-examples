# [getAllContexts](https://svelte.dev/docs/svelte#getallcontexts)
```ts
function getAllContexts<
	T extends Map<any, any> = Map<any, any>
>(): T;
```
Retrieves the whole context map that belongs to the closest parent component. Must be called during component initialisation. Useful, for example, if you programmatically create a component and want to pass the existing context to it.
```sveltehtml
<script>
	import { getAllContexts } from 'svelte';

	const contexts = getAllContexts();
</script>
```
