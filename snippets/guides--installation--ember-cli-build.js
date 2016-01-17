module.exports = function(defaults) {
  var addon = new EmberAddon(defaults, {
    babel: {
      includePolyfill: true,
      stage: 1
    }
  });

  . . . .

}
