<script lang="ts">
  // import { onMount } from 'svelte';

  // onMount(() => {
  //   window.document.body.style.overflow = 'visible';
  // });

  function changeStyle(node: HTMLElement) {
    node.style.overflow = "visible";
  }
</script>

<svelte:body use:changeStyle />

<div class="centered">
  <h1 class="text-2xl font-bold">Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  <br />
  <br />
  <br />
  <h2>Part1: Basic Svelte</h2>
  <ul class="contents">
    <li>
      <h3>Introduction</h3>
      <ul>
        <li><a href="/part1/introduction">Welcome to Svelte</a></li>
        <li><a href="/part1/introduction">Your first component</a></li>
        <li><a href="/part1/introduction">Dynamic attributes</a></li>
        <li><a href="/part1/introduction">Styling</a></li>
        <li><a href="/part1/introduction">Nested components</a></li>
        <li><a href="/part1/introduction">HTML tags</a></li>
      </ul>
    </li>
    <li>
      <h3>Reactivity</h3>
      <ul>
        <li><a href="/part1/reactivity">Assignments</a></li>
        <li><a href="/part1/reactivity">Declarations</a></li>
        <li><a href="/part1/reactivity">Statements</a></li>
        <li><a href="/part1/reactivity">Updating arrays and objects</a></li>
      </ul>
    </li>
    <li>
      <h3>Props</h3>
      <ul>
        <li><a href="/part1/props">Declaring props</a></li>
        <li><a href="/part1/props">Default values</a></li>
        <li><a href="/part1/props">Spread props</a></li>
      </ul>
    </li>
    <li>
      <h3>Logic</h3>
      <ul>
        <li><a href="/part1/logic/if">If blocks</a></li>
        <li><a href="/part1/logic/if">Else blocks</a></li>
        <li><a href="/part1/logic/if">Else-if blocks</a></li>
        <li><a href="/part1/logic/each">Each blocks</a></li>
        <li><a href="/part1/logic/keyed-each">Keyed each blocks</a></li>
        <li><a href="/part1/logic/await">Await blocks</a></li>
      </ul>
    </li>
    <li>
      <h3>Events</h3>
      <ul>
        <li><a href="/part1/events">Dom Events</a></li>
        <li><a href="/part1/events">Inline handlers</a></li>
        <li><a href="/part1/events/modifiers">Event modifiers</a></li>
        <li><a href="/part1/events/component-events">Component events</a></li>
        <li><a href="/part1/events/component-events">Event forwarding</a></li>
        <li><a href="/part1/events/dom-event-forwarding">DOM event forwarding</a></li>
      </ul>
    </li>
    <li>
      <h3>Bindings</h3>
      <ul>
        <li><a href="/part1/bindings">Text Inputs</a></li>
        <li><a href="/part1/bindings">Numeric inputs</a></li>
        <li><a href="/part1/bindings">Checkbox inputs</a></li>
        <li><a href="/part1/bindings">Select bindings</a></li>
        <li><a href="/part1/bindings/group-inputs">Group inputs</a></li>
        <li><a href="/part1/bindings/select-multiple">Select multiple</a></li>
        <li><a href="/part1/bindings/textarea-inputs">Textarea inputs</a></li>
      </ul>
    </li>
    <li>
      <h3>Lifecycle</h3>
      <ul>
        <li><a href="/part1/lifecycle/onMount">onMount</a></li>
        <li>
          <a href="/part1/lifecycle/beforeUpdate-afterUpdate">beforeUpdate and afterUpdate</a>
        </li>
        <li><a href="/part1/lifecycle/tick">tick</a></li>
      </ul>
    </li>
    <li>
      <h3>Stores</h3>
      <ul>
        <li><a href="/part1/stores/writable-stores">Writable stores</a></li>
        <li><a href="/part1/stores/writable-stores">Auto-subscriptions</a></li>
        <li><a href="/part1/stores/readable-stores">Readable stores</a></li>
        <li><a href="/part1/stores/readable-stores">Derived stores</a></li>
        <li><a href="/part1/stores/custom-stores">Custom stores</a></li>
        <li><a href="/part1/stores/store-bindings">Store bindings</a></li>
      </ul>
    </li>
  </ul>
  <br />
  <h2>Part2: Advanced Svelte</h2>
  <ul class="contents">
    <li>
      <h3>Motion</h3>
      <ul>
        <li><a href="/part2/motion/tweens">Tweens</a></li>
        <li><a href="/part2/motion/springs">Springs</a></li>
      </ul>
    </li>
    <li>
      <h3>Transitions</h3>
      <ul>
        <li><a href="/part2/transitions/directive">The transition directive</a></li>
        <li><a href="/part2/transitions/adding-parameters">Adding parameters</a></li>
        <li><a href="/part2/transitions/in-and-out">In and out</a></li>
        <li><a href="/part2/transitions/custom-css-transitions">Custom CSS transitions</a></li>
        <li><a href="/part2/transitions/custom-js-transitions">Custom JS transitions</a></li>
        <li><a href="/part2/transitions/adding-parameters">Transition events</a></li>
        <li><a href="/part2/transitions/global">Global transitions</a></li>
        <li><a href="/part2/transitions/key-blocks">Key blocks</a></li>
        <li><a href="/part2/transitions/deferred">Deferred transitions</a></li>
      </ul>
    </li>
    <li>
      <h3>Animations</h3>
      <ul>
        <li><a href="/part2/transitions/deferred">The animate directive</a></li>
      </ul>
    </li>
    <li>
      <h3>Actions</h3>
      <ul>
        <li><a href="/part2/actions/use-directive">The use directive</a></li>
        <li><a href="/part2/actions/adding-parameters">Adding parameters</a></li>
      </ul>
    </li>
    <li>
      <h3>Advanced bindings</h3>
      <ul>
        <li>
          <a href="/part2/advanced-bindings/contenteditable-bindings">Contenteditable bindings</a>
        </li>
        <li><a href="/part2/advanced-bindings/each-block">Each block bindings</a></li>
        <li><a href="/part2/advanced-bindings/media-elements">Media elements</a></li>
        <li><a href="/part2/advanced-bindings/dimensions">Dimensions</a></li>
        <li><a href="/part2/advanced-bindings/this">This</a></li>
        <li><a href="/part2/advanced-bindings/component">Component bindings</a></li>
        <li><a href="/part2/actions/use-directive">Binding to component instances</a></li>
      </ul>
    </li>
    <li>
      <h3>Classes and styles</h3>
      <ul>
        <li><a href="/part2/classes&styles/css-directive">The class directive</a></li>
        <li><a href="/part2/classes&styles/css-directive">Shorthand class directive</a></li>
        <li><a href="/part2/classes&styles/style-directive">The style directive</a></li>
        <li><a href="/part2/classes&styles/component-styles">Component styles</a></li>
      </ul>
    </li>
    <li>
      <h3>Component composition</h3>
      <ul>
        <li><a href="/part2/component-composition/slots">Slots</a></li>
        <li><a href="/part2/component-composition/slots">Named slots</a></li>
        <li><a href="/part2/component-composition/slots">Slot fallbacks</a></li>
        <li><a href="/part2/component-composition/slot-props">Slot props</a></li>
        <li><a href="/part2/component-composition/slot-props">Checking for slot content</a></li>
      </ul>
    </li>
    <li>
      <h3>Context API</h3>
      <ul>
        <li><a href="/part2/context-api">setContext and getContext</a></li>
      </ul>
    </li>
    <li>
      <h3>Special elements</h3>
      <ul>
        <li><a href="/part2/special-elements/self">&lt;svelte:self&gt;</a></li>
        <li><a href="/part2/special-elements/component">&lt;svelte:component&gt;</a></li>
        <li><a href="/part2/special-elements/element">&lt;svelte:element&gt;</a></li>
        <li><a href="/part2/special-elements/window">&lt;svelte:window&gt;</a></li>
        <li>
          <a href="/part2/special-elements/window-bindings">&lt;svelte:window&gt; bindings</a>
        </li>
        <li><a href="/part2/special-elements/body">&lt;svelte:body&gt;</a></li>
        <li><a href="/part2/special-elements/document">&lt;svelte:document&gt;</a></li>
        <li><a href="/part2/special-elements/head">&lt;svelte:head&gt;</a></li>
        <li><a href="/part2/special-elements/options">&lt;svelte:options&gt;</a></li>
        <li><a href="/part2/special-elements/fragment">&lt;svelte:fragment&gt;</a></li>
      </ul>
    </li>
    <li>
      <h3>Module context</h3>
      <ul>
        <li><a href="/part2/advanced-bindings/media-elements">Sharing code</a></li>
        <li><a href="/part2/advanced-bindings/media-elements">Exports</a></li>
      </ul>
    </li>
    <li>
      <h3>Miscellaneous</h3>
      <ul>
        <li><a href="/part2/miscellaneous">The @debug tag</a></li>
      </ul>
    </li>
    <li>
      <h3>Next steps</h3>
      <ul>
        <li><a href="/part2/next-steps">Congratulations!</a></li>
      </ul>
    </li>
  </ul>
  <br />
  <h2>Part3: Basic SvelteKit</h2>
  <ul class="contents">
    <li>
      <h3>Introduction</h3>
      <ul>
        <li><a href="/">What is SvelteKit?</a></li>
      </ul>
    </li>
    <li>
      <h3>Routing</h3>
      <ul>
        <li><a href="/part3/routing/about">Pages</a></li>
        <li><a href="/part3/routing/layouts">Layouts</a></li>
        <li><a href="/part3/routing/parameters">Route parameters</a></li>
      </ul>
    </li>
    <li>
      <h3>Loading data</h3>
      <ul>
        <li><a href="/part3/routing/parameters">Page data</a></li>
        <li><a href="/part3/routing/parameters">Layout data</a></li>
      </ul>
    </li>
    <li>
      <h3>Headers and cookies</h3>
      <ul>
        <li><a href="/part3/headers&cookies/setting-headers">Setting headers</a></li>
        <li><a href="/part3/headers&cookies/cookies">Reading and writing cookies</a></li>
      </ul>
    </li>
    <li>
      <h3>Shared modules</h3>
      <ul>
        <li><a href="/part3/shared_modules">The $lib alias</a></li>
      </ul>
    </li>
    <li>
      <h3>Forms</h3>
      <ul>
        <li><a href="/part3/forms/form-element">The &lt;form&gt; element</a></li>
        <li><a href="/part3/forms/form-element">Named form actions</a></li>
        <li><a href="/part3/forms/form-element">Validation</a></li>
        <li><a href="/part3/forms/progressive-enhancement">Progressive enhancement</a></li>
        <li><a href="/part3/forms/progressive-enhancement">Customizing use:enhance</a></li>
      </ul>
    </li>
    <li>
      <h3>API routes</h3>
      <ul>
        <li><a href="/part3/api-routes/get-handlers">GET handlers</a></li>
        <li><a href="/part3/api-routes/post-handlers">POST handlers</a></li>
        <li><a href="/part3/api-routes/post-handlers">Other handlers</a></li>
      </ul>
    </li>
    <li>
      <h3>Stores</h3>
      <ul>
        <li><a href="/part3/stores/page">page</a></li>
        <li><a href="/part3/stores/navigating">navigating</a></li>
        <li><a href="/part3/stores/updated">updated</a></li>
      </ul>
    </li>
    <li>
      <h3>Errors and redirects</h3>
      <ul>
        <li><a href="/part3/errors&redirects/basics">Basics</a></li>
        <li><a href="/part3/errors&redirects/basics">Error pages</a></li>
        <li><a href="/part3/errors&redirects/basics">Fallback errors</a></li>
        <li><a href="/part3/errors&redirects/redirects">Redirects</a></li>
      </ul>
    </li>
  </ul>
  <h2>Part4: Advanced SvelteKit</h2>
  <ul class="contents">
    <li>
      <h3>Hooks</h3>
      <ul>
        <li><a href="/part4/hooks/handle">handle</a></li>
        <li><a href="/part4/hooks/RequestEvent">The RequestEvent object</a></li>
      </ul>
    </li>
  </ul>  
</div>

<style>
  /* :global(body) {
    overflow: visible;
  } */

  .centered {
    display: flex;
    height: max-content;
    /* overflow: scroll; */
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 0.5em;
    max-width: 40em;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 20px;
  }

  .contents > li {
    margin: 0px 0px 20px 50px;
  }
</style>
