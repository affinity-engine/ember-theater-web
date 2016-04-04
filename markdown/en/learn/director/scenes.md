## Scenes

The director's job is to keep track of which scene is currently under way, and then to direct the provided `script`. You can generate new scenes by typing `ember g ember-theater-scene [scene-name]` in the command line. Scenes are kept in the folder `app/ember-theater/director/scenes`:

```js
// app/ember-theater/director/scenes/picnic-on-the-beach.js

import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'The Beach',

  start: async function(script) {
    // play the beach theme
    script.Sound('beach-theme').loop();
    // fadeIn the beach backdrop
    await script.Backdrop('beach-day');
     // move Bitsy onto the screen, 30% of the screen width from the left
    const bitsy = script.Character('bitsy').position('left');
     // move Emma onto the screen, 30% of the screen width from the right
    const emma = script.Character('emma').position('right');
    // Bitsy talks
    await bitsy.Text('It is so beautiful!');
    // Emma responds
    await emma.Text('Uh-huh.');

    // transition to the next scene
    script.TransitionToScene('director/scenes');
  }
});
```

The `director` will execute the scene's `start` function. In this one, we see a series of `directions`, such as `Sound`, `Backdrop`, and `Character`. Each of these `directions` will affect what's happening on stage, whether it's the beach scenery fading in or the music starting up.

### Note on `await`

You might also notice that the script is littered with `await` statements. This experimental ES7 feature will pause the script until the function has completed. For instance:

```js
await script.Backdrop('beach');
script.Character('bitsy').position('left');
```

In this case, `script.Character` will not trigger until after `script.Backdrop` has finished fading in. If instead we saw:

```js
script.Backdrop('beach');
script.Character('bitsy').position('left');
```

Then in the above case, the beach would fade in at the same time as the character.
