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

const { String: { capitalize } } = Ember;

export default Component.extend({
  tagName: '',

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
      const name = get(this, 'section.name');
      const route = get(this, 'section.route');

      return name || route.split('-').map((word) => capitalize(word)).join(' ');
    }
  })
});
