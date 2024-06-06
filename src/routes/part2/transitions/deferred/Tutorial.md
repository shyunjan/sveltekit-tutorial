------
# **Deferred transitions**
A particularly powerful feature of Svelte's transition engine is the ability to _defer_ transitions, so that they can be coordinated between multiple elements.

Take this pair of todo lists, in which toggling a todo sends it to the opposite list. In the real world, objects don't behave like that — instead of disappearing and reappearing in another place, they move through a series of intermediate positions. Using motion can go a long way towards helping users understand what's happening in your app.

We can achieve this effect using the `crossfade` function, as seen in <code data-file="src/routes/part2/transitions/deferred/transition.js">transition.js</code>, which creates a pair of transitions called `send` and `receive`. When an element is 'sent', it looks for a corresponding element being 'received', and generates a transition that transforms the element to its counterpart's position and fades it out. When an element is 'received', the reverse happens. If there is no counterpart, the `fallback` transition is used.

Open <code data-file="src/routes/part2/transitions/deferred/TodoList.svelte">TodoList.svelte</code>. First, import the `send` and `receive` transitions from transition.js:
```svelte title="src/routes/part2/transitions/deferred/TodoList.svelte" "import { send, receive } from './transition.js';"
<script>
  import { send, receive } from './transition.js';

  export let store;
  export let done;
</script>
```
Then, add them to the `<li>` element, using the `todo.id` property as a key to match the elements:
```svelte title="src/routes/part2/transitions/deferred/TodoList.svelte" /in:receive={{ key: todo.id }}/ /out:send={{ key: todo.id }}/
<li
  class:done
  in:receive={{ key: todo.id }}
  out:send={{ key: todo.id }}
>
```
Now, when you toggle items, they move smoothly to their new location. The non-transitioning items still jump around awkwardly — we can fix that in the next chapter.

------
# **The animate directive**
In the previous chapter, we used deferred transitions to create the illusion of motion as elements move from one todo list to the other.

To complete the illusion, we also need to apply motion to the elements that _aren't_ transitioning. For this, we use the `animate` directive.

First, import the `flip` function — flip stands for ['First, Last, Invert, Play'](https://aerotwist.com/blog/flip-your-animations/) — from `svelte/animate` into <code data-file="src/routes/part2/transitions/deferred/TodoList.svelte">TodoList.svelte</code>:
```svelte title="src/routes/part2/transitions/deferred/TodoList.svelte" "import { flip } from 'svelte/animate';"
<script>
  import { send, receive } from './transition.js';
  import { flip } from 'svelte/animate';

  export let store;
  export let done;
</script>
```
Then add it to the `<li>` elements and The movement is a little slow in this case, so we can add a `duration` parameter:
```svelte title="src/routes/part2/transitions/deferred/TodoList.svelte" /animate:flip={{ duration: 200 }}/
<li
  class:done
  in:receive={{ key: todo.id }}
  out:send={{ key: todo.id }}
  animate:flip={{ duration: 200 }}
>
```
> `duration` can also be a `d => milliseconds` function, where `d` is the number of pixels the element has to travel

Note that all the transitions and animations are being applied with CSS, rather than JavaScript, meaning they won't block (or be blocked by) the main thread.

[Next: Actions](/part2/actions/use-directive)
