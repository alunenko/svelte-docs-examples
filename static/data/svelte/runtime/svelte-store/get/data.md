# [get](https://svelte.dev/docs/svelte-store#get)
```ts
function get<T>(store: Readable<T>): T;
```
Generally, you should read the value of a store by subscribing to it and using the value as it changes over time. Occasionally, you may need to retrieve the value of a store to which you're not subscribed. `get` allows you to do so.

⚠️ This works by creating a subscription, reading the value, then unsubscribing. It's therefore not recommended in hot code paths.
```ts
import { get } from 'svelte/store';
const value = get(store);
```
