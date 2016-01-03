import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('guides', function() {
    this.route('fixtures', function() {
      this.route('characters');
      this.route('sounds');
      this.route('character-expressions');
      this.route('backdrops');
      this.route('custom');
    });
    this.route('loader');
    this.route('director', function() {
      this.route('text');
      this.route('character');
      this.route('backdrop');
      this.route('choice');
      this.route('pause');
      this.route('sound');
      this.route('data');
      this.route('expression');
      this.route('filter');
      this.route('scene');
    });
    this.route('menu-bar');
    this.route('producer');
  });
});

export default Router;
