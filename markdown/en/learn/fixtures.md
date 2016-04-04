# Fixtures

## Overview

Some games won't need to use fixtures, but most will find them useful. Fixtures are a simple way to define reoccurring game elements, such as characters or backdrops. For instance, consider these character fixtures:

```js
export default [{
  id: 'bitsy',
  name: 'Bitsy Robotica',
  height: 60,
  defaultExpression: 'bitsy-standing'
}, {
  id: 'emma',
  name: 'Emma',
  height: 80,
  defaultExpression: 'emma-smirk'
}];
```

Here, two characters are defined, each with an unique `id` followed by several attributes. You'll now be able to utilize all those attributes by simply giving Ember Theater the associated `id`:

```js
export default Scene.extend({
  script() {
    script.Character('bitsy').position('center').Text('Hi! My name is Bitsy!');
  }
});
```

Since you've already defined the fixture 'bitsy', Ember Theater knows that it should display her with the default expression of 'bitsy-standing' and that she should be 60% of the screen's height.

Many Ember Theater directions have fixtures associated with them, and some fixture types (such as `characters`), are associated with multiple directions. You'll find out more about the fixture attributes a given direction expects in the docs for that direction.

## Usage

To include fixtures, simply pass them into the `ember-theater` component. For instance:

```hbs
{{#ember-theater fixtures=fixtures as |theater|}}

{{/ember-theater}}
```

You'll need to also define these fixtures in the corresponding controller or component. If `ember-theater` is in your `app/templates/application.hbs` template, then you might do something like this in your `app/controllers/application.js` file:

```js
import Ember from 'ember';
import backdrops from '../ember-theater/fixtures/backdrops';
import characters from '../ember-theater/fixtures/characters';
import expressions from '../ember-theater/fixtures/expressions';
import sounds from '../ember-theater/fixtures/sounds';

export default Ember.Controller.extend({
  fixtures: {
    backdrops,
    characters,
    expressions,
    sounds
  }
});
```
