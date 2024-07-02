------
# **<a id="media-elements">Media elements</a>**
You can bind to properties of `<audio>` and `<video>` elements, making it easy to (for example) build custom player UI, like <code data-file="src/routes/part2/advanced-bindings/media-elements/AudioPlayer.svelte">AudioPlayer.svelte</code>.

First, add the `<audio>` element along with its bindings (we'll use the shorthand form for `src`, `duration` and `paused`). Next, add an event handler to the `<button>` that toggles `paused`:
```svelte title="src/routes/part2/advanced-bindings/media-elements/AudioPlayer.svelte" {3-6} /<audio/ "  ></audio>" /on:click={() => paused = !paused}/
<div class="player" class:paused>
  <audio
    {src}
    bind:currentTime={time}
    bind:duration
    bind:paused
  ></audio>

  <button 
    class="play" 
    aria-label={paused ? 'play' : 'pause'}
    on:click={() => paused = !paused}
  ></button>
```
Our audio player now has basic functionality. Let's add the ability to seek to a specific part of a track by dragging the slider. Inside the slider's `pointerdown` handler there's a `seek` function, where we can update `time`:
```js title="src/routes/part2/advanced-bindings/media-elements/AudioPlayer.svelte" /time = p * duration;/
function seek(e) {
  const { left, width } = div.getBoundingClientRect();

  let p = (e.clientX - left) / width;
  if (p < 0) p = 0;
  if (p > 1) p = 1;

  time = p * duration;
}
```
When the track ends, be kind — rewind:
```svelte title="src/routes/part2/advanced-bindings/media-elements/AudioPlayer.svelte" /on:ended={() => {/ /  }}/ {7-8} 
<audio
  {src}
  bind:currentTime={time}
  bind:duration
  bind:paused
  on:ended={() => {
    time = 0;
    paused = false;
  }}
></audio>
```
The complete set of bindings for `<audio>` and `<video>` is as follows — seven _readonly_ bindings...
- `duration` (readonly) — the total duration, in seconds
- `buffered` (readonly) — an array of `&#123; start, end &#125;` objects
- `seekable` (readonly) — ditto
- `played` (readonly) — ditto
- `seeking` (readonly) — boolean
- `ended` (readonly) — boolean
- `readyState` (readonly) — number between (and including) 0 and 4

...and five _two-way_ bindings:
- `currentTime` — the current position of the playhead, in seconds
- `playbackRate` — speed up or slow down (`1` is 'normal')
- `paused` — this one should be self-explanatory
- `volume` — a value between 0 and 1
- `muted` — a boolean value where true is muted

Videos additionally have readonly `videoWidth` and `videoHeight` bindings.

[Next: Dimensions](/part2/advanced-bindings/dimensions)

------
# **Sharing code**
In all the examples we've seen so far, the `<script>` block contains code that runs when each component instance is initialised. For the vast majority of components, that's all you'll ever need.

Very occasionally, you'll need to run some code outside of an individual component instance. For example: returning to our custom audio player from a [previous exercise](#media-elements), you can play all four tracks simultaneously. It would be better if playing one stopped all the others.

We can do that by declaring a `<script context="module">` block. Code contained inside it will run once, when the module first evaluates, rather than when a component is instantiated. Place this at the top of <code data-file="src/routes/part2/advanced-bindings/media-elements/AudioPlayer.svelte">AudioPlayer.svelte</code> (note that this is a _separate_ script tag):
```svelte title="src/routes/part2/advanced-bindings/media-elements/AudioPlayer.svelte" /<script context="module">/ "</script>" {2}
<script context="module">
  let current;
</script>
```
It's now possible for the components to 'talk' to each other without any state management:
```svelte title="src/routes/part2/advanced-bindings/media-elements/AudioPlayer.svelte" {7-12} /  on:play={(e) => {/ /  }} / 
<audio
  {src}
  bind:currentTime={time}
  bind:duration
  bind:paused
  on:play={(e) => {
    const audio = e.currentTarget;

    if (audio !== current) {
      current?.pause();
      current = audio;
    }
  }} 
  on:ended={() => {
    time = 0;
    paused = false;
  }}
/>
```
.
------
# **Exports**
Anything exported from a `context="module"` script block becomes an export from the module itself. Let's export a `stopAll` function:
```svelte title="src/routes/part2/advanced-bindings/media-elements/AudioPlayer.svelte" {5} /  export function stopAll() {/ /  }/
<script context="module">
  let current;

  export function stopAll() {
    current?.pause();
  }
</script>
```
We can now import `stopAll` in <code data-file="src/routes/part2/advanced-bindings/media-elements/+page.svelte">App.svelte</code>...and use it in an event handler:
```svelte title="src/routes/part2/advanced-bindings/media-elements/+page.svelte" /{ stopAll }/ /  <button on:click={stopAll}>/ "  </button>" {13}
<script>
  import AudioPlayer, { stopAll } from './AudioPlayer.svelte';
  import { tracks } from './tracks.js';
</script>
...
<div class="centered">
  {#each tracks as track}
    <AudioPlayer {...track} />
  {/each}
  <br />

  <button on:click={stopAll}>
    Stop All
  </button>
</div>
```
> You can't have a default export, because the component _is_ the default export.

[Next: Miscellaneous](/part2/miscellaneous)
