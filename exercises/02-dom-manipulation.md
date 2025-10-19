# 02 — DOM manipulation

Goal: Practice selecting and updating DOM elements.

Tasks
1. Create a function updateCounter(selector) that finds an element by selector and increments its numeric content by 1 each time it's called.
2. If the element does not contain a number, set it to 1.

Example
```html
<span id="counter">0</span>
<script>
  updateCounter('#counter'); // now shows 1
</script>
```
