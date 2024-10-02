<script lang="ts">
    import "../app.css";
    import { tree } from '$lib';
    import TreeView from '$lib/TreeView/TreeView.svelte';
    import { page } from '$app/stores';
    import { cleanedPathname } from '$lib/stores/treeView.store';

    cleanedPathname.set($page.url.pathname.replace(/-/g, '').split('/'));
</script>

<div class="main-layout flex flex-col h-screen">
    <header class="h-16 items-center flex px-4 bg-slate-900 text-white">
        <a href="/">Home</a>
    </header>
    
    <div class="flex flex-1 overflow-hidden">
        <div class="grid grid-cols-4">
            <aside class="m-4 overflow-y-auto">
                <nav>
                    {#each tree as treeItem}
                        <TreeView tree={treeItem}/>
                    {/each}
                </nav>
            </aside>
    
            <main class="flex-1 overflow-y-auto p-4 col-span-3">
                <slot />
            </main>
        </div>
    </div>
    
    <footer class="h-16 items-center flex px-4 bg-slate-900 text-white">Footer</footer>
</div>

<style>
    
</style>
