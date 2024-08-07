<script context="module" lang="ts">
  /** It's now possible for the components to 'talk' to each other without any state management: */
  let current: HTMLMediaElement;

  export function stopAll() {
    current?.pause();
  }
</script>

<script>
  // @ts-nocheck : 아래 59번 라인의 seek 함수같은 인라인 함수의 매개변수(e) 타입을 Svelte에서는 아직 지원해주지 않는다.

  export let src;
  export let title;
  export let artist;

  let time = 0;
  let duration = 0;
  let paused = true;

  function format(time) {
    if (isNaN(time)) return '...';

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
</script>

<div class="player" class:paused>
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
  <button class="play" aria-label={paused ? 'play' : 'pause'} on:click={() => (paused = !paused)} />

  <div class="info">
    <div class="description">
      <strong>{title}</strong> /
      <span>{artist}</span>
    </div>

    <div class="time">
      <span>{format(time)}</span>
      <div
        class="slider"
        on:pointerdown={(e) => {
          const div = e.currentTarget;

          function seek(e) {
            const { left, width } = div.getBoundingClientRect();

            let p = (e.clientX - left) / width;
            if (p < 0) p = 0;
            if (p > 1) p = 1;

            time = p * duration;
          }

          seek(e);

          window.addEventListener('pointermove', seek);

          window.addEventListener(
            'pointerup',
            () => {
              window.removeEventListener('pointermove', seek);
            },
            {
              once: true
            }
          );
        }}
      >
        <div class="progress" style="--progress: {duration ? time / duration : 0}%" />
      </div>
      <span>{duration ? format(duration) : '--:--'}</span>
    </div>
  </div>
</div>

<style>
  .player {
    display: grid;
    grid-template-columns: 2.5em 1fr;
    align-items: center;
    gap: 1em;
    padding: 0.5em 1em 0.5em 0.5em;
    border-radius: 2em;
    background: hsl(var(--fg-1));
    transition: filter 0.2s;
    color: hsl(var(--fg-3));
    user-select: none;
  }

  .player:not(.paused) {
    color: hsl(var(--bg-1));
    filter: drop-shadow(0.5em 0.5em 1em rgba(0, 0, 0, 0.1));
  }

  button {
    width: 100%;
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 50%;
  }

  [aria-label='pause'] {
    background-image: url(/icons/pause.svg);
  }

  [aria-label='play'] {
    background-image: url(/icons/play.svg);
  }

  .info {
    overflow: hidden;
  }

  .description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
  }

  .time {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .time span {
    font-size: 0.7em;
  }

  .slider {
    flex: 1;
    height: 0.5em;
    background: var(--sk-back-6);
    border-radius: 0.5em;
    overflow: hidden;
  }

  .progress {
    width: calc(100 * var(--progress));
    height: 100%;
    background: hsl(var(--sk-theme-1-hsl));
  }
</style>
