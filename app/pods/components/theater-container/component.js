import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  classNames: ['theater-container'],
  
  config: computed('initialSceneId', {
    get() {
      const initialSceneId = get(this, 'initialSceneId');

      return {
       producer: {
         components: [
           'ember-theater/director'
         ]
       },
       director: {
         initialSceneId
       }
     }
    }
  }),

  asdf: Ember.observer('isFocused', function() {
    console.log(this.get('isFocused'))
  })
});
