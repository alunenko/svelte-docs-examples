# [---style-props](https://svelte.dev/docs/component-directives#style-props)
```sveltehtml
--style-props="anycssvalue"
```
You can also pass styles as props to components for the purposes of theming, using CSS custom properties.

Svelte's implementation is essentially syntactic sugar for adding a wrapper element. This example:
```sveltehtml
<Slider bind:value min={0} --rail-color="black" --track-color="rgb(0, 0, 255)" />
```
Desugars to this:
```sveltehtml
<div style="display: contents; --rail-color: black; --track-color: rgb(0, 0, 255)">
	<Slider bind:value min={0} max={100} />
</div>
```
⚠️ Since this is an extra `<div>`, beware that your CSS structure might accidentally target this. Be mindful of this added wrapper element when using this feature.

For SVG namespace, the example above desugars into using `<g>` instead:
```sveltehtml
<g style="--rail-color: black; --track-color: rgb(0, 0, 255)">
	<Slider bind:value min={0} max={100} />
</g>
```
⚠️ Since this is an extra `<g>`, beware that your CSS structure might accidentally target this. Be mindful of this added wrapper element when using this feature.

Svelte's CSS Variables support allows for easily themeable components:
```sveltehtml
<style>
	.potato-slider-rail {
		background-color: var(--rail-color, var(--theme-color, 'purple'));
	}
</style>
```
So you can set a high-level theme color:
```sveltehtml
/* global.css */
html {
	--theme-color: black;
}
```
Or override it at the consumer level:
```sveltehtml
<Slider --rail-color="goldenrod" />
```
