<button on:click|once={() => alert('clicked')}>
	Click me
</button>

<h4>The full list of modifiers:</h4>
<ul>
  <li><code>preventDefault</code> — calls <code>event.preventDefault()</code> before running the handler. Useful for client-side form handling, for example.</li>
  <li><code>stopPropagation</code> — calls <code>event.stopPropagation()</code> , preventing the event reaching the next element</li>
  <li><code>passive</code> — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)</li>
  <li><code>nonpassive</code> — explicitly set <code>passive: false</code></li>
  <li><code>capture</code> — fires the handler during the <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_capture">capture</a> phase instead of the <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling">bubbling</a> phase</li>
  <li><code>once</code> — remove the handler after the first time it runs</li>
  <li><code>self</code> — only trigger handler if event.target is the element itself</li>
  <li><code>trusted</code> — only trigger handler if <code>event.isTrusted</code> is true, meaning the event was triggered by a user action rather than because some JavaScript called <code>element.dispatchEvent(...)</code></li>
</ul>
<h4>You can chain modifiers together, e.g. <code>on:click|once|capture=&#123...&#125</code>.</h4>
