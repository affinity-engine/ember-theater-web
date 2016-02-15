The menu bar is a place for you to add meta-actions to your game, such as saving, loading, and reseting. The menu bar is always available to the player, and by default it appears when the player hovers their mouse at the top of the screen.

## Usage

To use the `menu-bar` in your game, you'll need to:

```hbs
{{#ember-theater as |theater|}}
  {{#theater.menuBar as |menuBar|}}
    {{menuBar.save}}
  {{/theater.menuBar}}
{{/ember-theater}}
```
