# [onDestroy](https://svelte.dev/docs/svelte#ondestroy)
```ts
function onDestroy(fn: () => any): void;
```

Schedules a callback to run immediately before the component is unmounted.

Out of 
- `onMount`,
- `beforeUpdate`, 
- `afterUpdate`,
- `onDestroy`

this is the only one that runs inside a server-side component.

```sveltehtml
<script>
	import { onDestroy } from 'svelte';

	onDestroy(() => {
		console.log('the component is being destroyed');
	});
</script>
```
