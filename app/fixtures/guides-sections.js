import Ember from 'ember';

export default Ember.A([{
  route: 'index',
  name: 'Installation'
}, {
  route: 'producer'
}, {
  route: 'fixtures',
  sections: [{
    route: 'backdrops'
  }, {
    route: 'characters'
  }, {
    route: 'character-expressions'
  }, {
    route: 'sounds'
  }, {
    route: 'custom'
  }]
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
}]);
