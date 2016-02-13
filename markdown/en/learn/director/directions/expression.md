### `expression`

```js
@param characterId {String} An id corresponding to an `ember-theater/character`.
@param expressionId {String} An id corresponding to an `ember-theater/expression`.
@param [options] {Object} |optional|
@param [options.transitionIn] {Object} |optional| Instructs the transition-in effect.
@param [options.transitionIn.effect] {Object} |default: { opacity: 1 }| The transition-in effect.
@param [options.transitionIn.duration] {Number} |default: <set in config>| How long the transition-in effect takes to resolve.
@param [options.transitionOut] {Object} |optional| Instructs the transition-out effect.
@param [options.transitionOut.effect] {Object} |default: { opacity: 0 }| The transition-out effect.
@param [options.transitionOut.duration] {Number} |default: <set in config>| How long the transition-out effect takes to resolve.

@return {Promise} Resolves when the transition-in effect has completed.
```

Characters might have many different expressions, ranging from neutral to happy to jumping to wounded. Once the character is on stage, you can also change her expression with the `expression` direction. By default, the old expression will fade out while the new one fades in over it. You can change this effect by passing in custom `transitionIn` and `transitionOut` options.

```js
// first, bring the character in with her defaultExpression
await this.character('bebe');
// change Bebe's expression from the defaultExpression to `happy`, using the default transitionIn and transitionOut
await this.expression('bebe', 'happy');
// change Bebe's expression from `happy` to `sad`, using the default transitionOut but a custom transitionIn that drops the new expression in from the top of the screen to the current location
await this.expression('bebe', 'sad', { transitionIn: { effect: { transitionY: ['100vh', '0vh'] }, duration: 1000 } });
// change Bebe's expression from `sad` to `happy`, using both a custom transitionIn and transitionOut
this.expression('bebe', 'happy', { transitionIn: { effect: { opacity: 1 } }, transitionOut: { effect: { transitionY: '-100vh' } } });
```

#### Fixture/Config Attributes

```js
// app/ember-theater/fixtures/character-expressions.js

export default [{
  id: 'bebe--standing',
  caption: 'Bebe standing',
  src: 'images/expressions/bebe.png'
}, {
  id: 'bebe--jumping',
  caption: 'Bebe jumping',
  src: 'images/expressions/bebe--jumping.png'
}];
```
