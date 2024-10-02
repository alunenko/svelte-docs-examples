# [spring](https://svelte.dev/docs/svelte-motion#spring)
```ts
function spring<T = any>(
	value?: T | undefined,
	opts?: SpringOpts | undefined
): Spring<T>;
```
A `spring` store gradually changes to its target value based on its `stiffness` and `damping` parameters. Whereas `tweened` stores change their values over a fixed duration, `spring` stores change over a duration that is determined by their existing velocity, allowing for more natural-seeming motion in many situations. The following options are available:
- `stiffness` (`number`, default `0.15`) — a value between 0 and 1 where higher means a 'tighter' spring
- `damping` (`number`, default `0.8`) — a value between 0 and 1 where lower means a 'springier' spring
- `precision` (`number`, default `0.01`) — determines the threshold at which the spring is considered to have 'settled', where lower means more precise

All of the options above can be changed while the spring is in motion, and will take immediate effect.
```ts
import { spring } from 'svelte/motion';

const size = spring(100);
size.stiffness = 0.3;
size.damping = 0.4;
size.precision = 0.005;
```
As with `tweened` stores, `set` and `update` return a Promise that resolves if the spring settles.

Both `set` and `update` can take a second argument — an object with `hard` or `soft` properties. `{ hard: true }` sets the target value immediately; `{ soft: n }` preserves existing momentum for `n` seconds before settling. `{ soft: true }` is equivalent to `{ soft: 0.5 }`.
```ts
import { spring } from 'svelte/motion';
const coords = spring({ x: 50, y: 50 });        // updates the value immediately
coords.set({ x: 100, y: 200 }, { hard: true }); // preserves existing momentum for 1s
coords.update(
  (target_coords, coords) => {
    return {
      x: target_coords.x,
      y: coords.y
    };
  },
  { soft: 1 }
);
```
[See a full example on the spring tutorial.](https://learn.svelte.dev/tutorial/springs)
```sveltehtml
<script>
	import { spring } from 'svelte/motion';

	const coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
</script>
```
If the initial value is `undefined` or `null`, the first value change will take effect immediately, just as with `tweened` values (see above).
```ts
import { spring } from 'svelte/motion';

const size = spring();

$: $size = big ? 100 : 10;
```
