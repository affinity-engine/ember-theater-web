// app/ember-theater/director/scenes/picnic-on-the-beach.js

import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'The Beach',

  script: async function() {
    // // fadeIn the beach backdrop
    // await this.backdrop('beach-day');
    //  // move Bebe onto the screen, 30% of the screen width from the left
    // this.character('bebe', { left: ['70%', '100%'] }, { duration: 1000 });
    //  // move Blixie onto the screen, 30% of the screen width from the right
    // this.character('blixie', { left: '30%' }, { duration: 1000 });
    // // Bebe talks
    // await this.text('bebe', 'It is so beautiful!');
    // // Blixie responds
    // await this.text('blixie', 'Uh-huh.');
    //
    // // transition to the next scene
    // this.transitionToScene('director/scenes');
  }
});
