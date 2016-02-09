# Fixtures

## Overview

Some games won't need to use fixtures, but most will find them useful. Fixtures are a simple way to define reoccurring game objects, such as characters or backdrops. For instance, consider these character fixtures:

```js
export default [{
  id: 'bebe',
  name: 'Bebe Robotica',
  height: 60,
  defaultExpression: 'bebe-standing'
}, {
  id: 'blx',
  name: 'Blixie',
  height: 80,
  defaultExpression: 'blixie-smirk'
}];
```

Here, two characters are defined, each with an unique `id` followed by several attributes. You'll now be able to utilize all those attributes by simply giving Ember Theater the associated `id`:

```js
export default Scene.extend({
  script() {
    await this.character('bebe', 'transition.fadeIn');
    await this.character('bebe', { translateX: '50vw' });
    this.text('bebe', 'Hi! My name is Bebe!');
  }
});
```

Since you've already defined the fixture 'bebe', Ember Theater knows that it should display her with the default expression of 'bebe-standing' and that she should be 60% of the screen's height.

Many Ember Theater directions have fixtures associated with them, and some fixture types (such as `characters`), are associated with multiple directions. You'll find out more about the fixture attributes a given direction expects in the docs for that direction.

## Usage

To include fixtures, simply pass them into the `ember-theater` component. For instance:

```hbs
{{ember-theater config=config fixtures=fixtures}}
```

You'll need to also define these fixtures in the corresponding controller or component. If `ember-theater` is in your `templates/application.hbs` template, then you might do something like this in your `controllers/application.js` file:

```js
import Ember from 'ember';
import backdropFixtures from '../ember-theater/fixtures/backdrops';
import characterFixtures from '../ember-theater/fixtures/characters';
import characterExpressionFixtures from '../ember-theater/fixtures/character-expressions';
import soundFixtures from '../ember-theater/fixtures/sounds';

export default Ember.Controller.extend({
  fixtures: Ember.computed({
    return Ember.merge({}, backdropFixtures, characterFixtures, characterExpressionFixtures, soundFixtures);
  })
});
```
