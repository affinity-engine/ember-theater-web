// app/ember-theater/director/scenes/picnic-on-the-beach.js

import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'The Beach',

  script: async function() {
    // // fadeIn the beach backdrop
    // await this.backdrop('beach-day');
    //  // move Bitsy onto the screen, 30% of the screen width from the left
    // this.character('bitsy', { left: ['70%', '100%'] }, { duration: 1000 });
    //  // move Emma onto the screen, 30% of the screen width from the right
    // this.character('emma', { left: '30%' }, { duration: 1000 });
    // // Bitsy talks
    // await this.text('bitsy', 'It is so beautiful!');
    // // Emma responds
    // await this.text('emma', 'Uh-huh.');
    //
    // // transition to the next scene
    // this.transitionToScene('director/scenes');
  }
});
