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
