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
