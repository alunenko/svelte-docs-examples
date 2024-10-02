# [tweened](https://svelte.dev/docs/svelte-motion#tweened)
```ts
function tweened<T>(
	value?: T | undefined,
	defaults?: TweenedOptions<T> | undefined
): Tweened<T>;
```
Tweened stores update their values over a fixed duration. The following options are available:
- `delay` (`number`, default 0) — milliseconds before starting
- `duration` (`number` | `function`, default 400) — milliseconds the tween lasts
- `easing` (`function`, default `t => t`) — an easing function
- `interpolate` (`function`) — see below

`store.set` and `store.update` can accept a second `options` argument that will override the options passed in upon instantiation.

Both functions return a Promise that resolves when the tween completes. If the tween is interrupted, the promise will never resolve.

Out of the box, Svelte will interpolate between two numbers, two arrays or two objects (as long as the arrays and objects are the same 'shape', and their 'leaf' properties are also numbers).
```sveltehtml
<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const size = tweened(1, {
		duration: 300,
		easing: cubicOut
	});

	function handleClick() {
		// this is equivalent to size.update(n => n + 1)
		$size += 1;
	}
</script>

<button on:click={handleClick}
        style="transform: scale({$size}); transform-origin: 0 0">embiggen</button>
```
If the initial value is `undefined` or `null`, the first value change will take effect immediately. This is useful when you have tweened values that are based on props, and don't want any motion when the component first renders.
```ts
import { tweened } from 'svelte/motion';import { cubicOut } from 'svelte/easing';
const size = tweened(
  undefined,
  {
    duration: 300,
    easing: cubicOut
  }
);

$: $size = big ? 100 : 10;
```
The `interpolate` option allows you to tween between any arbitrary values. It must be an `(a, b) => t => value` function, where `a` is the starting value, `b` is the target value, `t` is a number between 0 and 1, and `value` is the result. For example, we can use the [d3-interpolate](https://github.com/d3/d3-interpolate) package to smoothly interpolate between two colours.
```sveltehtml
<script>
	import { interpolateLab } from 'd3-interpolate';
	import { tweened } from 'svelte/motion';

	const colors = [
          'rgb(255, 62, 0)',
          'rgb(64, 179, 255)',
          'rgb(103, 103, 120)'
    ];

	const color = tweened(colors[0], {
      duration: 800,
      interpolate: interpolateLab
	});
</script>

{#each colors as c}
	<button style="background-color: {c}; color: white; border: none;"
            on:click={(e) => color.set(c)}>{c}</button>
{/each}

<h1 style="color: {$color}">{$color}</h1>
```
