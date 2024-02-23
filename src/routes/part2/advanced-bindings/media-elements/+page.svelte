<script>
  import AudioPlayer, { stopAll } from './AudioPlayer.svelte';
  import { tracks } from './tracks.js';
</script>

<div class="centered">
  {#each tracks as track}
    <AudioPlayer {...track} />
  {/each}
  <br/>

  <button on:click={stopAll}>Stop All</button>

  <div class="tutorial">
    <p>The complete set of bindings for <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> is as follows — seven readonly bindings...</p>
    <ul>
      <li>duration (readonly) — the total duration, in seconds</li>
      <li>buffered (readonly) — an array of &#123start, end&#125 objects</li>
      <li>seekable (readonly) — ditto</li>
      <li>played (readonly) — ditto</li>
      <li>seeking (readonly) — boolean</li>
      <li>ended (readonly) — boolean</li>
      <li>readyState (readonly) — number between (and including) 0 and 4</li>
    </ul>
    <p>...and five two-way bindings:</p>
    <ul>
      <li>currentTime — the current position of the playhead, in seconds</li>
      <li>playbackRate — speed up or slow down (1 is 'normal')</li>
      <li>paused — this one should be self-explanatory</li>
      <li>volume — a value between 0 and 1</li>
      <li>muted — a boolean value where true is muted</li>
    </ul>
    <p>Videos additionally have readonly videoWidth and videoHeight bindings.</p>
    <p class="note">
      <span>NOTE</span>
      You can't have a default export(e.g. in 2 line, &#123 stopAll &#125) from a module, because the component(e.g. in 2 line, AudioPlayer) is the default export.
    </p>
  </div>
</div>

<style>
  .centered {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    gap: 0.5em;
    max-width: 40em;
    margin: 0 auto;
  }
</style>
