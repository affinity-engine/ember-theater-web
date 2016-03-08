## Configuration

There are generally three ways to customize a direction. By passing arguments directly into the direction, by setting attributes on an associated fixture, and finally by changing the config. They are prioritized in this order:

*   Options
*   Fixtures
*   Config

So in this example:

```js
// app/ember-theater/fixtures/characters.js

export default [{
  id: 'bitsy',
  name: 'Bitsy',
  classNames: {
    decorative: ['et-paper']
  },
  text: {
    transitionIn: {
      effect: { opacity: 0.7 }
    }
  }
}];

// app/ember-theater/config.js

export default {
  globals: {
    transitionIn: {
      effect: { opacity: 1 },
      duration: 500
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
  script: async function() {
    this.Character('bitsy').Text('Hello world!').transitionIn({ opacity: 0.2 });
  }
});
```

`transitionIn: effect` will be set by the options passed to the direction, even though both the fixture and config have declared a value for it. In turn, the `classNames: { decorative }` will be set by the fixture, even though the config has declared a value for it. Finally, `transitionIn: duration` will be set by `config.text`, even though `config.globals` has also declared a value.

You'll find more details in the individual direction sections on what values can be set in their fixtures/configs.
