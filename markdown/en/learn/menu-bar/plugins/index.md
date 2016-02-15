You can add plugins to your menu bar in the same way you add plugins to Ember Theater itself:

```hbs
{{#ember-theater as |theater|}}
  {{#theater.menuBar as |menuBar|}}
    {{menuBar.rewind}}
    {{menuBar.save}}
    {{menuBar.load}}
    {{menuBar.reset}}
    {{menuBar.resize}}
  {{/theater.menuBar}}
{{/ember-theater}}
```
