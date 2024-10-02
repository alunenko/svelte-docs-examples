# [Text expressions](https://svelte.dev/docs/basic-markup#attributes-and-props)
A JavaScript expression can be included as text by surrounding it with curly braces.
```sveltehtml
{expression}
```
Curly braces can be included in a Svelte template by using their HTML entity strings: `&lbrace;`, `&lcub;`, or `&#123;` for { and `&rbrace;`, `&rcub;`, or `&#125;` for `}`.

⚠️ If you're using a regular expression (`RegExp`) literal notation, you'll need to wrap it in parentheses.
```sveltehtml
<h1>Hello {name}!</h1>
<p>{a} + {b} = {a + b}.</p>

<div>{(/^[A-Za-z ]+$/).test(value) ? x : y}</div>
```
