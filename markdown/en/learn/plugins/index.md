## Overview

Plugins are the real heart of any Ember Theater project. Each one is a powerful toolset, and you can pick, choose, and combine them to get the right features for your game. To include a plugin in your theater, simply refer to it your `hbs` file:

```hbs
{{#ember-theater as |theater|}}
  {{theater.director}}
  {{theater.menuBar}}
{{/ember-theater}}
```

In this example, you'll use two plugins, `director` and `menuBar`. You'll find the documentation to each in the table of contents.
