# [use:action](https://svelte.dev/docs/element-directives#use-action)
```sveltehtml
use:action

use:action={parameters}

action = (node: HTMLElement, parameters: any) => {
	update?: (parameters: any) => void,
		destroy?: () => void
}
```
Actions are functions that are called when an element is created. They can return an object with a `destroy` method that is called after the element is unmounted:
```sveltehtml
<script>
	/** @type {import('svelte/action').Action}  */
	function foo(node) {
		// the node has been mounted in the DOM

		return {
			destroy() {
				// the node has been removed from the DOM
			}
		};
	}
</script>

<div use:foo />
```
An action can have a parameter. If the returned value has an `update` method, it will be called whenever that parameter changes, immediately after Svelte has applied updates to the markup.

⚠️ Don't worry about the fact that we're redeclaring the `foo` function for every component instance — Svelte will hoist any functions that don't depend on local state out of the component definition.

```sveltehtml
<script>
  /**
   * This is a prop that allows the parent component to pass a value (bar) 
   * into this component.
   * The value of bar will be used later in the action.
   * */
	export let bar;

	/** This is the core Svelte action that attaches logic to a DOM element. */
	/** @type {import('svelte/action').Action}  */
	function foo(node, bar) {
        // `node` refers to the DOM element the action is applied to
        // (in this case, the <div>).
        // `bar` is the prop passed from the parent component.

		// The action can return an object with three lifecycle methods:
		return {
			update(bar) {
				// the value of `bar` has changed
			},

			destroy() {
				// the node has been removed from the DOM
			}

            /** 
             * a init(bar) (not shown in your example): This is implicitly run
             * when the action is first initialized, but you can handle 
             * any initialization logic in the action function itself 
             * (before returning the object).
             * */
		};
	}
</script>

<div use:foo={bar} />
```
## How This Code Works:
1. `Initial Mount:` When the component is rendered, the `<div>` is created and mounted in the DOM. The foo action is applied to this `<div>`, and the bar value is passed into the foo function.
2. `Updates:` If the value of bar changes at any point during the component's lifecycle, the update method is called, allowing you to react to changes. 
3. `Cleanup:` If the `<div>` is removed from the DOM, the destroy method is called, where you can clean up any side effects that were set up in the foo function (such as event listeners or intervals).

Related to [svelte/action](/runtime/svelte-action) page.