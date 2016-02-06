## `backdrop`

```js
@param id {String} An id corresponding to an `ember-theater/backdrop` model.
@param effect {Object} |optional| |default: { opacity: 1 }| CSS attributes and values.
@param [options] {Object} |optional|
@param [options.instance] {Number} |default: 0| Which instance of the backdrop you wish to alter.
@param [options.duration] {Number} |default: <set in config>| How long the effect takes to resolve.
@param [options.caption] {String} |default: <set in fixture>| The alt text that will appear for this image. Primarily used for accessability.
@param [options.src] {String} |default: <set in fixture>| The path to the image, relative to the `public` directory.

@return {Promise} Resolves when the effect has completed.
```

Beaches, bedrooms, mountain vistas, and city streets. In theater, a backdrop might be a simple sheet of canvas with a location painted on it. In Ember Theater, it's actually quite similar. The `backdrop` direction will instantiate an image at the back of the screen. Subsequent uses of `backdrop` can alter that image or even instantiate additional backdrops.

```js
this.backdrop('beach', { opacity: 0.5 }, { duration: 2000 }); // fades to half opacity over 2 seconds
this.backdrop('office', { duration: 1000 }); // fades to full opacity over 1 second

await this.backdrop('shower'); // fades to full opacity over the default transition duration
this.backdrop('shower', { instance: 1 }); // fades in a second instance of the shower backdrop
this.backdrop('shower', { opacity: 0 }); // fades out the first instance of the shower backdrop
```

### Fixture/Config Attributes

```js
// app/ember-theater/fixtures/backdrops.js

export default [{
  id: 'beach',
  caption: 'beach at daytime',
  src: 'images/backdrops/beach.jpg'
}, {
  id: 'beach--night',
  caption: 'beach at nighttime',
  src: 'images/backdrops/beach--night.jpg'
}];

// app/ember-theater/config.js

export default {
  globals: {
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    }
  },
  backdrop: {
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    }
  }
};
```
