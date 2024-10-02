# [bind-property](https://svelte.dev/docs/component-directives#bind-property)
```sveltehtml
bind:property={variable}
```
You can bind to component props using the same syntax as for elements.
```sveltehtml
<Keypad bind:value={pin} />
```
While Svelte props are reactive without binding, that reactivity only flows downward into the component by default. Using `bind:property` allows changes to the property from within the component to flow back up out of the component.
