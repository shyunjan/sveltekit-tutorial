<script>
  import { time, elapsed } from './stores.js';

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });

  import Tutorial from './Tutorial.md';
</script>

<h1>The time is {formatter.format($time)}</h1>

<p>
  This page has been open for
  {$elapsed}
  {$elapsed === 1 ? 'second' : 'seconds'}
</p>

<div class="tutorial">
  <Tutorial />
</div>
