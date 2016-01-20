// app/ember-theater/fixtures/characters.js

export default [{
  id: 'bebe',
  name: 'Bebe',
  decorativeClassNames: ['et-paper']
}];

// app/ember-theater/config.js

export default {
  globals: {
    transitionIn: {
      effect: { opacity: 1 }
    }
  },
  text: {
    decorativeClassNames: ['et-coastal'],
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
