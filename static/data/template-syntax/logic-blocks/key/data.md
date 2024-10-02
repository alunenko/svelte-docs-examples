# [key](https://svelte.dev/docs/logic-blocks#key)
```sveltehtml
{#key expression}...{/key}
```
Key blocks destroy and recreate their contents when the value of an expression changes.

This is useful if you want an element to play its transition whenever a value changes.
```sveltehtml
{#key value}
	<div transition:fade>{value}</div>
{/key}
```
When used around components, this will cause them to be reinstantiated and reinitialised.
```sveltehtml
{#key value}
	<Component />
{/key}
```
