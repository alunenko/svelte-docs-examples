# [derived](https://svelte.dev/docs/svelte-store#derived)
```ts
function derived<S extends Stores, T>(
	stores: S,
	fn: (
		values: StoresValues<S>,
		set: (value: T) => void,
		update: (fn: Updater<T>) => void
	) => Unsubscriber | void,
	initial_value?: T | undefined
): Readable<T>;

function derived<S extends Stores, T>(
	stores: S,
	fn: (values: StoresValues<S>) => T,
	initial_value?: T | undefined
): Readable<T>;
```
In Svelte, a derived store is a store whose value depends on one or more other stores. The value of the derived store is automatically recalculated whenever the stores it depends on change.

Derives a store from one or more other stores. The callback runs initially when the first subscriber subscribes and then whenever the store dependencies change.

This is useful when you want to compute some value based on other stores, without manually subscribing to those stores and updating the value yourself.

In the simplest version, `derived` takes a single store, and the callback returns a derived value.
```ts
import { derived } from 'svelte/store';

const doubled = derived(a, ($a) => $a * 2);
```
The callback can set a value asynchronously by accepting a second argument, `set`, and an optional third argument, `update`, calling either or both of them when appropriate.

In this case, you can also pass a third argument to `derived` — the initial value of the derived store before `set` or `update` is first called. If no initial value is specified, the store's initial value will be `undefined`.
```ts
import { derived } from 'svelte/store';
const delayed = derived(
  a,
  ($a, set) => {
    setTimeout(() => set($a), 1000);
  },
  2000
);

const delayedIncrement = derived(
  a,
  ($a, set, update) => {
    set($a);
    setTimeout(() => update((x) => x + 1), 1000);
    // every time $a produces a value, this produces two
    // values, $a immediately and then $a + 1 a second later});
  }
);
```
If you return a function from the callback, it will be called when:
- a) the callback runs again, or
- b) the last subscriber unsubscribes.
```ts
import { derived } from 'svelte/store';
const tick = derived(
    frequency,
    ($frequency, set) => {
      const interval = setInterval(() => {set(Date.now());}, 1000 / $frequency);
      
      return () => {
        clearInterval(interval);
      };
    },
    2000
);
```
In both cases, an array of arguments can be passed as the first argument instead of a single store.
```ts
import { derived } from 'svelte/store';

const summed = derived([a, b], ([$a, $b]) => $a + $b);

const delayed = derived(
  [a, b],
  ([$a, $b], set) => { setTimeout(() => set($a + $b), 1000); }
);
```
## Key Features:
- **Automatic reactivity:** The derived store will automatically update whenever its dependent stores (`store1`, `store2`, etc.) change.
- **Multiple dependent stores:** You can derive a store from a single or multiple stores.
- **Transformation logic:** The second argument to the `derived` function is a callback where you define how to compute the new value of the derived store based on the current values of the dependent stores.

## When to Use derived:
- When you want a store’s value to be calculated based on other stores.
- To avoid manually subscribing to multiple stores and managing updates.
- When you need a computed store that reacts to changes in one or more other stores.

## Advanced Usage:
You can also pass an `initial_value` to the derived store and use asynchronous updates if needed.
```ts
const asyncDerivedStore = derived(
  someStore,
  ($someStore, set) => {
    // Simulate async operation
    setTimeout(() => {
      set($someStore * 2);
    }, 1000);
  },
  0 // Initial value before the derived store is first calculated
);
```
