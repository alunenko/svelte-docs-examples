# [`<script>`](https://svelte.dev/docs/svelte-components#script)
A `<script>` block contains JavaScript that runs when a component instance is created. Variables declared (or imported) at the top level are 'visible' from the component's markup. There are four additional rules:
1. export creates a component prop
2. Assignments are 'reactive'
3. $: marks a statement as reactive
4. Prefix stores with $ to access their values
