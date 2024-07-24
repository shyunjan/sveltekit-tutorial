------
# **Component events**
Components can also dispatch events. To do so, they must create an event dispatcher. Update <code data-file="src/routes/part1/events/component-events/Inner.svelte">Inner.svelte</code>:
```svelte title="src/routes/part1/events/component-events/Inner.svelte" {2} /const dispatch = createEventDispatcher();/
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('message', {
      text: 'Hello!'
    });
  }
</script>
```
> `createEventDispatcher` must be called when the component is first instantiated — you can't do it later inside e.g. a `setTimeout` callback. This links `dispatch` to the component instance.

Then, add an `on:message` handler in <code data-file="src/routes/part1/events/component-events/+page.svelte">App.svelte</code>:
```svelte title="src/routes/part1/events/component-events/+page.svelte" /on:message={handleMessage}/
<Inner on:message={handleMessage} />
```
> You can also try changing the event name to something else. For instance, change `dispatch('message', {...})` to `dispatch('greet', {...})` in <code data-file="src/routes/part1/events/component-events/Inner.svelte">Inner.svelte</code> and change the attribute name from `on:message` to `on:greet` in <code data-file="src/routes/part1/events/component-events/+page.svelte">App.svelte</code>.

------
# **Event forwarding**
Unlike DOM events, component events don't _bubble_. If you want to listen to an event on some deeply nested component, the intermediate components must _forward_ the event.

In this case, we have the same <code data-file="src/routes/part1/events/component-events/+page.svelte">App.svelte</code> and <code data-file="src/routes/part1/events/component-events/Inner.svelte">Inner.svelte</code> as in the previous chapter(**Component events**), but there's now an <code data-file="src/routes/part1/events/component-events/Outer.svelte">Outer.svelte</code> component that contains `<Inner/>`.

An `on:message` event directive without a value means 'forward all `message` events'.
```svelte title="src/routes/part1/events/component-events/Outer.svelte" /on:message/
<script>
  import Inner from './Inner.svelte';
</script>

<Inner on:message />
```

[Next: DOM event forwarding](/part1/events/dom-event-forwarding)
