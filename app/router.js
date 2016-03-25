import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('learn', function() {
    this.route('fixtures');
    this.route('director', function() {
      this.route('data');
      this.route('directions', function() {
        this.route('character');
        this.route('backdrop');
        this.route('choice');
        this.route('pause');
        this.route('sound');
        this.route('filter');
        this.route('scene');
        this.route('text');
        this.route('custom');
      });
      this.route('text-tags', function() {
        this.route('animate');
        this.route('clear');
        this.route('close');
        this.route('effect');
        this.route('instant');
        this.route('pause');
        this.route('speed');
        this.route('custom');
      });
      this.route('configuration');
      this.route('scenes');
      this.route('styling', function() {
        this.route('text');
        this.route('choice');
      });
    });
    this.route('menu-bar', function() {
      this.route('configuration');
      this.route('plugins', function() {
        this.route('save');
        this.route('load');
        this.route('reset');
        this.route('rewind');
        this.route('resize');
      });
      this.route('styling');
    });
    this.route('configuration');
    this.route('plugins', function() {
      this.route('preloader');
      this.route('custom');
    });
    this.route('installation', function() {
      this.route('helpful-links');
    });
    this.route('curtain');
  });
  this.route('create');
  this.route('discuss');
});

export default Router;
