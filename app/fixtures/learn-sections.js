import Ember from 'ember';

export default Ember.A([{
  route: 'index',
  name: 'Installation'
}, {
  route: 'producer'
}, {
  route: 'fixtures'
}, {
  route: 'loader'
}, {
  route: 'director',
  sections: [{
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
    route: 'data'
  }, {
    route: 'scene'
  }]
}, {
  route: 'menu-bar'
}, {
  route: 'text-tags',
  sections: [{
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
}]);
