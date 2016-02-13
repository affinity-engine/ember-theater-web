import Ember from 'ember';
import { translationMacro as t } from 'ember-i18n';

const { Route } = Ember;

export default Route.extend({
  titleToken: t('learn.sections.effect')
})
