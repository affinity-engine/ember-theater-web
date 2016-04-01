import Ember from 'ember';

export default Ember.A([{
  route: 'index',
  name: 'welcome'
}, {
  route: 'installation',
  sections: [{
    route: 'helpful-links'
  }]
}, {
  route: 'configuration'
}, {
  route: 'fixtures'
}, {
  route: 'plugins',
  sections: [{
    route: 'custom'
  }, {
    route: 'preloader'
  }]
}, {
  route: 'director',
  sections: [{
    route: 'configuration',
  }, {
    route: 'scenes'
  }, {
    route: 'data'
  }, {
    route: 'directions',
    sections: [{
      route: 'custom'
    }, {
      route: 'backdrop'
    }, {
      route: 'character'
    }, {
      route: 'text'
    }, {
      route: 'menu'
    }, {
      route: 'sound'
    }, {
      route: 'delay'
    }, {
      route: 'layer'
    }, {
      route: 'scene'
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
}, {
  route: 'curtain'
}]);
