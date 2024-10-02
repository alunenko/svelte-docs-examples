# [bind-this](https://svelte.dev/docs/component-directives#bind-this)
```sveltehtml
bind:this={component_instance}
```
Components also support `bind:this`, allowing you to interact with component instances programmatically.
```sveltehtml
<ShoppingCart bind:this={cart} />

<button on:click={() => cart.empty()}> Empty shopping cart </button>
```
⚠️ Note that we can't do `{cart.empty}` since `cart` is `undefined` when the button is first rendered and throws an error.
