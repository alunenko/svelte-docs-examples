# [{@const ...}](https://svelte.dev/docs/special-tags#const)
```sveltehtml
{@const assignment}
```
The `{@const ...}` tag defines a local constant.
```sveltehtml
<script>
	export let boxes;
</script>

{#each boxes as box}
	{@const area = box.width * box.height}
	{box.width} * {box.height} = {area}
{/each}
```
`{@const}` is only allowed as direct child of:
- `{#if}`,
- `{:else if}`,
- `{:else}`,
- `{#each}`,
- `{:then}`,
- `{:catch}`,
- `<Component />`,
- `<svelte:fragment />`.