## `sound`

```js
@param id {String} An id associated with an `ember-theater/sound`.
@param effect {String} |optional| An effect, including play, pause, stop, fadeIn, fadeOut, and fadeTo.
@param options {Object} |optional| Arguments you might want to pass to the effect.

@return {Promise} Resolves when the sound finishes playing.
```

Sounds can range from music to sound effects to voice-overs.

```js
await this.sound('phaser-shot'); // plays a phaser shot, resolving once the clip has completed

this.sound('beach-theme', 'fadeIn', { loop: true }); // fades in the beach theme, then loops
this.sound('beach-theme', 'pause'); // pauses the beach theme
this.sound('beach-theme', 'fadeOut', { duration: 1000 }); // fades out the theme over 1000 milliseconds
this.sound('beach-theme', 'fadeTo', { volume: 0.75 }); // fades to 75% volume
this.sound('beach-theme', 'stop'); // stops the beach theme
```

### Fixture/Config Attributes

```js
// app/ember-theater/fixtures/character-expressions.js

export default [{
  id: 'beach-theme',
  src: 'sounds/songs/beach.mp3'
}, {
  id: 'blixie-theme',
  src: 'sounds/songs/blixie.mp3'
}];
```
