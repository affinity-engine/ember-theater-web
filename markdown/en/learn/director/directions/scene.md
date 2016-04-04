### `Scene(sceneId)`

Transitions to the current scene window to the provided scene. Alternatively, you can provide a callback, which will receive the normal arguments for a `scene`, including `script`, and `window`. Note that callbacks will not be recorded and the game cannot be saved while they are executing.

```js
// provide a scene id
script.Scene('beach');

// provide a callback
script.Scene(this.myCallback);
```

#### `autosave(autosave)`

If true, the game will autosave when transitioning into the scene.

```js
// will autosave
script.Scene('beach').autosave();
// will not autosave
script.Scene('beach').autosave(false);
```

#### `window(windowId)`

Rather than transitioning into the current window, the scene will transition into another scene window. If a window with the provided `windowId` is not presently open, a new window will be created with that id.

```js
script.Scene('beach').window('childWindow');
```

#### `classNames(classNames)`

Applies to the provided `classNames` to the scene window. For examples and information on the built-in CSS classes, check out the [styling guide](/learn/director/styling/scene)

```js
script.Scene('beach').window('childWindow').classNames('et-center');
```

#### `close()`

Closes the scene window.

```js
window.close();
```

#### `priority(priority)`

The z-index of the scene window. Scene windows with a higher priority will appear on top of scene windows with a lower priority.

```js
script.Scene('beach').window('windowOnTop').priority(2);

script.Scene('beach').window('windowOnBottom').priority(1);
```

#### `screen(screen)`

Fills the area behind the scene window with an unclickable screen. This can be styled, but more conveniently, it prevents interaction with the windows below.

```js
// turn screen on
const screen = script.Scene('beach').window('childWindow').screen();

// turn off screen
window.screen(false);
```

#### `transitionIn(effect, duration, options)`

Changes the animation the scene transitions onto the screen with.

The `effect` argument can be either a registered [UI-Pack effect](http://julian.com/research/velocity/#uiPack), or an object containing css attributes/values (`{ height: '40px', translateZ: '20vh' }`). If providing an object, you can optionally 'forcefeed' an initial value to its attributes like `{ opacity: [1, 0] }`. Regardless of its actual `opacity`, the animation will start at `0`. This is especially helpful when setting up your scene.

The `duration` should be in milliseconds.

The `options` object can set the `easing`, `loop`, or `delay` of the effect. For more info, read the options section of the Velocity.js docs [here](http://julian.com/research/velocity/#easing).

Note: If you aren't familiar with Velocity.js, you can learn all about it [here](http://julian.com/research/velocity). By default, it is the animation engine used by Ember Theater.

```js
// executes the ui-pack effect 'swoopIn'
script.Scene('beach').window('childWindow').transitionIn('transition.swoopIn');

// transitions in to an opacity of 0.75 over the default duration
script.Scene('beach').window('childWindow').transitionIn({ opacity: 0.75 });

// transitions in to an opacity of 0.75 over 1000 milliseconds, aka 1 second
script.Scene('beach').window('childWindow').transitionIn({ opacity: 0.75 }, 1000);

// fades between opacity 0.75 and 1 for 5 iterations
script.Scene('beach')).window('childWindow').transitionIn({ opacity: 0.75 }, 1000, { loop: 5 });

// skips to opacity 0.5, then fades to opacity 0.2
script.Scene('beach').window('childWindow').transitionIn({ opacity: [0.2, 0.5] });
```

#### `transitionOut(effect, duration, options)`

Changes the animation the scene transitions off the screen with.

For more information, read about `transitionIn`.
