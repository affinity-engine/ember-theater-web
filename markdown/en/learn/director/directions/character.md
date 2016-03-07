### `Character(fixture)`

Renders a character on stage, using the transition effect/duration specified in your config or the provided fixture. Alternatively, you can chain commands off of it for a more specific effect.

```js
// renders the character fixture with the id of 'bebe'
this.Character('bebe');

// renders a character with the provided attributes
this.Character({ id: 'custom-character', height: 70, defaultExpressionId: 'an-expression-id' });
```

#### `transition(effect, duration, options)`

Cancels the default transition and executes a transition with the provided attributes. Multiple transitions can be chained together, and they'll perform sequentially.

The `effect` argument can be either a registered [UI-Pack effect](http://julian.com/research/velocity/#uiPack), or an object containing css attributes/values (`{ height: '40px', translateZ: '20vh' }`). If providing an object, you can optionally 'forcefeed' an initial value to its attributes like `{ opacity: [1, 0] }`. Regardless of its actual `opacity`, the animation will start at `0`. This is especially helpful when setting up your scene.

The `duration` should be in milliseconds.

The `options` object can set the `easing`, `loop`, or `delay` of the effect. For more info, read the options section of the Velocity.js docs [here](http://julian.com/research/velocity/#easing).

Note: If you aren't familiar with Velocity.js, you can learn all about it [here](http://julian.com/research/velocity). By default, it is the animation engine used by Ember Theater.

```js
// executes the ui-pack effect 'swoopIn'
const bebe = this.Backdrop('bebe').transition('transition.swoopIn');

// fades the character to an opacity of 0.75 over the default duration
bebe.transition({ opacity: 0.75 });

// fades the character to an opacity of 1, then back to opacity 0.75
bebe.transition({ opacity: 1 }).transition({ opacity: 0.75});

// fades the character to an opacity of 0.5 over 1000 milliseconds, aka 1 second
bebe.transition({ opacity: 0.5 }, 1000);

// fades between opacity 0.5 and 1 for 5 iterations
bebe.transition({ opacity: 1 }, 1000, { loop: 5 });

// skips to opacity 0.5, then fades to opacity 0.2
bebe.transition({ opacity: [0.2, 0.5] });
```

#### `stop(queue)`

Stops any on-going animations. This is especially useful if you want to cancel a loop.

If you provide the name of a `queue`, it will stop only that `queue`.

```js
// slowly fades in a the character bebe
const bebe = this.Character('bebe').transition('transition.fadeIn', 99999999999);

// stops the fade, freezing the character at her current opacity
bebe.stop();

// infinitely loops between the default translateZ and '20vh'
bebe.transition({ translateZ: '20vh' }, 500, { loop: true });

// stops the loop, freezing the character at her current translateZ
bebe.stop();

// begins a transition on a separate queue called 'divergent'
bebe.transition({ translateX: '20vw' }, 5000, { queue: 'divergent' });

// stops only the 'divergent' queue
bebe.stop('divergent');
```

#### `name(text)`

Alters the name that appear in `Text` box. By default, a `Text` will use the name provided by the character fixture, but at times, you might want to replace it with an alternative.

In addition to text, you can provide a localization key for internationalized games.

```js
const bebe = this.Character('bebe');

// renders a text box with the name 'Bebe', as specified in her fixture
await bebe.Text('Uh. . . .');

// sets the character's name to 'Bebe???'
bebe.name('Bebe???');

// renders a text box with the name 'Bebe???'
await bebe.Text('Who am I?');

// rends a text box with the name 'Bebe!'
await bebe.name('Bebe!').Text('Oh, my name is Bebe!');
```

#### `namePosition(namePosition)`

Lets you change where the character instance's name appear in a text box. Options are defined in the config under `positions`.

```js
const bebe = this.Character('bebe');

// renders a text box with the default classes
await bebe.Text('Am I over here?');

// sets the text class name 'name' to et-right
bebe.namePosition('right');

// renders a text box with the name in the right position
await bebe.Text('Or over here?');
```
