<script lang="ts">
    import { page } from '$app/stores';
    import type { TTree } from '$lib/TreeView/tree-data';
    import { cleanedPathname } from '$lib/stores/treeView.store';
    import { onMount } from 'svelte';
    
    let localCPT: string[] = []; // local cleanedPathname

    const unsubscribeCleanedPathname = cleanedPathname.subscribe((val) => {
      localCPT = val;
    });

    onMount(() => {
      // Clean up subscription
      return () => {
        unsubscribeCleanedPathname();
      };
    });
    
    export let tree: TTree;
    const {title, children, slug, isLink} = tree;

    const cleanedTitle = title?.toLowerCase().replace(/[-,\/]/g, '') || '';
    let isOpen = localCPT.includes(cleanedTitle);

    if(isOpen) {
      const matchIndex = localCPT.indexOf(cleanedTitle);
      if(matchIndex !== -1) localCPT.splice(matchIndex, 1);
    }
    const toggleSection = () => isOpen = !isOpen;
    
    $: isLinkActive = $page.url.pathname === slug;
</script>

<div class="pl-2">
  {#if children}
    <button type="button"
            class="flex w-full items-center justify-between px-2 py-3 bg-white"
            aria-controls="filter-section"
            aria-expanded="{isOpen}">
      {#if isLink}
        <a href="{slug}"
           class="flex w-full items-center justify-between px-2 py-3 text-gray-900  {isLinkActive ? 'bg-slate-900 text-white' : 'bg-white'}">{title}</a>
      {:else}
        <span>{title}</span>
      {/if}
      <button type="button" on:click={toggleSection}>
        <span class="ml-6 flex items-center">
                      {#if isOpen}
                        <!-- Collapse icon, show/hide based on section open state. -->
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      {:else}
                        <!-- Expand icon, show/hide based on section open state. -->
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                      {/if}
                    </span>
      </button>
    </button>
    {#if isOpen}
      <div class="flex flex-col">
        {#each children as child}
          <svelte:self tree={child}/>
        {/each}
      </div>
    {/if}
  {:else}
    {#if isLink}
      <a href="{slug}"
         class="flex w-full items-center justify-between px-2 py-3 text-gray-900 {isLinkActive ? 'bg-slate-900 text-white' : 'bg-white'}">{title}</a>
    {:else}
      <span>{title}</span>
    {/if}
  {/if}
</div>
