<script lang="ts">
    import type {TTree} from "./data";
    export let tree: TTree;
    const {title, children} = tree;

    let isOpen = false;

    function toggleSection() {
      isOpen = !isOpen;
    }
</script>

<div class="pl-2">
  {#if children}
    <button type="button"
            class="flex w-full items-center justify-between bg-white px-2 py-3"
            aria-controls="filter-section"
            aria-expanded="{isOpen}"
            on:click={toggleSection}>
      <span>{title}</span>
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
    <!-- Filter section, show/hide based on section state. -->
    {#if isOpen}
      <div class="pt-6" id="filter-section">
        <div class="space-y-6">
          {#each children as child, index}
            <div class="flex items-center">
              <!-- TODO: create writable from "svelte/store -->
              <!-- {#await counter.update(c => c + 1) then count} -->
              <label for="filter-color-{index}" class="ml-3 min-w-0 flex-1">
                <svelte:self tree={child}/>
              </label>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  {:else}
    <span class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-900">{title}</span>
  {/if}
</div>
