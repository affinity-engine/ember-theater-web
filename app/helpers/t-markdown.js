import Ember from 'ember';

const converter = new showdown.Converter();
const { Handlebars: { SafeString } } = Ember;

export default Ember.Helper.extend({
  i18n: Ember.inject.service(),

  _locale: Ember.computed.readOnly('i18n.locale'),

  compute: function(params, interpolations) {
    const key = params[0];
    const i18n = this.get('i18n');
    const translation = i18n.t(key, interpolations);
    const html = converter.makeHtml(translation.string);

    return new SafeString(html.replace(/<a /g, '<a target="_blank"'));
  },

  _recomputeOnLocaleChange: Ember.observer('_locale', function() {
    this.recompute();
  })
});
