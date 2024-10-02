# [Binding `<select>` value](https://svelte.dev/docs/element-directives#binding-select-value)
A `<select>` value binding corresponds to the `value` property on the selected `<option>`, which can be any value (not just strings, as is normally the case in the DOM).
```sveltehtml
<select bind:value={selected}>
	<option value={a}>a</option>
	<option value={b}>b</option>
	<option value={c}>c</option>
</select>
```
A `<select multiple>` element behaves similarly to a checkbox group. The bound variable is an array with an entry corresponding to the `value` property of each selected `<option>`.
```sveltehtml
<select multiple bind:value={fillings}>
	<option value="Rice">Rice</option>
	<option value="Beans">Beans</option>
	<option value="Cheese">Cheese</option>
	<option value="Guac (extra)">Guac (extra)</option>
</select>
```
When the value of an `<option>` matches its text content, the attribute can be omitted.
```sveltehtml
<select multiple bind:value={fillings}>
	<option>Rice</option>
	<option>Beans</option>
	<option>Cheese</option>
	<option>Guac (extra)</option>
</select>
```
Elements with the `contenteditable` attribute support the following bindings:
- `innerHTML`
- `innerText`
- `textContent`

----

```sveltehtml
<div contenteditable="true" bind:innerHTML={html} />
```
`<details>` elements support binding to the `open` property.
```sveltehtml
<details bind:open={isOpen}>
	<summary>Details</summary>
	<p>Something small enough to escape casual notice.</p>
</details>
```
