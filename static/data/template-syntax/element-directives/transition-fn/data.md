# [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)
```sveltehtml
transition:fn

transition:fn={params}

transition:fn|global

transition:fn|global={params}

transition:fn|local

transition:fn|local={params}

transition = (node: HTMLElement, params: any, options: { direction: 'in' | 'out' | 'both' }) => {
	delay?: number,
    duration?: number,
    easing?: (t: number) => number,
    css?: (t: number, u: number) => string,
    tick?: (t: number, u: number) => void
}
```
A transition is triggered by an element entering or leaving the DOM as a result of a state change.

When a block is transitioning out, all elements inside the block, including those that do not have their own transitions, are kept in the DOM until every transition in the block has been completed.

The `transition:` directive indicates a _bidirectional_ transition, which means it can be smoothly reversed while the transition is in progress.
```sveltehtml
{#if visible}
	<div transition:fade>fades in and out</div>
{/if}
```
Transitions are local by default (in Svelte 3, they were global by default). Local transitions only play when the block they belong to is created or destroyed, not when parent blocks are created or destroyed.
```sveltehtml
{#if x}
	{#if y}
		<!-- Svelte 3: <p transition:fade|local> -->
		<p transition:fade>fades in and out only when y changes</p>

		<!-- Svelte 3: <p transition:fade> -->
		<p transition:fade|global>fades in and out when x or y change</p>
	{/if}
{/if}
```
⚠️ By default intro transitions will not play on first render. You can modify this behaviour by setting `intro: true` when you [create a component](/compiler-and-api/client-side-component-api) and marking the transition as `global`.
