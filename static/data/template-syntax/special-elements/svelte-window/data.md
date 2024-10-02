# [`<svelte:window>`](https://svelte.dev/docs/special-elements#svelte-window)
```sveltehtml
<svelte:window on:event={handler} />

<svelte:window bind:prop={value} />
```
The `<svelte:window>` element allows you to add event listeners to the `window` object without worrying about removing them when the component is destroyed, or checking for the `existence` of window when server-side rendering.

Unlike `<svelte:self>`, this element may only appear at the top level of your component and must never be inside a block or element.
```sveltehtml
<script>
	/** @param {KeyboardEvent} event */
	function handleKeydown(event) {
		alert(`pressed the ${event.key} key`);
	}
</script>

<svelte:window on:keydown={handleKeydown} />
```
You can also bind to the following properties:
- `innerWidth`
- `innerHeight`
- `outerWidth`
- `outerHeight`
- `scrollX`
- `scrollY`
- `online` — an alias for window.navigator.onLine
- `devicePixelRatio`

All except `scrollX` and `scrollY` are readonly.
```sveltehtml
<svelte:window bind:scrollY={y} />
```
⚠️ Note that the page will not be scrolled to the initial value to avoid accessibility issues. Only subsequent changes to the bound variable of `scrollX` and `scrollY` will cause scrolling. However, if the scrolling behaviour is desired, call `scrollTo()` in `onMount()`.
