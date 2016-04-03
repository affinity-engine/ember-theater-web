### `Random(min, max)`

Returns a random number between `min` and `max`. If the scene is saved, this direction will continue returning the same number. By default, returns a float.

```js
let number = await script.Random(0, 1);

console.log(number); // 0.83468756154357

number = script.Random(10, 25);

console.log(number); // 13.4836535413565
```

#### `int(int)`

Forces the result to be an integer.

```js
let number = await script.Random(0, 1).int();

console.log(number); // 0

number = script.Random(10, 25).int();

console.log(number); // 13

number = script.Random(10, 25).int(false);

console.log(number); // 21.4654843554684
```
