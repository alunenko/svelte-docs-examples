# [bind:group](https://svelte.dev/docs/element-directives#bind-group)
```sveltehtml
bind:group={variable}
```
Inputs that work together can use `bind:group`.
```sveltehtml
<script>
	let tortilla = 'Plain';

	/** @type {Array<string>} */
	let fillings = [];
</script>

<!-- grouped radio inputs are mutually exclusive -->
<input type="radio" bind:group={tortilla} value="Plain" />
<input type="radio" bind:group={tortilla} value="Whole wheat" />
<input type="radio" bind:group={tortilla} value="Spinach" />

<!-- grouped checkbox inputs populate an array -->
<input type="checkbox" bind:group={fillings} value="Rice" />
<input type="checkbox" bind:group={fillings} value="Beans" />
<input type="checkbox" bind:group={fillings} value="Cheese" />
<input type="checkbox" bind:group={fillings} value="Guac (extra)" />
```
⚠️ `bind:group` only works if the inputs are in the same Svelte component.
