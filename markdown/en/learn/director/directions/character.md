### `character`

```js
@param id {String,Object} An id corresponding to an `ember-theater/character` or an object containing both a character id and an expression id.
@param effect {Object} |optional| |default: { opacity: 1 }| CSS attributes and values.
@param [options] {Object} |optional|
@param [options.instance] {Number} |default: 0| Which instance of the character you wish to alter.
@param [options.duration] {Number} |default: <set in config>| How long the effect takes to resolve.
@param [options.height] {Number} |default: <set in fixture>| The character height. What percentage of the screen height is fills.

@return {Promise} Resolves when the effect has completed.
```

Characters bring a play to life, and in Ember Theater, they have many of the same qualities of an actor. They can speak, position themselves on stage, change their expression, and exit when their role is done. A character is an on-screen representation of a character fixture. By default, the `character` direction fades the character into the bottom left corner. If a character with the provided id is already present, the direction will change that character's positioning as specified. As with other on-stage element, a single character can appear multiple times if you provide an instance id.

```js
// fades to full opacity and moves the character to the horizontal center of the screen
this.character('bebe', { translateX: '50vw', opacity: 1 }, { duration: 1000 });
// fades to full opacity and moves the character to the horizontal center,
// starting from the bottom right of the screen
this.character('blixie', { translateX: ['100vw', '50vw'], opacity: 1 }, { duration: 1000 });
// fades to full opacity over 1 second, remaining in the bottom left corner of the screen
this.character('bly', { duration: 2000 });
// fades to full opacity over the default transition duration, remaining in the bottom left
await this.character('bly');
// fades out the character bly
this.character('bly', { opacity: 0 });
// fades to full opacity over the default transition duration, using bliz's annoyed expression
this.character({ id: 'bliz', expression: 'annoyed' });
```

#### Fixture/Config Attributes

```js
// app/ember-theater/fixtures/characters.js

// Note: a defaultExpressionId is required if you want to use the `character` direction.

export default [{
  id: 'bebe',
  height: 60,
  defaultExpressionId: 'bebe--standing'
}, {
  id: 'blixie',
  height: 80,
  defaultExpressionId: 'blixie--smirking'
}];

// app/ember-theater/config.js

export default {
  globals: {
    height: 60,
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    }
  },
  character: {
    height: 60,
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    }
  }
};
```
