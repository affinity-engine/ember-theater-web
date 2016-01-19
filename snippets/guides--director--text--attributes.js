// app/ember-theater/fixtures/characters.js

export default [{
  id: 'bebe',
  name: 'Bebe',

  decorativeClassNames: ['et-paper'],
  structuralClassNames: ['et-block'],
  transitionDuration: 1000,
  keys: {
    up: ['ArrowUp', 'w'],
    down: ['ArrowDown', 's'],
    cancel: ['Escape']
  },
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
    decorativeClassNames: ['et-paper'],
    structuralClassNames: ['et-block'],
    transitionDuration: 1000,
    keys: {
      up: ['ArrowUp', 'w'],
      down: ['ArrowDown', 's'],
      cancel: ['Escape']
    },
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    },
    transitionOut: {
      effect: { opacity: 1 },
      duration: 1000
    }
  },
  choice: {
    decorativeClassNames: ['et-paper'],
    structuralClassNames: ['et-block'],
    transitionDuration: 1000,
    keys: {
      up: ['ArrowUp', 'w'],
      down: ['ArrowDown', 's'],
      cancel: ['Escape']
    },
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
