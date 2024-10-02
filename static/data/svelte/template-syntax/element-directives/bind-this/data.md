# [bind:this](https://svelte.dev/docs/element-directives#bind-this)
```sveltehtml
bind:this={dom_node}
```
To get a reference to a DOM node, use `bind:this`.
```sveltehtml
<script>
	import { onMount } from 'svelte';

	/** @type {HTMLCanvasElement} */
	let canvasElement;

	onMount(() => {
		const ctx = canvasElement.getContext('2d');
		drawStuff(ctx);
	});
</script>

<canvas bind:this={canvasElement} />
```
