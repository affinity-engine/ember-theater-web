### `pause`

When the `pause` text tag is encountered, it pauses the text. As soon as the player presses a continue key (which ever keys they press to normally advance the text), text will resume printing. It optionally accepts a duration, after which the text will resume printing automatically.

```js
script.text(`This text appears normally. ((#pause)) This text won't appear until the player presses the continue key.`);

script.text(`((#pause 1000)) The pause will automatically resolve after 1000 milliseconds.
Alternatively, if the player presses the continue key, it'll resolve as normal.`);
```
