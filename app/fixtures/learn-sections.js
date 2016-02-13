import Ember from 'ember';

export default Ember.A([{
  route: 'index',
  name: 'installation'
}, {
  route: 'plugins'
}, {
  route: 'fixtures'
}, {
  route: 'loader'
}, {
  route: 'director',
  sections: [{
    route: 'configuration',
  }, {
    route: 'scenes'
  }, {
    route: 'directions',
    sections: [{
      route: 'custom'
    }, {
      route: 'backdrop'
    }, {
      route: 'character'
    }, {
      route: 'expression'
    }, {
      route: 'text'
    }, {
      route: 'choice'
    }, {
      route: 'sound'
    }, {
      route: 'pause'
    }, {
      route: 'filter'
    }, {
      route: 'set-data'
    }, {
      route: 'get-data'
    }, {
      route: 'delete-data'
    }, {
      route: 'transition-to-scene'
    }]
  }, {
    route: 'text-tags',
    sections: [{
      route: 'custom'
    }, {
      route: 'speed'
    }, {
      route: 'instant'
    }, {
      route: 'pause'
    }, {
      route: 'clear'
    }, {
      route: 'close'
    }, {
      route: 'effect'
    }, {
      route: 'animate'
    }]
  }, {
    route: 'styling',
    sections: [{
      route: 'text'
    }, {
      route: 'choice'
    }]
  }]
}, {
  route: 'menu-bar',
  sections: [{
    route: 'configuration'
  }, {
    route: 'plugins',
    sections: [{
      route: 'save'
    }, {
      route: 'load'
    }, {
      route: 'rewind'
    }, {
      route: 'reset'
    }, {
      route: 'resize'
    }]
  }, {
    route: 'styling'
  }]
}]);
