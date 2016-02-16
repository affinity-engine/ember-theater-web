/*
  @property id {String} The id by which you'll reference this character. Not necessarily the same as the character's name.
  @property name {String} The character's name. It is to be used wherever the character is referenced to the user.
  @property height {Number} The character's height. What percentage of the screen height is fills.
  @property defaultExpressionId {String} The id of the expression that this character will use by default.

  Example:

  {
    id: 'steven',
    name: 'Steven',
    height: 60,
    defaultExpressionId: 'steven'
  }
*/

export default [{
  id: 'bebe',
  name: 'Bebe',
  height: 70,
  defaultExpressionId: 'bebe-neutral'
}, {
  id: 'blixie',
  name: 'Blixie',
  height: 90,
  defaultExpressionId: 'blixie-neutral'
}];
