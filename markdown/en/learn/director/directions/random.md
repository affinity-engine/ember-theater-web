### `Random(number1, number2)`

Returns a random number between `number1` and `number2`. As with all directions, the result is saved. This means that the generated number will be consistent if the game is reloaded.

If only a single number is provided, then the second number will default to 0.

```js
let number = await script.Random(10, 20);

console.log(number); // 14

number = script.Random(20);

console.log(number); // 7

number = script.Random(-20);

console.log(number); // -16
```

#### `float(float)`

Allows the returned number to be a float.

```js
let number = await script.Random(1).float();

console.log(number); // 0.8165135716546197

number = script.Random(10, 20).float();

console.log(number); // 13.8168432498416546

number = script.Random(10, 20).float(false);

console.log(number); // 11
```
