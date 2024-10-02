# [Animation Parameters](https://svelte.dev/docs/element-directives#animation-parameters)
As with actions and transitions, animations can have parameters.

(The double `{{curlies}}` aren't a special syntax; this is an object literal inside an expression tag.)
```sveltehtml
{#each list as item, index (item)}
	<li animate:flip={{ delay: 500 }}>{item}</li>
{/each}
```
