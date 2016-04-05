### `Character(fixture)`

Renders a character on stage, using the transition effect/duration specified in your config or the provided fixture. Alternatively, you can chain commands off of it for a more specific effect.

```js
// renders the character fixture with the id of 'bitsy'
script.Character('bitsy');

// renders a character with the provided attributes
script.Character({ id: 'custom-character', height: 70, defaultExpression: 'an-expression-id' });
```

#### `position(position, duration, options)`

Sets the position of the character. Positions can be defined in your config. You can use the default positions out of the box. They're defined [here](https://github.com/ember-theater/ember-theater/blob/master/addon/ember-theater/config.js#L76).

The duration defaults to 0.

After converting the `position` to an object, the object, duration, and options are passed to `transition`. For details on how `transition` works, please refer to the next section.

```js
// bitsy appears at the center of the screen
const bitsy = await script.Character('bitsy').position('center');

// bitsy immediately transitions to the left side of the screen
await bitsy.position('left');

// bitsy takes 1000 milliseconds to transition to the right side of the screen
bitsy.position('right', 1000);
```

#### `transition(effect, duration, options)`

Cancels the default transition and executes a transition with the provided attributes. Multiple transitions can be chained together, and they'll perform sequentially.

The `effect` argument can be either a registered [UI-Pack effect](http://julian.com/research/velocity/#uiPack), or an object containing css attributes/values (`{ height: '40px', translateZ: '20vh' }`). If providing an object, you can optionally 'forcefeed' an initial value to its attributes like `{ opacity: [1, 0] }`. Regardless of its actual `opacity`, the animation will start at `0`. This is especially helpful when setting up your scene.

The `duration` should be in milliseconds.

The `options` object can set the `easing`, `loop`, or `delay` of the effect. For more info, read the options section of the Velocity.js docs [here](http://julian.com/research/velocity/#easing).

Note: If you aren't familiar with Velocity.js, you can learn all about it [here](http://julian.com/research/velocity). By default, it is the animation engine used by Ember Theater.

```js
// executes the ui-pack effect 'swoopIn'
const bitsy = script.Backdrop('bitsy').transition('transition.swoopIn');

// fades the character to an opacity of 0.75 over the default duration
bitsy.transition({ opacity: 0.75 });

// fades the character to an opacity of 1, then back to opacity 0.75
bitsy.transition({ opacity: 1 }).transition({ opacity: 0.75});

// fades the character to an opacity of 0.5 over 1000 milliseconds, aka 1 second
bitsy.transition({ opacity: 0.5 }, 1000);

// fades between opacity 0.5 and 1 for 5 iterations
bitsy.transition({ opacity: 1 }, 1000, { loop: 5 });

// skips to opacity 0.5, then fades to opacity 0.2
bitsy.transition({ opacity: [0.2, 0.5] });
```

#### `expression(idAliasOrFixture)`

Changes the character expression. You can provide an expression id, the expression alias defined on the character, or a simple fixture.

By default, it inserts the new expression and then fades the old one out, though this can be changed by providing options.

If `expression` is called before the character has rendered, then the transition will not be animated. Instead, the character will be rendered with that expression.

If `expression` is called between `transition` or `position`, it will not block subsequent `transitions`. Instead, it will happen simultaneously, as expressions happen in a seperate queue. To have it enter the queue with other transitions, provide the `queue` option set to `main`.

```js
// ember-theater/fixtures/characters.js
export default [{
  id: 'bitsy',
  name: 'Bitsy',
  height: 70,
  defaultExpression: 'neutral',
  expressions: {
    neutral: 'bebe-neutral',
    happy: 'bebe-happy',
    angry: 'bebe-angry'
  }
}];
```

```js
// cross-fades to the expression `bebe-happy`, as defined in `expressions`
const bitsy = script.Character('bitsy').position('center').expression('happy');

// cross-fades to the expression `bebe-angry`
bitsy.expression('bebe-angry');

// cross-fades to expression defined by the fixture
bitsy.expression({
  caption: 'Bitsy neutral',
  src: 'theater/characters/bitsy/neutral.png'
});

// uses custom animations to transition out the previous expression and
// transition in the new one
bitsy.expression('happy', {
  transitionIn: {
    duration: 1000,
    effect: 'transition.whirlIn'
  }, transitionOut: {
    duration: 1000,
    effect: 'transition.whirlOut'
  }
});

// bitsy moves left, then her expression transitions to angry as she moves right
bitsy.position('left').expression('angry').position('right');

// bitsy moves left, then her expression transitions to happy, then she moves right
bitsy.position('left').expression('happy', { queue: 'main' }).position('right');
```

#### `stop(queue)`

Stops any on-going animations. This is especially useful if you want to cancel a loop.

If you provide the name of a `queue`, it will stop only that `queue`.

```js
// slowly fades in a the character bitsy
const bitsy = script.Character('bitsy').transition('transition.fadeIn', 99999999999);

// stops the fade, freezing the character at her current opacity
bitsy.stop();

// infinitely loops between the default translateZ and '20vh'
bitsy.transition({ translateZ: '20vh' }, 500, { loop: true });

// stops the loop, freezing the character at her current translateZ
bitsy.stop();

// begins a transition on a separate queue called 'divergent'
bitsy.transition({ translateX: '20vw' }, 5000, { queue: 'divergent' });

// stops only the 'divergent' queue
bitsy.stop('divergent');
```

#### `name(text)`

Alters the name that appear in `Text` box. By default, a `Text` will use the name provided by the character fixture, but at times, you might want to replace it with an alternative.

In addition to text, you can provide a localization key for internationalized games.

```js
const bitsy = script.Character('bitsy');

// renders a text box with the name 'Bitsy', as specified in her fixture
await bitsy.Text('Uh. . . .');

// sets the character's name to 'Bitsy???'
bitsy.name('Bitsy???');

// renders a text box with the name 'Bitsy???'
await bitsy.Text('Who am I?');

// rends a text box with the name 'Bitsy!'
await bitsy.name('Bitsy!').Text('Oh, my name is Bitsy!');
```

#### `namePosition(namePosition)`

Lets you change where the character instance's name appear in a text box. Options are defined in the config under `positions`.

```js
const bitsy = script.Character('bitsy');

// renders a text box with the default classes
await bitsy.Text('Am I over here?');

// sets the text class name 'name' to et-right
bitsy.namePosition('right');

// renders a text box with the name in the right position
await bitsy.Text('Or over here?');
```
