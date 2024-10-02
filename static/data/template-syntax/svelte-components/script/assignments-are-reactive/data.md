# [Assignments are 'reactive'](https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive)

To change component state and trigger a re-render, just assign to a locally declared variable.

Update expressions (count += 1) and property assignments (obj.x = y) have the same effect.

```sveltehtml
<script>
	let count = 0;

	function handleClick() {
		// calling this function will trigger an
		// update if the markup references `count`
		count = count + 1;
	}
</script>
```

Because Svelte's reactivity is based on assignments, using array methods like .push() and .splice() won't automatically trigger updates. A subsequent assignment is required to trigger the update.

```sveltehtml
<script>
	let arr = [0, 1];

	function handleClick() {
		// this method call does not trigger an update
		arr.push(2);
		// this assignment will trigger an update
		// if the markup references `arr`
		arr = arr;
	}
</script>
```

Svelte's `<script>` blocks are run only when the component is created, so assignments within a `<script>` block are not automatically run again when a prop updates.

```sveltehtml
<script>
	export let person;
	// this will only set `name` on component creation
	// it will not update when `person` does
	let { name } = person;
</script>
```
