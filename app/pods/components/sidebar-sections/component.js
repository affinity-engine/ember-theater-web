import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'ul',
  classNames: ['sidebar-sections', 'list-block', 'list-block--tiny']
});
