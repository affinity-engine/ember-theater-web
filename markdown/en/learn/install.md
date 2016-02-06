# Installation

## Creating an Ember Project

Before starting your first Ember Theater project, you'll need to ensure that you have Ember CLI installed. You can find an excellent guide [here](https://guides.emberjs.com/v2.3.0/getting-started/). You'll only have to go through this process once.

Once Ember CLI is installed, you can create as many projects as you like. To start a project, simply enter `ember new [project name]` in your terminal.

## Installing the Ember Theater addon

Within your project folder, type `ember install ember-theater`. NPM will now start downloading Ember Theater. This can take a few minutes.

While the addon is installing, you can complete the next steps. First, navigate to `ember-cli-build.js` and modify `EmberAddon` to include these lines:

```js
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
      stage: 1
    }
  });

  . . . .

}
```

Next, go to `app/controllers/application.js` (if necessary, create the file) and modify it to import your Ember Theater config:

```js
import Ember from 'ember';
import config from '../ember-theater/config';

const { Controller } = Ember;

export default Controller.extend({
  config
});
```

Finally, navigate to `app/templates/application.hbs` and enter `{{ember-theater config=config}}`.

## Using Ember Theater styles

First, you'll have to make sure you're using Sass. Run `ember install ember-cli-sass` in your command line.

Next, replace `app/styles/app.css` with `app/styles/app.scss`. Inside of `app.scss`, simply paste:

`@import "ember-theater";`

## Running the dev environment

Once you have the Ember project setup, you can start the dev environment by running `ember server` in your command line. After that, navigate to [http://localhost:4200](http://localhost:4200) to see the game in action.
