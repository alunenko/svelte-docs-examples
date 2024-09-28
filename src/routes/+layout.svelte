<script lang="ts">
    import "../app.css";
    import TreeView from "./TreeView.svelte";
    import {tree} from "./data"; 
</script>

<div class="main-layout flex flex-col h-screen">
    <header class="h-16 items-center flex px-4 bg-slate-900 text-white">Header</header>
    
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
