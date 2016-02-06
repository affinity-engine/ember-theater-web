# Menu Bar

## Configuration

You can configure your menu-bar layout in the `ember-theater/config.js` file:

```js
export default {
  producer: {
    components: [
      'ember-theater/menu-bar'
    ]
  },
  menuBar: {
    components: [
      'ember-theater/menu-bar/rewind',
      'ember-theater/menu-bar/load',
      'ember-theater/menu-bar/save',
      'ember-theater/menu-bar/reset'
    ]
  }
};
```

You can further configure the key bindings that activate the various buttons:

```js
export default {
  menuBar: {
    load: {
      keys: {
        open: ['ctrl+l']
      }
    },
    reset: {
      keys: {
        open: ['ctrl+r']
      }
    },
    rewind: {
      keys: {
        open: ['ctrl+b']
      }
    },
    save: {
      keys: {
        open: ['ctrl+s']
      }
    }
  }
};
```

## `ember-theater/menu-bar/save`

The save button opens a menu from which the player can save their progress, either overwriting existing games or creating new ones.

## `ember-theater/menu-bar/load`

The load button opens a menu from which the player can load a previous save.

## `ember-theater/menu-bar/reset`

The reset button returns the player to the very beginning of the game.

## `ember-theater/menu-bar/rewind`

The rewind button lets the player rewind to a previous scene, regardless of whether or not they had saved there.
