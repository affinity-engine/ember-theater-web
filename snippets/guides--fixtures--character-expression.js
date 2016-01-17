@property id {String} The id by which you will reference this expression.
@property caption {String} The alt text that will appear for this image. Primarily used for accessability.
@property src {String} The path to the image, relative to the `public` directory.

Example:

// app/ember-theater/fixtures/character-expressions.js

export default [{
  id: 'bebe--standing',
  caption: 'Bebe standing',
  src: 'images/expressions/bebe.png'
}, {
  id: 'bebe--jumping',
  caption: 'Bebe jumping',
  src: 'images/expressions/bebe--jumping.png'
}]
