# [bind:property](https://svelte.dev/docs/element-directives#bind-property)
```sveltehtml
bind:property={variable}
```
Data ordinarily flows down, from parent to child. The `bind:` directive allows data to flow the other way, from child to parent. Most bindings are specific to particular elements.

The simplest bindings reflect the value of a property, such as `input.value`.
```sveltehtml
<input bind:value={name} />
<textarea bind:value={text} />

<input type="checkbox" bind:checked={yes} />
```
If the name matches the value, you can use a shorthand.
```sveltehtml
<input bind:value />
<!-- equivalent to
<input bind:value={value} />
-->
```
Numeric input values are coerced; even though `input.value` is a string as far as the DOM is concerned, Svelte will treat it as a number. If the input is empty or invalid (in the case of `type="number"`), the value is `null`.
```sveltehtml
<input type="number" bind:value={num} />
<input type="range" bind:value={num} />
```
On `<input>` elements with `type="file"`, you can use `bind:files` to get the FileList of selected files. It is readonly.
```sveltehtml
<label for="avatar">Upload a picture:</label>
<input accept="image/png, image/jpeg" bind:files id="avatar" name="avatar" type="file" />
```
If you're using `bind:` directives together with `on:` directives, the order that they're defined in affects the value of the bound variable when the event handler is called.
```sveltehtml
<script>
	let value = 'Hello World';
</script>

<input
	on:input={() => console.log('Old value:', value)}
	bind:value
	on:input={() => console.log('New value:', value)}
/>
```
Here we were binding to the value of a text input, which uses the `input` event. Bindings on other elements may use different events such as `change`.
