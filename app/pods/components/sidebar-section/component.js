import Ember from 'ember';

const {
  Component,
  controllerFor,
  computed,
  get,
  getProperties,
  on,
  set
} = Ember;

const {
  alias,
  and,
  notEmpty
} = computed;

const { String: { camelize } } = Ember;
const { inject: { service } } = Ember;

export default Component.extend({
  tagName: 'li',

  i18n: service(),

  currentRouteName: alias('applicationRoute.currentRouteName'),
  hasSections: notEmpty('section.sections'),
  hasVisibleSections: and('hasSections', 'isActive'),

  setApplicationRoute: on('init', function() {
    const applicationRoute = controllerFor(this.container, 'application');

    set(this, 'applicationRoute', applicationRoute);
  }),

  isActive: computed('currentRouteName', 'fullRoute', {
    get() {
      const {
        currentRouteName,
        fullRoute
      } = getProperties(this, 'currentRouteName', 'fullRoute');

      return currentRouteName.indexOf(fullRoute) === 0;
    }
  }).readOnly(),

  fullRoute: computed('parentRoute', 'section.route', {
    get() {
      const parentRoute = get(this, 'parentRoute');
      const route = get(this, 'section.route');

      return `${parentRoute}.${route}`;
    }
  }).readOnly(),

  name: computed('section.route', 'section.name', {
    get() {
      const key = get(this, 'section.name') || get(this, 'section.route');

      return get(this, 'i18n').t(`learn.sections.${camelize(key)}`);
    }
  })
});
