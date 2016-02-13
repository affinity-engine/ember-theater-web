import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  tagName: 'header',
  classNames: ['top-bar', 'invert-color', 'strong', 'push-bottom-large']
});
