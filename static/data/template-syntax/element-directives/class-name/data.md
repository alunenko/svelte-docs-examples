# [class:name](https://svelte.dev/docs/element-directives#class-name)
```sveltehtml
class:name={value}

class:name
```
A `class:` directive provides a shorter way of toggling a class on an element.
```sveltehtml
<!-- These are equivalent -->
<div class={isActive ? 'active' : ''}>...</div>
<div class:active={isActive}>...</div>

<!-- Shorthand, for when name and value match -->
<div class:active>...</div>

<!-- Multiple class toggles can be included -->
<div class:active class:inactive={!active} class:isAdmin>...</div>
```
---
- ok: `class="card {flipped ? 'flipped' : ''}"`
- but, nicier: `class:flipped={flipped}`
- shorthand: `class:flipped`
```sveltehtml
<script>
	let flipped = false;
</script>

<div class="container">
	Flip the card
	<button
		class="card"
		class:flipped={flipped}
		on:click={() => flipped = !flipped}
	>
		<div class="front">
			<span class="symbol">♠</span>
		</div>
		<div class="back">
			<div class="pattern"></div>
		</div>
	</button>
</div>
```