## For New Developers

Before continuing with the steps below, you might want to check out the [Helpful Links](/learn/installation/helpful-links) section. It will help you get oriented with the command line, text editors, and the tools you'll be using when coding an Ember Theater game. If you're already comfortable with all those things, then feel free to skip that section and get straight to setup.

### A Word of Encouragement

Getting Ember Theater setup can be a big process, and if you've never worked with the command line before, it'll also require you to interface with your computer in a new and challenging way. The upswing is that Ember Theater is built with incredibly powerful tools, and it extends that power to make game design that much easier for you. Although the setup might be daunting, bear with it and you'll have a simple, extensible, and highly customizable game engine at your disposal.

## Creating an Ember Project

Before starting your first Ember Theater project, you'll need to ensure that you have Ember CLI installed. You can find an excellent guide [here](https://guides.emberjs.com/v2.3.0/getting-started/). This will likely be the lengthiest part of your setup, but once you have Ember CLI on your machine, you'll be able to use it to make countless Ember Theater games.

To start a project, simply enter `ember new [project name]` in your terminal.

## Installing the Ember Theater addon

Within your project folder, type `ember install ember-theater`. NPM will now start downloading Ember Theater. This can take a few minutes.

While the addon is installing, you can complete the next steps. First, we'll want to enable advanced ES7 features like async functions. To do so, navigate to `ember-cli-build.js` and modify `EmberApp` to include these lines:

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

Next, we'll need to ensure that we're using the same pod structure as Ember Theater. (When pods 2.0 come out, this step should no longer be necessary.) Go to `config/environment.js` and add a `podModulePrefex` to `ENV`. The `podModulePrefex` should be identical to your `modulePrefex` (also found in this file), but with `/pods` appended to the end, like so:

```js
module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-game',
    podModulePrefix: 'my-game/pods',

    . . . .
  }
};
```

Next, go to `bower.json` and ensure that `ember` is at 2.3.0 or higher. If not, change it to at least 2.3.0 and then run `bower install` in your command line.

## Using Ember Theater

Now that you have Ember Theater and its dependencies installed, you're ready to include it in your Ember project. To do so, you'll reference it in one of your `.hbs` templates. The easiest way to get this up and running is to navigate to `app/templates/application.hbs` and then replace the contents of that file with:

```hbs
{{#ember-theater as |theater|}}

{{/ember-theater}}
```

And there you have it! You have Ember Theater in your project. Now you just need to include one of the plugins to see it in action.

## Using Ember Theater styles

First, you'll have to make sure you're using Sass. Run `ember install ember-cli-sass` in your command line.

Next, replace `app/styles/app.css` with `app/styles/app.scss`. Inside of `app.scss`, paste:

```scss
@import "ember-theater/ember-theater";
```

## Running the dev environment

Once you have the Ember project setup, you can start the dev environment by running `ember server` in your command line. After that, navigate to [http://localhost:4200](http://localhost:4200) to see the game in action. (Note that it'll just be a blank screen until you include an Ember Theater plugin.)
