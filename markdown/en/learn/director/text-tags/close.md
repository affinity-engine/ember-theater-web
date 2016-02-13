### `close`

When the `close` text tag is encountered, it closes the text. By default, it closes immediately. You can also pass in a duration that it'll wait before closing.

```js
this.text(`I'm gonna close now! ((#close)) And this text will never be displayed!`);

this.text(`This is a useful way to auto-terminate text. ((#close 1000))`)
```
