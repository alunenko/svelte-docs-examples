# [createEventDispatcher](https://svelte.dev/docs/svelte#createeventdispatcher)
```ts
function createEventDispatcher<
	EventMap extends Record<string, any> = any
>(): EventDispatcher<EventMap>;
```
Creates an event dispatcher that can be used to dispatch **component events**. Event dispatchers are functions that can take two arguments: `name` and `detail`.

Component events created with `createEventDispatcher` create a **CustomEvent**. These events do not **bubble**. The `detail` argument corresponds to the **CustomEvent.detail** property and can contain any type of data.
```sveltehtml
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('notify', 'detail value')}>Fire Event</button>
```
Events dispatched from child components can be listened to in their parent. Any data provided when the event was dispatched is available on the `detail` property of the event object.
```sveltehtml
<script>
	function callbackFunction(event) {
		console.log(`Notify fired! Detail: ${event.detail}`);
	}
</script>

<Child on:notify={callbackFunction} />
```
Events can be cancelable by passing a third parameter to the dispatch function. The function returns `false` if the event is cancelled with `event.preventDefault()`, otherwise it returns `true`.
```sveltehtml
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function notify() {
		const shouldContinue = dispatch('notify', 'detail value', { cancelable: true });
		if (shouldContinue) {
			// no one called preventDefault
		} else {
			// a listener called preventDefault
		}
	}
</script>
```
You can type the event dispatcher to define which events it can receive. This will make your code more type safe both within the component (wrong calls are flagged) and when using the component (types of the events are now narrowed). See [misc typescript events](/misc/typescript/script-lang-ts/events) how to do it.
