### `Expression(fixture, character)`

Alters the expression of the specific character to that of the provided fixture. Alternatively, you can pass in object with an `src` for the expression's image.

```js
const bitsy = script.Character('bitsy').position('center');

// changes the character's expression to that of the fixture `bitsy-happy`
bitsy.Expression('bitsy-happy');
// changes the character's expression to that of the provided object
bitsy.Expression({ caption: 'Bitsy happy', src: 'theater/characters/bitsy/happy.png' });

// alternatively, you can pass the character in a second argument to Expression
script.Expression('bitsy-sad', bitsy);
```

#### `transitionIn(effect, duration, options)`

Changes the animation the expression transitions onto the screen with.

The `effect` argument can be either a registered [UI-Pack effect](http://julian.com/research/velocity/#uiPack), or an object containing css attributes/values (`{ height: '40px', translateZ: '20vh' }`). If providing an object, you can optionally 'forcefeed' an initial value to its attributes like `{ opacity: [1, 0] }`. Regardless of its actual `opacity`, the animation will start at `0`. This is especially helpful when setting up your scene.

The `duration` should be in milliseconds.

The `options` object can set the `easing`, `loop`, or `delay` of the effect. For more info, read the options section of the Velocity.js docs [here](http://julian.com/research/velocity/#easing).

Note: If you aren't familiar with Velocity.js, you can learn all about it [here](http://julian.com/research/velocity). By default, it is the animation engine used by Ember Theater.

```js
const bitsy = script.Character('bitsy').position('center');

// executes the ui-pack effect 'swoopIn'
bitsy.Expression('bitsy-happy').transitionIn('transition.swoopIn');

// transitions in to an opacity of 0.75 over the default duration
bitsy.Expression('bitsy-sad').transitionIn({ opacity: 0.75 });

// transitions in to an opacity of 0.75 over 1000 milliseconds, aka 1 second
bitsy.Expression('bitsy-laughing').transitionIn({ opacity: 0.75 }, 1000);

// fades between opacity 0.75 and 1 for 5 iterations
bitsy.Expression('bitsy-blush').transitionIn({ opacity: 0.75 }, 1000, { loop: 5 });

// skips to opacity 0.5, then fades to opacity 0.2
bitsy.Expression('bitsy-angry').transitionIn({ opacity: [0.2, 0.5] });
```

#### `transitionOut(effect, duration, options)`

Changes the animation the expression transitions off the screen with.

For more information, read about `transitionIn`.
