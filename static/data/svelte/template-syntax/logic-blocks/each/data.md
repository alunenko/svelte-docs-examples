# [each](https://svelte.dev/docs/logic-blocks#each)
```sveltehtml
{#each expression as name}...{/each}

{#each expression as name, index}...{/each}

{#each expression as name (key)}...{/each}

{#each expression as name, index (key)}...{/each}

{#each expression as name}...{:else}...{/each}
```
Iterating over lists of values can be done with an each block.
```sveltehtml
<h1>Shopping list</h1>
<ul>
	{#each items as item}
		<li>{item.name} x {item.qty}</li>
	{/each}
</ul>
```
You can use each blocks to iterate over any array or array-like value — that is, any object with a `length` property.

An each block can also specify an _index_, equivalent to the second argument in an `array.map(...)` callback:
```sveltehtml
{#each items as item, i}
	<li>{i + 1}: {item.name} x {item.qty}</li>
{/each}
```
If a _key_ expression is provided — which must uniquely identify each list item — Svelte will use it to diff the list when data changes, rather than adding or removing items at the end. The key can be any object, but strings and numbers are recommended since they allow identity to persist when the objects themselves change.
```sveltehtml
{#each items as item (item.id)}
	<li>{item.name} x {item.qty}</li>
{/each}

<!-- or with additional index value -->
{#each items as item, i (item.id)}
	<li>{i + 1}: {item.name} x {item.qty}</li>
{/each}
```
You can freely use destructuring and rest patterns in each blocks.
```sveltehtml
{#each items as { id, name, qty }, i (id)}
	<li>{i + 1}: {name} x {qty}</li>
{/each}

{#each objects as { id, ...rest }}
	<li><span>{id}</span><MyComponent {...rest} /></li>
{/each}

{#each items as [id, ...rest]}
	<li><span>{id}</span><MyComponent values={rest} /></li>
{/each}
```
An each block can also have an `{:else}` clause, which is rendered if the list is empty.
```sveltehtml
{#each todos as todo}
	<p>{todo.text}</p>
{:else}
	<p>No tasks today!</p>
{/each}
```
Since Svelte 4 it is possible to iterate over iterables like `Map` or `Set`. Iterables need to be finite and static (they shouldn't change while being iterated over). Under the hood, they are transformed to an array using `Array.from` before being passed off to rendering. If you're writing performance-sensitive code, try to avoid iterables and use regular arrays as they are more performant.
