In theater, the director is responsible for translating a script into something the audience can appreciate: props and staging, lighting, music, character movement and dialogue. The same is true in Ember Theater. You (the game designer) write a script, and the Director is responsible for translating that script into an actual game. First, however, you must opt into using her:

```js
// app/ember-theater/config.js

export default {
  producer: {
    components: [
      'ember-theater/director'
    ]
  },
  director: {
    initialScene: 'picnic-on-the-beach'
  }
};
```

You can configure a great deal about your game by setting the Director's config, but as an absolute minimum, you need to do two things. First, you need to tell the Producer to include her with: `producer: { components: ['ember-theater/director'] }`. Secondly, you need to provide an initial scene with `director: { initialScene: 'scene-id' }`. Whenever a player starts a game for the first time (or restarts a game they've been playing), the Director will refer back to this `initialScene` to figure out where to start. After that, she'll be able to navigate from scene to scene with the {{#link-to "learn.director.scene"}}`transitionToScene`{{/link-to}} direction.

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

## Config

There are generally three ways to customize a direction. They include passing arguments directly into the direction, setting attributes on an associated fixture, and finally by changing `app/ember-theater/config.js`. They are prioritized in this order:

*   Options
*   Fixtures
*   Config

So in this example:

```js
// app/ember-theater/fixtures/characters.js

export default [{
  id: 'bebe',
  name: 'Bebe',
  classNames: {
    decorative: ['et-paper']
  }
}];

// app/ember-theater/config.js

export default {
  globals: {
    transitionIn: {
      effect: { opacity: 1 }
    }
  },
  text: {
    classNames: {
      structural: ['et-coastal']
    },
    transitionIn: {
      effect: { opacity: 0.5 },
      duration: 1000
    }
  }
};

// app/ember-theater/director/scenes/picnic-at-the-beach.js

import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'The Beach',

  script: async function() {
    this.text('bebe', 'Hello world!', { transitionIn: { duration: 5000 }});
  }
});
```

`transitionIn: duration` will be set by the options passed to the direction, even though both the fixture and config have declared a value for it. In turn, the `classNames: { decorative }` will be set by the fixture, event though the config has declared a value for it. Finally, `transitionIn: effect` will be set by `config.text`, even though `config.globals` has also declared a value.

You'll find more details in the individual direction sections on what values can be set in their fixtures/configs.
