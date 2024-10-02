# [Tags](https://svelte.dev/docs/basic-markup#tags)
A lowercase tag, like `<div>`, denotes a regular HTML element. A capitalised tag, such as `<Widget>` or `<Namespace.Widget>`, indicates a _component_.
```sveltehtml
<script>
	import Widget from './Widget.svelte';
</script>

<div>
	<Widget />
</div>
```
