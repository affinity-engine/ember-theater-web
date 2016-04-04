### `Data(dataId)`

`Data` can be used to store, retrieve, and alter information you want to store between scenes. The data will persist in a save state, even after the game is exited.

```js
const coldStorage = await script.Data('foo');

console.log(coldStorage); // 'a previously saved string'
```

#### `set(value)`

Sets the specified data to the provided value. Strings, numbers, objects, and arrays are all valid.

```js
script.Data('foo').set('bar');

console.log(await script.Data('foo')); // 'bar'

script.Data('youAreMyNumber').set(1);

console.log(await script.Data('youAreMyNumber')); // 1

script.Data('fruit').set(['apple', 'orange', 'lemon']);

console.log(await script.Data('fruit')); // ['apple', 'orange', 'lemon']

script.Data('foobar').set({ foo: 'bar' });

console.log(await script.Data('foobar')); // { foo: 'bar' }
```

#### `delete()`

Deletes the data.

```js
script.Data('foo').set('bar');

console.log(await script.Data('foo')); // 'bar'

script.Data('foo').delete();

console.log(await script.Data('foo')); // undefined
```

#### `increment(amount)`

Increments the value. If no amount is provided, it increments by 1.

```js
script.Data('count').set(3);
script.Data('count').increment();

console.log(await script.Data('count')); // 4

script.Data('count').increment(2);

console.log(await script.Data('count')); // 6
```

#### `decrement(amount)`

Decrements the value. If no amount is provided, it decrements by 1.

```js
script.Data('count').set(3);
script.Data('count').decrement();

console.log(await script.Data('count')); // 2

script.Data('count').decrement(2);

console.log(await script.Data('count')); // 0
```

#### `toggle()`

Toggles the value between true and false.

```js
script.Data('isCorrect').toggle();

console.log(await script.Data('isCorrect')); // true

script.Data('isCorrect').toggle();

console.log(await script.Data('isCorrect')); // false
```
