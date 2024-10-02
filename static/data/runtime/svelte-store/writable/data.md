# [writable](https://svelte.dev/docs/svelte-store#writable)
```ts
function writable<T>(
	value?: T | undefined,
	start?: StartStopNotifier<T> | undefined
): Writable<T>;
```
Function that creates a store which has values that can be set from 'outside' components. It gets created as an object with additional `set` and `update` methods.

`set` is a method that takes one argument which is the value to be set. The store value gets set to the value of the argument if the store value is not already equal to it.

`update` is a method that takes one argument which is a callback. The callback takes the existing store value as its argument and returns the new value to be set to the store.
```ts
import { writable } from 'svelte/store';
const count = writable(0);
count.subscribe((value) => {
	console.log(value);
}); // logs '0'
count.set(1); // logs '1'
count.update((n) => n + 1); // logs '2'
```
If a function is passed as the second argument, it will be called when the number of subscribers goes from zero to one (but not from one to two, etc). That function will be passed a `set` function which changes the value of the store, and an `update` function which works like the `update` method on the store, taking a callback to calculate the store's new value from its old value. It must return a `stop` function that is called when the subscriber count goes from one to zero.
```ts
import { writable } from 'svelte/store';
const count = writable(0, () => {
	console.log('got a subscriber');
	return () => console.log('no more subscribers');
});
count.set(1); // does nothing
const unsubscribe = count.subscribe((value) => {
	console.log(value);
}); // logs 'got a subscriber', then '1'
unsubscribe(); // logs 'no more subscribers'
```
Note that the value of a `writable` is lost when it is destroyed, for example when the page is refreshed. However, you can write your own logic to sync the value to for example the `localStorage`.
