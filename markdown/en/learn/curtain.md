# Plugin: Curtain

Ember Theater's `curtain` plugin will display a loading graph as the game's assets preload. It will attempt to calculate the total size of all assets and show the player what percentage of the game has been downloaded. Once it completes downloading, it'll trigger `completePreload`.

To include it in your project, do:

```hbs
{{#ember-theater as |theater|}}
  {{#if theater.isLoaded}}
    {{ember-theater/director
      theaterId=theater.theaterId
      initialScene="we-are-the-best"
    }}
  {{else}}
    {{ember-theater/curtain
      theaterId=theater.theaterId
      filesToPreload="backdrops:src expressions:src sounds:src"
      completePreload=theater.completePreload
    }}
  {{/if}}
{{/ember-theater}}
```

You'll need to pass three arguments into `theater.curtain`:

`theaterId` expected the id of the `ember-theater` instance. In most cases, you'll want to just pass `theater.theaterId` to keep the two in sync.

`filesToPreload` expects a string of fixture/attribute pairs. For instance, `backdrops:src` will grab all the `backdrop` fixtures and download the image that their `src` points to.

`completePreload` expects a callback. In most cases, you'll want to just pass `theater.completePreload` into it, as `theater.completePreload` will set `theater.isLoaded` to `true` when it triggers.
