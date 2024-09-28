# What used during building doc app:
- Basic: installing and injecting TailwindCSS
- /routes/+layout.svelte
  - import main/global css
  - get static data
  - {#if}{:else}{/if}
  - {#each arr as item, index}
  - using TreeView.svelte component
    - pass data via props
  - `<slot />`
- create component TreeView (/routes/TreeView.svelte)
  - event on:click
  - aria-controls
  - aria-expanded
  - `<label for="filter-color-{index}">`
  - Recursive call `<svelte:self tree={child}/>`
