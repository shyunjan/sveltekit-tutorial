------
# **beforeUpdate and afterUpdate**
The `beforeUpdate` function schedules work to happen immediately before the DOM is updated. `afterUpdate` is its counterpart, used for running code once the DOM is in sync with your data.

Together, they're useful for doing things imperatively that are difficult to achieve in a purely state-driven way, like updating the scroll position of an element.

This [Eliza](https://en.wikipedia.org/wiki/ELIZA) chatbot is annoying to use, because you have to keep scrolling the chat window. Let's fix that.
```js title="src/routes/part1/lifecycle/beforeUpdate-afterUpdate/+page.svelte" /let autoscroll = false;/ {5-8, 12-14}
let div;
let autoscroll = false;

beforeUpdate(() => {
  if (div) {
    const scrollableDistance = div.scrollHeight - div.offsetHeight;
    autoscroll = div.scrollTop > scrollableDistance - 20;
  }
});

afterUpdate(() => {
  if (autoscroll) {
    div.scrollTo(0, div.scrollHeight);
  }
});
```
Note that `beforeUpdate` will first run before the component has mounted, so we need to check for the existence of `div` before reading its properties.

[Next: tick](/part1/lifecycle/tick)
