# [Image element bindings](https://svelte.dev/docs/element-directives#image-element-bindings)
Image elements (`<img>`) have two readonly bindings:
- `naturalWidth` (readonly) — the original width of the image, available after the image has loaded
- `naturalHeight` (readonly) — the original height of the image, available after the image has loaded
---
```sveltehtml
<img
	bind:naturalWidth
	bind:naturalHeight
></img>
```
