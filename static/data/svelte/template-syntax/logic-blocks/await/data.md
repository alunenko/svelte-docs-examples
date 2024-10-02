# [await](https://svelte.dev/docs/logic-blocks#await)
```sveltehtml
{#await expression}...{:then name}...{:catch name}...{/await}

{#await expression}...{:then name}...{/await}

{#await expression then name}...{/await}

{#await expression catch name}...{/await}
```
Await blocks allow you to branch on the three possible states of a Promise — pending, fulfilled or rejected. In SSR mode, only the pending branch will be rendered on the server. If the provided expression is not a Promise only the fulfilled branch will be rendered, including in SSR mode.
```sveltehtml
{#await promise}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then value}
	<!-- promise was fulfilled or not a Promise -->
	<p>The value is {value}</p>
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}
```
The `catch` block can be omitted if you don't need to render anything when the promise rejects (or no error is possible).
```sveltehtml
{#await promise}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then value}
	<!-- promise was fulfilled -->
	<p>The value is {value}</p>
{/await}
```
If you don't care about the pending state, you can also omit the initial block.
```sveltehtml
{#await promise then value}
	<p>The value is {value}</p>
{/await}
```
Similarly, if you only want to show the error state, you can omit the `then` block.
```sveltehtml
{#await promise catch error}
	<p>The error is {error}</p>
{/await}
```