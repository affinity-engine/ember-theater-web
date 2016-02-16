import Ember from 'ember';
import backdrops from 'ember-theater-web/ember-theater/fixtures/backdrops';
import characters from 'ember-theater-web/ember-theater/fixtures/characters';
import expressions from 'ember-theater-web/ember-theater/fixtures/expressions';
import sounds from 'ember-theater-web/ember-theater/fixtures/sounds';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  classNames: ['theater-container'],

  fixtures: {
    backdrops,
    characters,
    expressions,
    sounds
  },

  config: computed('title', {
    get() {
      return { globals: { title: get(this, 'title') } }
    }
  }).readOnly()
});
