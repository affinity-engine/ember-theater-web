### `effect`

When the `effect` text tag is encountered, it applies an animation to the text box. Note that it accepts two arguments. The first is the effect itself, while the second are options, such as duration and loop. These arguments are seperated with a pipe, `|`.

```js
this.text(`This text box will soon be rumbling. ((#effect { rotateZ: 2.5 } | { duration: 100, loop: true }))`);

this.text(`This text will change color. ((#effect { background-color: 'purple' } | { duration: 100 }))
  And then it'll change ((#effect { background-color: 'red' })) again!!!`);
```
