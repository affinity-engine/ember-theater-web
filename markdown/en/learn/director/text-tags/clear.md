### `clear`

When the `clear` text tag is encountered, it clears all previous text and begins writing new text from the start of the line.

```js
script.text(`In just a moment, all this will disappear!!! ((#clear)) And this will appear!`);

script.text(`The clear text tag can be especially useful when combined with pause.
  ((#pause 1000)) ((#clear)) Since that gave the player a chance to read everything
  before the clear happened`);
```
