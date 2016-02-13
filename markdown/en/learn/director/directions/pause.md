### `pause`

```js
@return {Promise} Resolves when the duration has elapsed or one of the provided keys is pressed.
```

A `pause` momentarily disrupts the flow of the scene, preventing future directions from carrying out. Note that if a previous direction is in the process of playing out (such as a backdrop in the process of fading in), it will continue doing so.

```js
// pauses the scene for one second
await this.pause(1000);
// pauses the scene until the enter key or ctrl+shift+a is pressed
await this.pause('Enter', 'ctrl+shift+a');
// pauses the scene until the enter key or ctrl+shift+a is pressed, or until 1000 milliseconds pass--whichever comes first
await this.pause('Enter', 'ctrl+shift+a', 1000);
```
