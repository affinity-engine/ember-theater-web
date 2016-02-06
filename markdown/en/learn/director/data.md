## Data

### `setData`

```js
@param key {String} The key by which you will look up the data.
@param value {} The value to assign to the key.
```

You'll often want to remember what choices the player made. You can commit data to the game's memory, which will persist between scenes and reloads. You can pass in any arbitrary information you consider valuable, from player stats to meta-data about the play session.

```js
const { input: chosenName } = await this.choice('What is your name?', { inputable: true });
this.setData('playerName', chosenName);

// later, you can overwrite data
this.setData('playerName', newName);
```

### `getData`

```js
@param key {String} The key of the data you are looking up.
```

After saving data, you can look it up again with `getData`:

```js
const playerName = this.getData('playerName');
```

### `deleteData`

```js
@param key {String} The key of the data you want to delete.
```

After saving data, you can optionally remove it with `deleteData`:

```js
this.deleteData('playerName');

const playerName = this.getData('playerName'); // playerName === undefined
```
