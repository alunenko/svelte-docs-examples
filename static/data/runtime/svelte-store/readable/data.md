# [readable](https://svelte.dev/docs/svelte-store#readable)
```ts
function readable<T>(
	value?: T | undefined,
	start?: StartStopNotifier<T> | undefined
): Readable<T>;
```
Creates a store whose value cannot be set from 'outside', the first argument is the store's initial value, and the second argument to `readable` is the same as the second argument to `writable`.
```ts
import { readable } from 'svelte/store';

/** 
 * `time` Store
 * 
 * First argument: The store is initialized with new Date() 
 * to represent the current time.
 * 
 * `set` is used to directly replace the current value of 
 * the store with a new value.
 * */
const time = readable(
  new Date(),
  (set) => {
    /* ensures subscribers get the current time without 
    waiting for the interval to kick in. */
    set(new Date()); 
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);
  
    return () => clearInterval(interval);
});

/**
 * `ticktock` Store
 * 
 * `update` is used when you want to modify the existing 
 * value of the store based on its current value. The update 
 * function provides a callback that receives the current 
 * value and returns the new value.
 * */
const ticktock = readable('tick', (set, update) => {
	const interval = setInterval(() => {
          update(
            (sound) => (sound === 'tick' ? 'tock' : 'tick')
          );
    }, 1000);

	return () => clearInterval(interval);
});
```
