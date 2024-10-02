# What used during building doc app:
- **Basic**: installing and injecting `TailwindCSS`
- `/routes/+layout.svelte`
  - import app css as global styles
  - get static data
  - `{#if}{:else}{/if}`
  - `{#each arr as item}`
  - using **TreeView** component
    - pass data via props
  - `<slot />`
- create component **TreeView** `/routes/TreeView.svelte`
  - event `on:click`
  - `aria-controls`
  - `aria-expanded`
  - `<label for="filter-color-{index}">`
  - Recursive call `<svelte:self tree={child}/>`
- dynamic routes
  - `event.fetch` to get a static (`*.md`) files
  - `$:`
  - TailwindCSS `h1 { @apply text-4xl font-bold text-gray-900 }`
  - package `marked` for displaying `*.md` files
  - `load` function
  - `+page.server`
  - `<div>{@html marked(data)}</div>`
- svelte/store#writable
  - for dynamic expanding menu
