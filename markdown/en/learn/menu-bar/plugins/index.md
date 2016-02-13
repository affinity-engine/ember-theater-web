You can add plugins to your menu bar in the `ember-theater/config.js` file. They will appear in the same order you define them in. So in the below example, the rewind button will appear first, followed by the load, save, reset, and resize buttons.

```js
export default {
  menuBar: {
    plugins: [
      'ember-theater/menu-bar/rewind',
      'ember-theater/menu-bar/load',
      'ember-theater/menu-bar/save',
      'ember-theater/menu-bar/reset',
      'ember-theater/menu-bar/resize'
    ]
  }
};
```
