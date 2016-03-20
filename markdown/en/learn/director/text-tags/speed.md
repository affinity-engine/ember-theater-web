### `speed`

When the `speed` text tag is encountered, it changes the rate at which letters are printed. If the provided speed starts with a '*', it'll multiply the speed by the following number. Note that lower numbers are faster, so multiply by a fraction (eg, `0.5`) to make the text go faster.

```js
script.text(`This text appears at the normal rate of a new character every 25 milliseconds.
  ((#speed 20)) This text appears at the faster rate of every 20 milliseconds.
  ((#speed 40)) This text appears at the much slower rate of every 40 milliseconds.`);

script.text(`This text appears at the normal rate of a new character every 25 milliseconds.
  ((#speed *0.5)) This text appears at the faster rate of every 12.5 milliseconds.
  ((#speed *2)) This text appears at the normal rate of every 25 milliseconds.
  ((#speed *2)) This text appears at the much slower rate of every 40 milliseconds`);
```
