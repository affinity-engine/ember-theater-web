### `choice`

```js
@param header {String} |optional| A prompt for the choices.
@param choices {Array} The options available to the user to choose from.
@param choices.[] {String,Object} Choices can be either a string or an object with the following attributes.
@param choices.text {String} The text to display to the user.
@param choices.key {String} The key you expect to get in the promise.
@param choices.inputable {Boolean} Whether or not the choice should transform into an input field on focus.
@param [options] {Object} |optional|
@param [options.instance] {Number} |default: 0| Which instance of the character you wish to alter.
@param [options.classNames] {Object} |optional|
@param [options.classNames.decorative] {Array} |optional| CSS decorative classes.
@param [options.classNames.structural] {Array} |optional| CSS structural classes.
@param [options.keys] {Object} |optional|
@param [options.keys.moveUp] {Array} |optional| Keys that move the focus up.
@param [options.keys.moveDown] {Array} |optional| Keys that move the focus down.
@param [options.keys.cancel] {Array} |optional| Keys that cancel an inputable choice.
@param [options.transitionIn] {Object} |optional|
@param [options.transitionIn.effect] {Object} |default: <set in config>| The effect to use while transitioning in.
@param [options.transitionIn.duration] {Number} |default: <set in config>| The duration of the transition in effect.
@param [options.transitionOut] {Object} |optional|
@param [options.transitionOut.effect] {Object} |default: <set in config>| The effect to use while transitioning out.
@param [options.transitionOut.duration] {Number} |default: <set in config>| The duration of the transition out effect.
@param [options.transitionDuration] {Number} |default: <set in config>| Sets the duration of both the transition in and out effect.

@return {Promise} Resolves when a choice has been selected, passing an object with format { key, text, input }
```

Throughout the game, you might want to present the player with menu-style choices. These choices could range from responses in conversation to multiple choice list of destinations at a bus stop. The `choice` direction presents players with a list of choices and returns a promise containing the value of their choice. The list of choices can be navigated with `ArrowUp` and `ArrowDown` keys, and some choices can be made inputable, so that when they are clicked, they transform into input fields.

```js
// presents three choices; if the user selects 'B', then the promise will return { key: 1, text: 'B' }
const firstChoice = await this.choice(['A', 'B', 'C']);
// same as above, only with a header
const secondChoice = await this.choice('Choose a letter', ['A', 'B', 'C']);
// same as above, only if the user selects 'B', then the promise will return { key: 'customKey', text: 'B' }
const thirdChoice = await this.choice('Choose a letter', ['A', { text: 'B', key: 'customKey' }, 'C']);
// a choice with custom key bindings
const fourthChoice = await this.choice(['Okay', 'Cancel'], { keys: { moveUp: ['a'], moveDown: ['s'] } });
// if the user selects the third option, it will become an input field; if they enter 'Garnet', then the promise will return { key: 2, text: 'Custom', input: 'Garnet' }
const fifthChoice = await this.choice('What is your name?', ['Bebe', 'Blixie', { text: 'Custom', inputable: true }]);
```

#### Fixture/Config Attributes

```js
// app/ember-theater/config.js

export default {
  globals: {
    classNames: {
      decorative: ['et-paper'],
      structural: ['et-block']
    },
    transitionDuration: 1000,
    keys: {
      up: ['ArrowUp', 'w'],
      down: ['ArrowDown', 's'],
      cancel: ['Escape']
    },
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    },
    transitionOut: {
      effect: { opacity: 1 },
      duration: 1000
    }
  },
  choice: {
    classNames: {
      decorative: ['et-paper'],
      structural: ['et-block']
    },
    transitionDuration: 1000,
    keys: {
      up: ['ArrowUp', 'w'],
      down: ['ArrowDown', 's'],
      cancel: ['Escape']
    },
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    },
    transitionOut: {
      effect: { opacity: 1 },
      duration: 1000
    }
  }
};
```
