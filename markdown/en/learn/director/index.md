In theater, the director is responsible for translating a script into something the audience can appreciate: props and staging, lighting, music, character movement and dialogue. The same is true in Ember Theater. You (the game designer) write a script, and the Director is responsible for translating that script into an actual game. First, however, you must opt into using her:

```js
// app/ember-theater/config.js

export default {
  plugins: [
    'ember-theater/director'
  ],
  director: {
    initialSceneId: 'picnic-on-the-beach'
  }
};
```

You can configure a great deal about your game by setting the Director's config, but as an absolute minimum, you need to do two things. First, you need to tell the Producer to include her with: `plugins: ['ember-theater/director']`. Secondly, you need to provide an initial scene with `director: { initialSceneId: 'scene-id' }`. Whenever a player starts a game for the first time (or restarts a game they've been playing), the Director will refer back to this `initialScene` to figure out where to start. After that, she'll be able to navigate from scene to scene with the {{#link-to "learn.director.scene"}}`transitionToScene`{{/link-to}} direction.
