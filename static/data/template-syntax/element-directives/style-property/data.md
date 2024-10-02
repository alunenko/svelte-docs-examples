# [style:property](https://svelte.dev/docs/element-directives#style-property)
```sveltehtml
style:property={value}

style:property="value"

style:property
```
The `style:` directive provides a shorthand for setting multiple styles on an element.
```sveltehtml
<!-- These are equivalent -->
<div style:color="red">...</div>
<div style="color: red;">...</div>

<!-- Variables can be used -->
<div style:color={myColor}>...</div>

<!-- Shorthand, for when property and variable name match -->
<div style:color>...</div>

<!-- Multiple styles can be included -->
<div style:color style:width="12rem" style:background-color={darkMode ? 'black' : 'white'}>...</div>

<!-- Styles can be marked as important -->
<div style:color|important="red">...</div>
```
When `style:` directives are combined with `style` attributes, the directives will take precedence:
```sveltehtml
<div style="color: blue;" style:color="red">This will be red</div>
```
