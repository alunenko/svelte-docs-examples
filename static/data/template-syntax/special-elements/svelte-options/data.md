# [`<svelte:options>`](https://svelte.dev/docs/special-elements#svelte-options)
```sveltehtml
<svelte:options option={value} />
```
The `<svelte:options>` element provides a place to specify per-component compiler options, which are detailed in the [compiler section](/compiler-and-api/svelte-compiler/compile). The possible options are:
- `immutable={true}` — you never use mutable data, so the compiler can do simple referential equality checks to determine if values have changed
- `immutable={false}` — the default. Svelte will be more conservative about whether or not mutable objects have changed
- `accessors={true}` — adds getters and setters for the component's props
- `accessors={false}` — the default
- `namespace="..."` — the namespace where this component will be used, most commonly "svg"; use the "foreign" namespace to opt out of case-insensitive attribute names and HTML-specific warnings
- `customElement="..."` — the name to use when compiling this component as a custom element
---
```sveltehtml
<svelte:options customElement="my-custom-element" />
```
