import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  title(tokens) {
    return `${tokens.join(' | ')} – Ember Theater`;
  }
})
