# The Producer

## Overview

Ember Theater wants to give you as much freedom as possible while developing your game, while still providing you with a powerful toolset. We make this possible by bundling features into high-level components, which you can then opt into. This allows you to pick, choose, and combine the right toolsets for your needs. The producer is responsible for managing these high-level components.

To tell the producer to use a component, open `app/ember-theater/config.js` and add the components' path like so:

```js
export default {
  producer: {
    components: [
      'ember-theater/director',
      'ember-theater/menu-bar'
    ]
  }
}
```

Ember Theater supports several of these packages, which are documented in detail in the {{#link-to "learn.director"}}Director{{/link-to}} and {{#link-to "learn.menu-bar"}}Menu Bar{{/link-to}} sections.

You can also create and use your own producer components, and even share your components with the Ember Theater community.
