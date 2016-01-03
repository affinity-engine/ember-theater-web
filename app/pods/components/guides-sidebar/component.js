import Ember from 'ember';
import sections from 'ember-theater-web/fixtures/guides-sections';

const { Component } = Ember;

export default Component.extend({
  tagName: 'nav',

  sections
});
