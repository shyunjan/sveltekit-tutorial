<h1>Stores &gt; navigating</h1>
<div class="tutorial">
  <p>
    The <code>navigating</code> store represents the current navigation. When a navigation starts —
    because of a link click, or a back/forward navigation, or a programmatic <code>goto</code> — 
    the value of <code>navigation</code> will become an object with the following properties:
  </p>
  <ul>
    <li><code>from</code> and <code>to</code> — objects with <code>params</code>, <code>route</code> and <code>url</code> properties</li>
    <li><code>type</code> — objects with <code>params</code>, <code>route</code> and <code>url</code> properties</li>
  </ul>
  <p class="note">
    <span>NOTE</span>
    For complete type information visit the 
    <a href="https://kit.svelte.dev/docs/types#public-types-navigation" target="_blank">Navigation
    </a> documentation.
  </p>
  <p>It can be used to show a loading indicator for long-running navigations. See <code>src\routes\part3\stores\+layout.svelte</code>.</p>
</div>
