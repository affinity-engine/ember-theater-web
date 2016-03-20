## Overview

Plugins are the real heart of any Ember Theater project. Each one is a powerful toolset, and you can pick, choose, and combine them to get the right features for your game. To include a plugin in your theater, simply refer to it your `hbs` file:

```hbs
{{#ember-theater as |theater|}}
  {{ember-theater/director
    theaterId=theater.theaterId
    initialScene="we-are-the-best"
  }}

  {{#ember-theater/menu-bar theaterId=theater.theaterId as |menuBar|}}
    {{ember-theater/menu-bar/resize
      theaterId=menuBar.theaterId
      openMenu=menuBar.openMenu
    }}
  {{/ember-theater/menu-bar}}
{{/ember-theater}}
```

In this example, you'll use two plugins, `director` and `menuBar`. You'll find the documentation to each in the table of contents.
