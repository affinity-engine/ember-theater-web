## Preloaders

Due to the nature of the web, images, music, and other files aren't downloaded until a website uses them--which is to say, a song won't start downloading until it starts playing. This can lead to poor performance over slower connections, especially in an Ember Theater game which might require the browser to load dozens of large files at the same time.

To work around this, Ember Theater lets you preload your game's large files. You can use the `ember-theater/curtain` preloader to do this, or you can create one of your own. Like all plugins, you include a preloader in your `hbs`:

```hbs
{{#ember-theater as |theater|}}
  {{#if theater.isLoaded}}
    {{theater.director}}
    {{theater.menuBar}}
  {{else}}
    {{theater.curtain}}
  {{/if}}
{{/ember-theater}}
```

`theater.isLoaded` won't be true until all the files have been preloaded, which means that the `director` and `menuBar` will remain hidden. Once the files are preloaded, the `curtain` will disappear and the `director` and `menuBar` will take the stage. You'll find more information on the `curtain` preloader in its section on the sidebar.
