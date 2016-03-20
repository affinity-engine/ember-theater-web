In film and theater, a director is responsible for translating scripts into something her audience can appreciate: props and staging, lighting, music, character dialogue, and blocking. In Ember Theater, the `director` plugin plays a similar role. While you (the game designer) write a script, the `director` is responsible for translating that script into scenes with lively characters and expressively delivered dialogue.

To use the `director` in your game, you'll need to:

```hbs
{{#ember-theater as |theater|}}
  {{ember-theater/director
    theaterId=theater.theaterId
    initialScene="picnic-on-the-beach"
  }}
{{/ember-theater}}
```

If you read over the section on Plugins, then this should look familiar. What will probably look new is that we're passing an argument, `initialScene`, into the `director`. That argument is your way of specifying which scene the game should start on. In this case, we'll start the game with the scene entitled `picnic-on-the-beach`. This should refer to a `Scene` with the path `app/ember-theater/director/scenes/picnic-on-the-beach.js`.
