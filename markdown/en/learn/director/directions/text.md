### `text`

```js
@param characterId {String} |optional| An id corresponding to an `ember-theater/character`.
@param text {String} The text that will appear in the text box.
@param [options] {Object} |optional|
@param [options.instance] {Number} |default: 0| Which instance of the character you wish to alter.
@param [options.instant] {Boolean} |optional| If true, text will appear immediately rather than written out letter by letter.
@param [options.scrollable] {Boolean} |optional| If true, text can be scrolled using the mouse wheel and arrow keys.
@param [options.name] {String} |optional| Overrides the character name, if present.
@param [options.textAnimation] {Object} |optional| The effect applied to the text as it fades in.
@param [options.textSpeed] {Number} |optional| The number of characters written each second.
@param [options.classNames] {Object} |optional|
@param [options.classNames.decorative] {Array} |optional| CSS decorative classes.
@param [options.classNames.structural] {Array} |optional| CSS structural classes.
@param [options.keys] {Object} |optional|
@param [options.keys.accept] {Array} |optional| Keys that, when pressed, will advance the text.
@param [options.transitionIn] {Object} |optional|
@param [options.transitionIn.effect] {Object} |default: <set in config>| The effect to use while transitioning in.
@param [options.transitionIn.duration] {Number} |default: <set in config>| The duration of the transition in effect.
@param [options.transitionOut] {Object} |optional|
@param [options.transitionOut.effect] {Object} |default: <set in config>| The effect to use while transitioning out.
@param [options.transitionOut.duration] {Number} |default: <set in config>| The duration of the transition out effect.
@param [options.transitionDuration] {Number} |default: <set in config>| Sets the duration of both the transition in and out effect.
@param [options.duration] {Number} If set, will automatically close the text after the allotted time.

@return {Promise} Resolves when the text has been displayed in full and a key is pressed.
```

Characters speak and narrators narrate. In either case, words need to be written on screen. The `text` direction does just this. By default, the text fades in letter-by-letter, and if the text overflows the text window, it will stop writing until a key is pressed, then proceed from that point. The name of the character appears in the window alongside her text.

Note that you can use html tags to format your text for styling, external links, or any other form of valid html.

```js
// displays text with no name
await this.text('Hello world');
// displays text along with the name of the character model (note, this is not necessarily 'Bebe')
await this.text('bebe', 'Hello, my name is Steven.');
// displays text with no name at a really slow rate of 2 characters a second
await this.text('Hello again, world', { textSpeed: 50 });
// displays text along with the name Mystery Girl
await this.text('bebe', 'I am a mystery. . . .', { name: 'Mystery Girl' });
// uses several html tags
await this.text('I am <strong>bold</strong> and I am <span style="color: purple;">purple</span> and you can <a href="http://www.google.com">google</a> me.');
```

There are also many special text commands documented in the "Text Tags" section, which can allow you to change the speed of your text, alter its styling, and execute many other effects.

#### Fixture/Config Attributes

```js
// app/ember-theater/fixtures/characters.js

export default [{
  id: 'bebe',
  name: 'Bebe',

  classNames: {
    decorative: ['et-paper'],
    structural: ['et-block']
  },
  transitionDuration: 1000,
  transitionIn: {
    effect: { opacity: 1 },
    duration: 1000
  },
  transitionOut: {
    effect: { opacity: 1 },
    duration: 1000
  }
}];

// app/ember-theater/config.js

export default {
  globals: {
    classNames: {
      decorative: ['et-paper'],
      structural: ['et-block']
    },
    transitionDuration: 1000,
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    },
    transitionOut: {
      effect: { opacity: 1 },
      duration: 1000
    }
  },
  text: {
    classNames: {
      decorative: ['et-paper'],
      structural: ['et-block']
    },
    transitionDuration: 1000,
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
