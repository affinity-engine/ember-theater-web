## Scenes

The Director's job is to keep track of which scene is currently under way, and then to direct the provided `script`. You can generate new scenes by typing `ember g ember-theater-scene [scene-name]` in the command line. Scenes are kept in the folder `app/ember-theater/director/scripts`:

```js
// app/ember-theater/director/scenes/picnic-on-the-beach.js

import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'The Beach',

  script: async function() {
    this.sound('beach-theme', { loop: true }); // play the beach theme
    await this.backdrop('beach'); // fadeIn the beach backdrop
     // move Bebe onto the screen, 30% of the screen width from the left
    this.character('bebe', { translateX: '30vw' }, { duration: 500 });
     // move Blixie onto the screen, 30% of the screen width from the right
    this.character('blixie', { translateX: '70vw' }, { duration: 500 });
    await this.text('bebe', 'It is so beautiful!'); // Bebe talks
    await this.text('blixie', 'Uh-huh.'); // Blixie responds

    this.transitionToScene('back-home-from-the-beach');
  }
});
```

In the `script` above, we see a series of `directions`, such as `sound`, `backdrop`, and `character`. Each of these `directions` will affect what's happening on stage, whether it's the beach scene fading in or the music starting up.

You might notice that some of these `directions` take a single argument (such as `this.backdrop('beach');`), while others have two or even three (`this.character('blixie', { translateX: '70vw' }, { duration: 500 });`). In the following sections, we'll go into greater detail about how each of these `directions` works and what information it expects or can use.
