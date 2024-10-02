# [readonly](https://svelte.dev/docs/svelte-store#readonly)
```ts
function readonly<T>(store: Readable<T>): Readable<T>;
```
This simple helper function makes a store readonly. You can still subscribe to the changes from the original one using this new readable store.
```ts
import { readonly, writable } from 'svelte/store';

const writableStore = writable(1);
const readableStore = readonly(writableStore);

readableStore.subscribe(console.log);
writableStore.set(2); // console: 2
readableStore.set(2); // ERROR
```
