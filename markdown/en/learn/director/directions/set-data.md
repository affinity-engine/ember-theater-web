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
