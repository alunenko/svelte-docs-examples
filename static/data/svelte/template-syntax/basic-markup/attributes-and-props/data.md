# [Attributes and props](https://svelte.dev/docs/basic-markup#attributes-and-props)
By default, attributes work exactly like their HTML counterparts.
```sveltehtml
<div class="foo">
	<button disabled>can't touch this</button>
</div>
```
As in HTML, values may be unquoted.
```sveltehtml
<input type=checkbox />
```
Attribute values can contain JavaScript expressions.
```sveltehtml
<a href="page/{p}">page {p}</a>
```
Or they can _be_ JavaScript expressions.
```sveltehtml
<button disabled={!clickable}>...</button>
```
Boolean attributes are included on the element if their value is truthy and excluded if it's falsy.

All other attributes are included unless their value is nullish (`null` or `undefined`).
```sveltehtml
<input required={false} placeholder="This input field is not required" />
<div title={null}>This div has no title attribute</div>
```
An expression might include characters that would cause syntax highlighting to fail in regular HTML, so quoting the value is permitted. The quotes do not affect how the value is parsed:
```sveltehtml
<button disabled="{number !== 42}">...</button>
```
When the attribute name and value match (`name={name}`), they can be replaced with `{name}`.
```sveltehtml
<button {disabled}>...</button>
<!-- equivalent to
<button disabled={disabled}>...</button>
-->
```
By convention, values passed to components are referred to as _properties_ or _props_ rather than _attributes_, which are a feature of the DOM.

As with elements, `name={name}` can be replaced with the `{name}` shorthand.
```sveltehtml
<Widget foo={bar} answer={42} text="hello" />
```
Spread _attributes_ allow many attributes or properties to be passed to an element or component at once.

An element or component can have multiple spread attributes, interspersed with regular ones.
```sveltehtml
<Widget {...things} />
```
`$$props` references all props that are passed to a component, including ones that are not declared with `export`. Using `$$props` will not perform as well as references to a specific prop because changes to any prop will cause Svelte to recheck all usages of `$$props`. But it can be useful in some cases – for example, when you don't know at compile time what props might be passed to a component.

```sveltehtml
<Widget {...$$props} />
```
`$$restProps` contains only the props which are not declared with `export`. It can be used to pass down other unknown attributes to an element in a component. It shares the same performance characteristics compared to specific property access as `$$props`.
```sveltehtml
<input {...$$restProps} />
```
⚠️ The `value` attribute of an `input` element or its children `option` elements must not be set with spread attributes when using `bind:group` or `bind:checked`. Svelte needs to be able to see the element's `value` directly in the markup in these cases so that it can link it to the bound variable.

⚠️ Sometimes, the attribute order matters as Svelte sets attributes sequentially in JavaScript. For example, `<input type="range" min="0" max="1" value={0.5} step="0.1"/>`, Svelte will attempt to set the value to `1` (rounding up from 0.5 as the step by default is 1), and then set the step to `0.1`. To fix this, change it to `<input type="range" min="0" max="1" step="0.1" value={0.5}/>`.

⚠️ Another example is `<img src="..." loading="lazy" />`. Svelte will set the img `src` before making the img element `loading="lazy"`, which is probably too late. Change this to `<img loading="lazy" src="...">` to make the image lazily loaded.
