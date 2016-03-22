## Data

Sometimes, you'll want to access information between scenes. For instance, you might want to keep a tally of the player's score, or let them name their character, or keep track of key choices. You can do all of this and more with `data`, which is passed in as a second argument to every scene.

```js
import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  start: async function(script, data) {
    // get previously set data
    const playerName = data.get('playerName');

    await decision = await script.Choice(['Go left', 'Go right']).header(`Where will you go, ${playerName}?`);

    // set or overwrite data
    data.set('direction', decision);
  }
```

The `data` object is a simple `Ember.Object`. If you're going to use `data`, you're highly encouraged to read the [documentation](http://emberjs.com/api/classes/Ember.Object.html). In addition to `get` and `set`, an `Ember.Object` offers a great deal of functionality, including `toggleProperty` which toggles a boolean between `true` and `false`, `incrementProperty` which increases a numerical value, and `decrementProperty` which decreases it.

### Saves

Whenever a player saves their progress, the `data` object will also be saved and seamlessly reinjected into a loaded game. This means that even if they close the game, important `data` will persist.
