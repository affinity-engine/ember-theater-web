### `Sound(fixture)`

Plays a sound effect. You can pass it either a fixture id or an object with an `src` pointing to a sound file.

```js
// plays a phaser shot, resolving once the clip has completed
await script.Sound('phaser-shot');

// fades in the beach theme
script.Sound('beach-theme');
// fades in the song bolero
script.Sound({ src: 'sounds/songs/bolero.mp3' });
```

### `fadeIn(volume, duration = 1000)`

Fades from 0 to the specified volume (defaults to 1).

```js
const bolero = script.Sound('bolero');

// fades the song from 0 full volume over 1000 milliseconds
bolero.fadeIn();

// fades the song from 0 to half volume over 1000 milliseconds
bolero.fadeIn(0.5)

// fades the song from 0 to half volume over 2000 milliseconds
bolero.fadeIn(0.5, 2000)
```

### `fadeTo(volume, duration = 1000)`

Fades to the specified volume over the provided duration.

```js
const bolero = script.Sound('bolero');

// fades to half volume over 1000 milliseconds
bolero.fadeTo(0.5, 1000);
```

### `fadeOut(duration = 1000)`

Fades from the current volume to 0 over the provided duration.

```js
const bolero = script.Sound('bolero');

// fades the song to 0 over 1000 milliseconds
bolero.fadeOut();

// fades the song to 0 over 2000 milliseconds
bolero.fadeIn(2000)
```

### `pause`

Pauses the sound at its current position. It can be resumed again from this position.

```js
const bolero = script.Sound('bolero');

bolero.pause();
```

### `loop()`

Causes the sound to loop.

```js
const bolero = script.Sound('bolero');

// causes the sound to start looping
bolero.loop();

// stops looping the sound
bolero.loop(false);
```

### `mute`

Mutes the sound.

```js
const bolero = script.Sound('bolero');

// mutes the sound
bolero.mute();

// unutes the sound
bolero.mute(false);
```

### `play`

Plays the instance after a pause or stop.

```js
const bolero = script.Sound('bolero');

bolero.stop();

// start bolero from the beginning
bolero.play();

bolero.pause();

// starts bolero from the pause point
bolero.play();
```

### `position(position)`

Sets the sound's position.

```js
const bolero = script.Sound('bolero');

// skips to the 5000 millisecond mark of the sound
bolero.position(5000);
```

### `stop`

Stops the sound and returns it to the position to the start.

```js
const bolero = script.Sound('bolero');

bolero.stop();
```

### `stopFade`

Stops a fade at maintains the current volume.

```js
const bolero = script.Sound('bolero');

bolero.fadeIn();

bolero.stopFade();
```

### `volume(volume)`

Sets the sound's volume between 0 and 1. 0 is silent; 1 is full.

```js
const bolero = script.Sound('bolero');

// sets the volume to half full
bolero.volume(0.5);
```
