# [on:eventname](https://svelte.dev/docs/component-directives#on-eventname)
```sveltehtml
on:eventname={handler}
```
Components can emit events using [createEventDispatcher](/runtime/svelte/create-event-dispatcher) or by forwarding DOM events.
```sveltehtml
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<!-- programmatic dispatching -->
<button on:click={() => dispatch('hello')}> one </button>

<!-- declarative event forwarding -->
<button on:click> two </button>
```
Listening for component events looks the same as listening for DOM events:
```sveltehtml
<SomeComponent on:whatever={handler} />
```
As with DOM events, if the `on:` directive is used without a value, the event will be forwarded, meaning that a consumer can listen for it.
```sveltehtml
<SomeComponent on:whatever />
```
