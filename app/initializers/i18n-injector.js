export function initialize(application) {
  application.inject('route', 'i18n', 'service:i18n');
}

export default {
  name: 'i18n-injector',
  initialize
};
