### `transitionToScene`

```js
@param sceneId {String} An id associated with an `ember-theater/scene`.
@param [options] {Object} |optional|
@param [options.autosave] {Boolean} |optional| |default: true| When true, overwrites the autosave upon the start of the scene.
@param [options.transitionOut] {Object} |optional|
@param [options.transitionOut.duration] {Number} |optional| |default: <set in config>| How long the transition out takes.
@param [options.transitionOut.effect] {Object} |optional| |default: { opacity: 0 }| CSS attributes and values.
```

A scene could be anything from a conversation on the beach to visiting the store to a random battle. Scenes can be reusable or one-shots. To move from one scene to another, use the `transitionToScene` direction. Note that as soon as the scene transitions, all subsequent directions in the current scene will be aborted

```js
if (goingToTheBeach) {
  // transitions to the beach scene
  this.transitionToScene('beach');
} else {
  // transition to the secret-menu scene, but do not autosave in the process
  this.transitionToScene('secret-menu', { autosave: false });
}
```
