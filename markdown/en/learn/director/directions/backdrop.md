### `Backdrop(fixture)`

Renders a backdrop on stage, using the transition effect/duration specified in your config or the provided fixture. Alternatively, you can chain commands off of it for a more specific effect.

```js
// renders the backdrop fixture with the id of 'beach-day'
script.Backdrop('beach-day');

// renders a backdrop with the provided attributes
script.Backdrop({ id: 'custom-backdrop', src: 'route/to/my/custom.png' });
```

#### `transition(effect, duration, options)`

Cancels the default transition and executes a transition with the provided attributes. Multiple transitions can be chained together, and they'll perform sequentially.

The `effect` argument can be either a registered [UI-Pack effect](http://julian.com/research/velocity/#uiPack), or an object containing css attributes/values (`{ height: '40px', translateZ: '20vh' }`). If providing an object, you can optionally 'forcefeed' an initial value to its attributes like `{ opacity: [1, 0] }`. Regardless of its actual `opacity`, the animation will start at `0`. This is especially helpful when setting up your scene.

The `duration` should be in milliseconds.

The `options` object can set the `easing`, `loop`, or `delay` of the effect. For more info, read the options section of the Velocity.js docs [here](http://julian.com/research/velocity/#easing).

Note: If you aren't familiar with Velocity.js, you can learn all about it [here](http://julian.com/research/velocity). By default, it is the animation engine used by Ember Theater.

```js
// executes the ui-pack effect 'swoopIn'
const beach = script.Backdrop('beach-day').transition('transition.swoopIn');

// fades the backdrop to an opacity of 0.75 over the default duration
beach.transition({ opacity: 0.75 });

// fades the backdrop to an opacity of 1, then back to opacity 0.75
beach.transition({ opacity: 1 }).transition({ opacity: 0.75});

// fades the backdrop to an opacity of 0.5 over 1000 milliseconds, aka 1 second
beach.transition({ opacity: 0.5 }, 1000);

// fades between opacity 0.5 and 1 for 5 iterations
beach.transition({ opacity: 1 }, 1000, { loop: 5 });

// skips to opacity 0.5, then fades to opacity 0.2
beach.transition({ opacity: [0.2, 0.5] });
```

#### `stop(queue)`

Stops any on-going animations. This is especially useful if you want to cancel a loop.

If you provide the name of a `queue`, it will stop only that `queue`.

```js
// slowly fades in a beach backdrop
const beach = script.Backdrop('beach-day').transition('transition.fadeIn', 99999999999);

// stops the fade, freezing the backdrop at its current opacity
beach.stop();

// infinitely loops between the default translateZ and '20vh'
beach.transition({ translateZ: '20vh' }, 500, { loop: true });

// stops the loop, freezing the backdrop at its current translateZ
beach.stop();

// begins a transition on a separate queue called 'divergent'
beach.transition({ translateX: '20vw' }, 5000, { queue: 'divergent' });

// stops only the 'divergent' queue
beach.stop('divergent');
```

#### `caption(text)`

Alters the `alt` text on the backdrop `img`. By default, the `alt` will be set to the `caption` on the backdrop's fixture. The `caption` command will let you change the `alt` tag for this specific instance of the backdrop.

In addition to text, you can provide a localization key for internationalized games.

This functionality is particularly useful for screen-readers, and will provide players who are blind or visually impaired cues about backdrop transitions.

```js
// renders a beach with its fixture's caption, 'beach during the day'
const beach = script.Backdrop('beach-day');

// changes the alt text to 'earthquake on the beach!!!'
beach.caption('earthquake on the beach!!!');

// renders a new beach with the custom caption, 'fade into beach scene'
script.Backdrop('beach-day').caption('fade into beach scene');

// renders a localized caption, eg:
// english: 'day at the beach'
// spanish: 'día en la playa'
beach.caption('scenes.picnic-on-the-beach.backdrop-caption');
```
