// app/ember-theater/fixtures/characters.js

// Note: a defaultExpressionId is required if you want to use the `character` direction.

export default [{
  id: 'bebe',
  height: 60,
  defaultExpressionId: 'bebe--standing'
}, {
  id: 'blixie',
  height: 80,
  defaultExpressionId: 'blixie--smirking'
}];

// app/ember-theater/config.js

export default {
  globals: {
    height: 60,
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    }
  },
  character: {
    height: 60,
    transitionIn: {
      effect: { opacity: 1 },
      duration: 1000
    }
  }
};
