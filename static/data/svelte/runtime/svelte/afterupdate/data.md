# [afterUpdate](https://svelte.dev/docs/svelte#afterupdate)
```ts
function afterUpdate(fn: () => any): void;
```
Schedules a callback to run immediately after the component has been updated.

⚠️ The first time the callback runs will be after the initial `onMount`

```sveltehtml
<script>
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		console.log('the component just updated');
	});
</script>
```
