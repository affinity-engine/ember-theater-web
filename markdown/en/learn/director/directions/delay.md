### `Delay(...arguments)`

Momentarily disrupts the flow of the scene, preventing future directions from carrying out. It can receive an indefinite number of arguments, including both a time in milliseconds and keys that will break the pause.

Note that if a previous direction is in the process of playing out (such as a backdrop in the process of fading in), it will continue doing so.

```js
// pauses the scene for one second
await script.Delay(1000);
// pauses the scene until the enter key or ctrl+shift+a is pressed
await script.Delay('Enter', 'ctrl+shift+a');
// pauses the scene until the enter key or ctrl+shift+a is pressed, or until 1000 milliseconds pass--whichever comes first
await script.Delay('Enter', 'ctrl+shift+a', 1000);
```
