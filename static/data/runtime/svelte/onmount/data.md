# [onmount](https://svelte.dev/docs/svelte#onmount)
```ts
function onMount<T>(
	fn: () =>
		| NotFunction<T>
		| Promise<NotFunction<T>>
		| (() => any)
): void;
```
The onMount function schedules a callback to run as soon as the component has been mounted to the DOM. It must be called during the component's initialisation (but doesn't need to live inside the component; it can be called from an external module).

`onMount` **does not** run inside a [server-side component](/compiler-and-api/server-side-component-api/).

```sveltehtml
<script>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('the component has mounted');
	});
</script>
```
If a function is returned from `onMount`, it will be called when the component is unmounted.
```sveltehtml
<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const interval = setInterval(() => {
			console.log('beep');
		}, 1000);

		return () => clearInterval(interval);
	});
</script>
```
⚠️ This behaviour will only work when the function passed to `onMount` _synchronously_ returns a value. `async` functions always return a `Promise`, and as such cannot _synchronously_ return a function.
