<script lang="ts">
  let m = { x: 0, y: 0 };

  function handleMove(event: MouseEvent) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  import Tutorial from './Tutorial.md';
</script>

<div on:pointermove={handleMove} class="mousePad">
  The pointer is at {m.x} x {m.y}
</div>
<!-- 아래와 같이 inline form으로 만들 수도 있다 -->
<!-- 
  <div on:pointermove={(e) => {
    m = { x: e.clientX, y: e.clientY };
  }}>
    The pointer is at {m.x} x {m.y}
  </div> 
-->

<div class="tutorial fixed top-1/3">
  <Tutorial />
</div>

<style>
  .mousePad {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
</style>
