import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['full-width', 'hide-for-medium'],

  actions: {
    toggleIsExpanded() {
      this.toggleProperty('isExpanded');
    }
  }
});
