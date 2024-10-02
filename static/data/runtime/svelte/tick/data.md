# [Tick](https://svelte.dev/docs/svelte#tick)
```ts
function tick(): Promise<void>;
```
Returns a promise that resolves once any pending state changes have been applied, or in the next microtask if there are none.
```sveltehtml
<script>
	import { beforeUpdate, tick } from 'svelte';

	beforeUpdate(async () => {
		console.log('the component is about to update');
		await tick();
		console.log('the component just updated');
	});
</script>
```
