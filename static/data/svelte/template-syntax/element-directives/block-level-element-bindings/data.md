# [Block-level element bindings](https://svelte.dev/docs/element-directives#block-level-element-bindings)
Block-level elements have 4 read-only bindings, measured using a technique similar to this one:
- `clientWidth`
- `clientHeight`
- `offsetWidth`
- `offsetHeight`
---
```sveltehtml
<div bind:offsetWidth={width} bind:offsetHeight={height}>
	<Chart {width} {height} />
</div>
```
