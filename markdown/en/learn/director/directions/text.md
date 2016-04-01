### `Text(text, character)`

Renders text. If a character is provided, then the text will be formatted to their style and present their name.

```js
// renders text
script.Text('And the play started!');

const bitsy = script.Character('bitsy').position('center');

// renders text styled for bitsy and showing her name
bitsy.Text('Hello!');
```

#### `classNames(classNames)`

Applies the provided CSS class names. The `classNames` must be provided as an object, defining either `decoractive` or `structural` class names. For examples and information on the built-in CSS classes, check out the [styling guide](/learn/director/styling/text).

```js
// applies the `et-ember` decorative class, while still using the default `structural` class
script.Text('Hello!').classNames({ decorative: 'et-ember' });
// applies the `et-block` structural class, while still using the default `decorative` class
script.Text('Hello!').classNames({ structural: 'et-block' });
// applies the `et-ember` decorative class and the `et-block` structural class
script.Text('Hello!').classNames({ decorative: 'et-ember', structural: 'et-block' });
```

#### `instant`

By default, text appears one character at a time. By setting `instant`, text will appear instantly.

```js
script.Text('I will fade in one character at a time.');
script.Text('I will appear all at once!').instant();
```

#### `keyboardPriority(keyboardPriority)`

Changes the priority at which this text responds to key events. This could be useful if you have multiple directions present on the screen that can respond to key events, and you want the text to have more or less priority than them. You can find out more about `keyboardPriority` in the `ember-keyboard` [documentation](https://github.com/null-null-null/ember-keyboard).

```js
script.Text('I will not respond until the other text closes.')

script.Text('I will respond first').keyboardPriority(1);
script.Text('I will respond at the same time as the text above me.').keyboardPriority(1);
```

#### `keys(keys)`

Changes the key bindings for the text.

```js
// applies custom key bindings
script.Text('Hello!').keys(['Enter', 'a']);
```

#### `scrollable`

By default, text appears one frame at a time. This allows the user to scroll through the text. Works best with `instant`.

```js
script.Text('I will appear one frame at a time.');
script.Text('You can scroll through me!').scrollable().instant();
```

#### `transitionIn(effect, duration, options)`

Changes the animation the text transitions onto the screen with.

The `effect` argument can be either a registered [UI-Pack effect](http://julian.com/research/velocity/#uiPack), or an object containing css attributes/values (`{ height: '40px', translateZ: '20vh' }`). If providing an object, you can optionally 'forcefeed' an initial value to its attributes like `{ opacity: [1, 0] }`. Regardless of its actual `opacity`, the animation will start at `0`. This is especially helpful when setting up your scene.

The `duration` should be in milliseconds.

The `options` object can set the `easing`, `loop`, or `delay` of the effect. For more info, read the options section of the Velocity.js docs [here](http://julian.com/research/velocity/#easing).

Note: If you aren't familiar with Velocity.js, you can learn all about it [here](http://julian.com/research/velocity). By default, it is the animation engine used by Ember Theater.

```js
// executes the ui-pack effect 'swoopIn'
script.Text('Hello!').transitionIn('transition.swoopIn');

// transitions in to an opacity of 0.75 over the default duration
script.Text('Hello!').transitionIn({ opacity: 0.75 });

// transitions in to an opacity of 0.75 over 1000 milliseconds, aka 1 second
script.Text('Hello!').transitionIn({ opacity: 0.75 }, 1000);

// fades between opacity 0.75 and 1 for 5 iterations
script.Text('Hello!')).transitionIn({ opacity: 0.75 }, 1000, { loop: 5 });

// skips to opacity 0.5, then fades to opacity 0.2
script.Text('Hello!').transitionIn({ opacity: [0.2, 0.5] });
```

#### `transitionOut(effect, duration, options)`

Changes the animation the text transitions off the screen with.

For more information, read about `transitionIn`.

#### `textSpeed(speed)`

Changes the speed at which characters fade in. The provided number is how many characters fade in per second.

```js
// characters fade in one character per second, meaning this
// text will take three seconds to complete
script.Text('Hi!').textSpeed(1);

// characters fade in three characters per second, meaning this
// text will take one second to complete
script.Text('Hi!').textSpeed(3);

// characters fade in six characters per second, meaning this
// text will take half a second to complete
script.Text('Hi!').textSpeed(6);
```

#### `textTransition(textTransition)`

By default, as text fades in one character at a time, it applies a slight animation moving it from the top right. By changing the `textTransition`, you can change this effect.

```js
script.Text('Hello!').textTransition({ top: '10px', left: '-5%' });
```

#### `textTransitionRate(textTransitionRate)`

Changes the rate at which the text transitions in, by multiplying the provided rate by the `textSpeed`.

```js
// 10 characters appear per second, each one taking 50 milliseconds to transition in (10 * 5)
script.Text('Hello!').textSpeed(10).textTransitionRate(5);
// 20 characters appear per second, each one taking 10 milliseconds to transition in (20 * 0.5)
script.Text('Hello!').textSpeed(20).textTransitionRate(0.5);
```
