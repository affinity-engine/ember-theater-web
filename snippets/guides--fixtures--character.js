@property id {String} The id by which you will reference this character. Not necessarily the same as the character name.
@property name {String} The character name. It is to be used wherever the character is referenced to the user.
@property height {Number} The character height. What percentage of the screen height is fills.
@property defaultExpression {String} The id of the expression that this character will use by default.

Example:

// app/ember-theater/fixtures/character-expressions.js

export default [{
  id: 'bebe',
  name: 'Bebe',
  height: 60,
  defaultExpression: 'bebe--standing'
}, {
  id: 'blixie',
  name: 'Blixie',
  height: 80,
  defaultExpression: 'blixie--smirking'
}]
