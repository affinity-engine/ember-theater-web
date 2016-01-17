@property id {String} The id by which you will reference this sound.
@property src {String} The path to the sound, relative to the `public` directory.

Example:

// app/ember-theater/fixtures/character-expressions.js

export default [{
  id: 'beach-theme',
  src: 'sounds/songs/beach.mp3'
}, {
  id: 'blixie-theme',
  src: 'sounds/songs/blixie.mp3'
}];
