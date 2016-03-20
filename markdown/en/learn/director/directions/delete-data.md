### `deleteData`

```js
@param key {String} The key of the data you want to delete.
```

After saving data, you can optionally remove it with `deleteData`:

```js
script.deleteData('playerName');

const playerName = script.getData('playerName'); // playerName === undefined
```
