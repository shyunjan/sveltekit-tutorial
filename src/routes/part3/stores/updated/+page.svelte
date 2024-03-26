<h1>Stores &gt; updated</h1>
<div class="tutorial">
  <p>
    The <code>updated</code> store contains <code>true</code> or <code>false</code> depending on 
    whether a new version of the app has been deployed since the page was first opened. For this 
    to work, your <code>svelte.config.js</code> must specify <code>kit.version.pollInterval</code>.
  </p>
  <p>
    Version changes only happen in production, not during development. For that reason, 
    <code>$updated</code> will always be false in this tutorial.
  </p>
  <p>  
    You can manually check for new versions, regardless of <code>pollInterval</code>, by calling 
    <code>updated.check()</code>.
  </p>
  <p>See <code>src\routes\part3\stores\+layout.svelte</code>.</p>
</div>
