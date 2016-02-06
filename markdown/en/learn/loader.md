# Media Loader

Many Ember Theater games feature media rich content, including hi-resolution images and music. Due to the nature of the web, these types of files aren't typically downloaded until a website uses them--which is to say, a song wouldn't start downloading until you start playing it, leading to poor performance over slower connections.

To work around this, Ember Theater lets you preload your game's large files. You can use the officially support Curtain prelaoder to do this, or you can create one of your own. To specify your chosen preloader and the files you want to preload, go to your config:

```js
// app/ember-theater/config.js

export default {
  mediaLoader: {
    type: 'ember-theater/curtain',
    filesToPreload: [
      'backdrops:src',
      'character-expressions:src',
      'sounds:src'
    ]
  }
};
```

The `type` specifies which media loader you wish to use, while the `filesToPreload` relate to the fixture attributes that you want to preload, such as the `sound` fixture's `src` attribute.
