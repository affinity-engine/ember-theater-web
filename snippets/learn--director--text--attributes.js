// app/ember-theater/fixtures/characters.js

export default [{
  id: 'bebe',
  name: 'Bebe',

  classNames: {
    decorative: ['et-paper'],
    structural: ['et-block']
  },
  transitionDuration: 1000,
  transitionIn: {
    effect: { opacity: 1 },
    duration: 1000
  },
  transitionOut: {
    effect: { opacity: 1 },
    duration: 1000
  }
}];

// app/ember-theater/config.js

export default {
  globals: {
    classNames: {
      decorative: ['et-paper'],
      structural: ['et-block']
    },
    transitionDuration: 1000,
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    },
    transitionOut: {
      effect: { opacity: 1 },
      duration: 1000
    }
  },
  text: {
    classNames: {
      decorative: ['et-paper'],
      structural: ['et-block']
    },
    transitionDuration: 1000,
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    },
    transitionOut: {
      effect: { opacity: 1 },
      duration: 1000
    }
  }
};
