import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('learn', function() {
    this.route('fixtures');
    this.route('loader');
    this.route('director', function() {
      this.route('character');
      this.route('backdrop');
      this.route('choice');
      this.route('pause');
      this.route('sound');
      this.route('data');
      this.route('expression');
      this.route('filter');
      this.route('scene');
      this.route('text');
    });
    this.route('menu-bar');
    this.route('producer');
    this.route('text-tags', function() {
      this.route('animate');
      this.route('clear');
      this.route('close');
      this.route('effect');
      this.route('instant');
      this.route('pause');
      this.route('speed');
    });
  });
});

export default Router;
