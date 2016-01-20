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
