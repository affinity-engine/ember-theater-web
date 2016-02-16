## Scenes

The Director's job is to keep track of which scene is currently under way, and then to direct the provided `script`. You can generate new scenes by typing `ember g ember-theater-scene [scene-name]` in the command line. Scenes are kept in the folder `app/ember-theater/director/scenes`:

```js
// app/ember-theater/director/scenes/picnic-on-the-beach.js

import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'The Beach',

  script: async function() {
    // play the beach theme
    this.sound('beach-theme', { loop: true });
    // fadeIn the beach backdrop
    await this.backdrop('beach-day');
     // move Bebe onto the screen, 30% of the screen width from the left
    this.character('bebe', { left: '30%' }, { duration: 1000 });
     // move Blixie onto the screen, 30% of the screen width from the right
    this.character('blixie', { left: ['70%', '100%'] }, { duration: 1000 });
    // Bebe talks
    await this.text('bebe', 'It is so beautiful!');
    // Blixie responds
    await this.text('blixie', 'Uh-huh.');

    // transition to the next scene
    this.transitionToScene('director/scenes');
  }
});
```

In the `script` above, we see a series of `directions`, such as `sound`, `backdrop`, and `character`. Each of these `directions` will affect what's happening on stage, whether it's the beach scenery fading in or the music starting up.

You might notice that some of these `directions` take a single argument (such as `this.backdrop('beach');`), while others have two or even three (`this.character('blixie', { translateX: '70vw' }, { duration: 500 });`). In the following sections, we'll go into greater detail about how each of these `directions` works.

### Note on `await`

You might also notice that the script is littered with `await` statements. This experimental ES7 feature will pause the script until the following function has completed. For instance:

```js
await this.backdrop('beach');
this.character('bebe', { translateX: '30vw' }, { duration: 500 });
```

In this case, `this.character` will not trigger until after `this.backdrop` has finished fading in. If instead we saw:

```js
this.backdrop('beach');
this.character('bebe', { translateX: '30vw' }, { duration: 500 });
```

Then in the above case, the beach would fade in at the same time as the character.
