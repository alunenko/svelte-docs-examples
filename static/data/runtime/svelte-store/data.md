# [svelte/store](https://svelte.dev/docs/svelte-store)
The `svelte/store` module exports functions for creating `readable`, `writable` and `derived` stores.

Keep in mind that you don't _have_ to use these functions to enjoy the `reactive $store syntax` in your components. Any object that correctly implements `.subscribe`, unsubscribe, and (optionally) `.set` is a valid store, and will work both with the special syntax, and with Svelte's built-in `derived stores`.

This makes it possible to wrap almost any other reactive state handling library for use in Svelte. Read more about the `store contract` to see what a correct implementation looks like.
