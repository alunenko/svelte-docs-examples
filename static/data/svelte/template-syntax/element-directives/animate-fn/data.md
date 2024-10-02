# [animate:fn](https://svelte.dev/docs/element-directives#animate-fn)
```sveltehtml
animate:name

animate:name={params}

animation = (node: HTMLElement, { from: DOMRect, to: DOMRect } , params: any) => {
	delay?: number,
	duration?: number,
	easing?: (t: number) => number,
	css?: (t: number, u: number) => string,
	tick?: (t: number, u: number) => void
}

DOMRect {
	bottom: number,
	height: number,
	left: number,
	right: number,
	top: number,
	width: number,
	x: number,
	y: number
}
```
An animation is triggered when the contents of a [keyed each block](/template-syntax/logic-blocks/each) are re-ordered. Animations do not run when an element is added or removed, only when the index of an existing data item within the each block changes. Animate directives must be on an element that is an _immediate_ child of a keyed each block.

Animations can be used with Svelte's [built-in animation functions](/runtime/svelte-animate) or [custom animation functions](/template-syntax/element-directives/custom-animation-functions).
```sveltehtml
<!-- When `list` is reordered the animation will run-->
{#each list as item, index (item)}
	<li animate:flip>{item}</li>
{/each}
```
