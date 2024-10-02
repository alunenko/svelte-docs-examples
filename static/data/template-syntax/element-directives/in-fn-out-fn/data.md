# [in:fn/out:fn](https://svelte.dev/docs/element-directives#in-fn-out-fn)
```sveltehtml
in:fn

in:fn={params}

in:fn|global

in:fn|global={params}

in:fn|local

in:fn|local={params}

out:fn

out:fn={params}

out:fn|global

out:fn|global={params}

out:fn|local

out:fn|local={params}
```
Similar to `transition:`, but only applies to elements entering (`in:`) or leaving (`out:`) the DOM.

Unlike with `transition:`, transitions applied with `in:` and `out:` are not bidirectional — an in transition will continue to 'play' alongside the out transition, rather than reversing, if the block is outroed while the transition is in progress. If an out transition is aborted, transitions will restart from scratch.
```sveltehtml
{#if visible}
	<div in:fly out:fade>flies in, fades out</div>
{/if}
```
