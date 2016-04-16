## Usage

When you run `ember install ember-theater`, one of the many files created automatically is `app/ember-theater/config.js`. This is a convenient place to store configuration settings for your game, such as the title of the game or what color scheme you prefer. You can then pass the config into your Ember Theater game like so:

```hbs
{{#ember-theater config=config as |theater|}}

{{/ember-theater}}
```

Though you'll need to also grab the config in the corresponding controller or component of your template. If `ember-theater` is in your `app/templates/application.hbs` template, then you might do something like this in your `app/controllers/application.js` file:

```js
import Ember from 'ember';
import config from '../ember-theater/config';

export default Ember.Controller.extend({
  config
});
```

## Settings

Initially, your `app/ember-theater/config.js` file will look like this:

```js
export default {

};
```

Later, it might look something like this:

```js
export default {
  globals: {
    textSpeed: 20
  },
  director: {
    text: {
      textSpeed: 30
    }
  }
};
```

In this example, the config is setting both a `globals` text speed, as well as more specific text speed on `director.text`. Now, whenever the `director` plugin uses the `text` direction, it'll use a `textSpeed` of 30. Everything else in your game will use the `globals.textSpeed` of 20. Like this, you can configure your game broadly, while still providing specific overrides.
