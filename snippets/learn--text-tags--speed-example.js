this.text(`This text appears at the normal rate of a new character every 25 milliseconds.
  ((#speed 20)) This text appears at the faster rate of every 20 milliseconds.
  ((#speed 40)) This text appears at the much slower rate of every 40 milliseconds.`);

this.text(`This text appears at the normal rate of a new character every 25 milliseconds.
  ((#speed *0.5)) This text appears at the faster rate of every 12.5 milliseconds.
  ((#speed *2)) This text appears at the normal rate of every 25 milliseconds.
  ((#speed *2)) This text appears at the much slower rate of every 40 milliseconds`);
