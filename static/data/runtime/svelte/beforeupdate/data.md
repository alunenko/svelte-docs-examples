# [beforeUpdate](https://svelte.dev/docs/svelte#beforeupdate)
```ts
function beforeUpdate(fn: () => any): void;
```
Schedules a callback to run immediately before the component is updated after any state change.

⚠️ The first time the callback runs will be before the initial `onMount`
```sveltehtml
<script>
	import { beforeUpdate } from 'svelte';

	beforeUpdate(() => {
		console.log('the component is about to update');
	});
</script>
```
