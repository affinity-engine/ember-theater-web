### `deleteData`

```js
@param key {String} The key of the data you want to delete.
```

After saving data, you can optionally remove it with `deleteData`:

```js
this.deleteData('playerName');

const playerName = this.getData('playerName'); // playerName === undefined
```
