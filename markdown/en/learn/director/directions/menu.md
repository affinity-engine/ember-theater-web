### `Menu(choices)`

Renders a menu with the provided `choices`. The `choices` must be an array of strings, objects, or a combination. If a string is provided, then the string will be presented as the text of the choice, and the key for the result will be the position of the choice in the array. If an object is provided, then its `key` and `text` attributes will be used.

```js
// presents three choices; if the user selects 'B', then `firstMenu` will be set to { result: { key: 1, text: 'B' } }
const FirstChoice = await script.Menu(['A', 'B', 'C']);
console.log(firstChoice.result.key); // 1
// same as above, only if the user selects 'B', then `secondMenu` will be set to { result: { key: 'customKey', text: 'B' } }
const secondChoice = await script.choice('Choose a letter', ['A', { text: 'B', key: 'customKey' }, 'C']);
console.log(secondChoice.result.key); // 'customKey'
// when inputable is set to true, then clicking 'B' will transform the button into an input field
// the result will contain both a `key` and an `input`
const secondChoice = await script.choice('Choose a letter', ['A', { text: 'B', inputable: true }, 'C']);
console.log(secondChoice.result.key); // 1
console.log(secondChoice.result.input); // 'the string that was entered into the input field'
```

#### `classNames(classNames)`

Applies the provided CSS class names to the menu. For examples and information on the built-in CSS classes, check out the [styling guide](/learn/director/styling/choice).

```js
// applies the `et-ember` decorative class
script.Menu(['A', 'B', 'C']).classNames('et-ember');
// applies the `et-block` structural class
script.Menu(['A', 'B', 'C']).classNames('et-block');
// applies the `et-ember` decorative class and the `et-block` structural class
script.Menu(['A', 'B', 'C']).classNames(['et-ember', 'et-block' ]);
```

#### `header(header)`

Precedes the menu with a header.

In addition to text, you can provide a localization key for internationalized games.

```js
// the menu is preceded with the header stating, 'What is your favorite letter?'
script.Menu(['A', 'B', 'C']).header('What is your favorite letter?');

// renders a localized header, eg:
// english: 'What is your favorite letter?'
// spanish: 'Cual es tu letra del alfabeto favorito?'
script.Menu(['A', 'B', 'C']).header('scenes.choice.header-example');
```

#### `keyboardPriority(keyboardPriority)`

Changes the priority at which this menu responds to key events. This could be useful if you have multiple directions present on the screen that can respond to key events, and you want the menu to have more or less priority than them. You can find out more about `keyboardPriority` in the `ember-keyboard` [documentation](https://github.com/null-null-null/ember-keyboard).

```js
script.Texxt('I will be here for awhile.')
// gives the menu a higher priority than the simultaneously rendered Text
script.Menu(['A', 'B', 'C']).keyboardPriority(1);
```

#### `keys(keys)`

Changes the key bindings for the menu. It expects the `keys` argument to be an object, defining `moveUp`, `moveDown`, and `cancel`.

```js
// applies custom key bindings
script.Menu(['A', 'B', 'C']).keys({ moveUp: ['ArrowUp', 'W'], moveDown: ['ArrowDown', 'S'], cancel: 'Escape' });
```

#### `transitionIn(effect, duration, options)`

Changes the animation the menu transitions onto the screen with.

The `effect` argument can be either a registered [UI-Pack effect](http://julian.com/research/velocity/#uiPack), or an object containing css attributes/values (`{ height: '40px', translateZ: '20vh' }`). If providing an object, you can optionally 'forcefeed' an initial value to its attributes like `{ opacity: [1, 0] }`. Regardless of its actual `opacity`, the animation will start at `0`. This is especially helpful when setting up your scene.

The `duration` should be in milliseconds.

The `options` object can set the `easing`, `loop`, or `delay` of the effect. For more info, read the options section of the Velocity.js docs [here](http://julian.com/research/velocity/#easing).

Note: If you aren't familiar with Velocity.js, you can learn all about it [here](http://julian.com/research/velocity). By default, it is the animation engine used by Ember Theater.

```js
// executes the ui-pack effect 'swoopIn'
script.Menu(['A', 'B', 'C']).transitionIn('transition.swoopIn');

// transitions in to an opacity of 0.75 over the default duration
script.Menu(['A', 'B', 'C']).transitionIn({ opacity: 0.75 });

// transitions in to an opacity of 0.75 over 1000 milliseconds, aka 1 second
script.Menu(['A', 'B', 'C']).transitionIn({ opacity: 0.75 }, 1000);

// fades between opacity 0.75 and 1 for 5 iterations
script.Menu(['A', 'B', 'C']).transitionIn({ opacity: 0.75 }, 1000, { loop: 5 });

// skips to opacity 0.5, then fades to opacity 0.2
script.Menu(['A', 'B', 'C']).transitionIn({ opacity: [0.2, 0.5] });
```

#### `transitionOut(effect, duration, options)`

Changes the animation the menu transitions off the screen with.

For more information, read about `transitionIn`.
