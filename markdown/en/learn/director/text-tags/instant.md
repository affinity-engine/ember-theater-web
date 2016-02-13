### `instant`

When the `instant` text tag is encountered, it immediately displays all the following text. (No more fade-in, letter-by-letter.) You can optionally provide a closing tag, which will cause text to resume its default fade-in behavior.

```js
this.text(`This text is fading in letter-by-letter. ((#instant)) This text appears immediately.`);

this.text(`((#instant)) This text appear immediately. ((/instant)) This text appears letter-by-letter.`);
```
