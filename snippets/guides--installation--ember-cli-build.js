module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
      stage: 1
    }
  });

  . . . .

}
