### `Layer(layerPath)`

Specifies a layer to alter.

#### `transition(effect, duration, options)`

Executes a transition with the provided attributes. Multiple transitions can be chained together, and they'll perform sequentially.

The `effect` argument can be either a registered [UI-Pack effect](http://julian.com/research/velocity/#uiPack), or an object containing css attributes/values (`{ height: '40px', translateZ: '20vh' }`). If providing an object, you can optionally 'forcefeed' an initial value to its attributes like `{ opacity: [1, 0] }`. Regardless of its actual `opacity`, the animation will start at `0`. This is especially helpful when setting up your scene.

The `duration` should be in milliseconds.

The `options` object can set the `easing`, `loop`, or `delay` of the effect. For more info, read the options section of the Velocity.js docs [here](http://julian.com/research/velocity/#easing).

Note: If you aren't familiar with Velocity.js, you can learn all about it [here](http://julian.com/research/velocity). By default, it is the animation engine used by Ember Theater.

```js
// executes the ui-pack effect 'swoopIn'
const foregorund = script.Layer('theater.stage.foreground').transition('transition.swoopIn');

// fades the layer to an opacity of 0.75 over the default duration
foregorund.transition({ opacity: 0.75 });

// fades the layer to an opacity of 1, then back to opacity 0.75
foregorund.transition({ opacity: 1 }).transition({ opacity: 0.75});

// fades the layer to an opacity of 0.5 over 1000 milliseconds, aka 1 second
foregorund.transition({ opacity: 0.5 }, 1000);

// fades between opacity 0.5 and 1 for 5 iterations
foregorund.transition({ opacity: 1 }, 1000, { loop: 5 });

// skips to opacity 0.5, then fades to opacity 0.2
foregorund.transition({ opacity: [0.2, 0.5] });
```
