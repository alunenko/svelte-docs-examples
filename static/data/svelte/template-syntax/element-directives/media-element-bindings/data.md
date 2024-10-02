# [Media element bindings](https://svelte.dev/docs/element-directives#media-element-bindings)
Media elements (`<audio>` and `<video>`) have their own set of bindings — seven _readonly_ ones...
- `duration` (readonly) — the total duration of the video, in seconds
- `buffered` (readonly) — an array of `{start, end}` objects
- `played` (readonly) — ditto
- `seekable` (readonly) — ditto
- `seeking` (readonly) — boolean
- `ended` (readonly) — boolean
- `readyState` (readonly) — number between (and including) 0 and 4

...and five two-way bindings:

- `currentTime` — the current playback time in the video, in seconds
- `playbackRate` — how fast or slow to play the video, where 1 is 'normal'
- `paused` — this one should be self-explanatory
- `volume` — a value between 0 and 1
- `muted` — a boolean value indicating whether the player is muted

Videos additionally have readonly `videoWidth` and `videoHeight` bindings.

```sveltehtml
<video
	src={clip}
	bind:duration
	bind:buffered
	bind:played
	bind:seekable
	bind:seeking
	bind:ended
	bind:readyState
	bind:currentTime
	bind:playbackRate
	bind:paused
	bind:volume
	bind:muted
	bind:videoWidth
	bind:videoHeight
/>
```
