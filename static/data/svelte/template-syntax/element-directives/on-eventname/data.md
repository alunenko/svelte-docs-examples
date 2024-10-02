# [on:eventname](https://svelte.dev/docs/element-directives#on-eventname)
```sveltehtml
on:eventname={handler}

on:eventname|modifiers={handler}
```
Use the `on:` directive to listen to DOM events.
```sveltehtml
<script>
	let count = 0;

	/** @param {MouseEvent} event */
	function handleClick(event) {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	count: {count}
</button>
```
Handlers can be declared inline with no performance penalty. As with attributes, directive values may be quoted for the sake of syntax highlighters.
```sveltehtml
<button on:click={() => (count += 1)}>
	count: {count}
</button>
```
Add _modifiers_ to DOM events with the `|` character.
```sveltehtml
<form on:submit|preventDefault={handleSubmit}>
	<!-- the `submit` event's default is prevented,
		 so the page won't reload -->
</form>
```
The following modifiers are available:
- `preventDefault` — calls `event.preventDefault()` before running the handler
- `stopPropagation` — calls `event.stopPropagation()`, preventing the event reaching the next element
- `stopImmediatePropagation` - calls `event.stopImmediatePropagation()`, preventing other listeners of the same event from being fired.
- `passive` — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)
- `nonpassive` — explicitly set `passive: false`
- `capture` — fires the handler during the _capture_ phase instead of the _bubbling_ phase
- `once` — remove the handler after the first time it runs
- `self` — only trigger handler if `event.target` is the element itself
- `trusted` — only trigger handler if `event.isTrusted` is `true`. I.e. if the event is triggered by a user action.

Modifiers can be chained together, e.g. `on:click|once|capture={...}`.

If the `on:` directive is used without a value, the component will _forward_ the event, meaning that a consumer of the component can listen for it.
```sveltehtml
<button on:click> The component itself will emit the click event </button>
```
It's possible to have multiple event listeners for the same event:
```sveltehtml
<script>
	let counter = 0;
	function increment() {
		counter = counter + 1;
	}

	/** @param {MouseEvent} event */
	function track(event) {
		trackEvent(event);
	}
</script>

<button on:click={increment} on:click={track}>Click me!</button>
```
